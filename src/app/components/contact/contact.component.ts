import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { ContactMessage } from '../../models/contactMessage.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'body': [null, this.badWordsValidatorFn]
    });
  }

  ngOnInit() {
    this.resetMessage();
  }

  resetMessage() {
    this.reactiveForm.reset();
  }

  send(formValue): Promise<Boolean> {
    const message: ContactMessage = {
      name: formValue.name,
      email: formValue.email,
      body: formValue.body
    };

    return new Promise<any>((resolve, reject) => {
      // send the message.
      this.dataService.sendContactMessage(message).subscribe((success) => {
        resolve(success);
      }, (err) => {
        reject(err);
      });

      // clear out the message
      this.resetMessage();
    });
  }

  changeValidators() {
    this.reactiveForm.controls['body'].setValidators(Validators.required);
    this.reactiveForm.controls['body'].updateValueAndValidity();
  }

  getJson(obj: any): string {
    return JSON.stringify(obj);
  }

  badWordsValidatorFn(c: AbstractControl): ValidationErrors | null {
    const val = c.value;

    if (val && (typeof val === 'string') && val.indexOf('damn') > -1) {
      const errors: ValidationErrors = {};

      errors.swearWords = 'bad words and swears are not allowed.';

      return errors;
    }

    return null;
  }
}
