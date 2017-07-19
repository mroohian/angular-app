import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { ContactMessage } from '../../models/contactMessage.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm;

  message: ContactMessage = {
    name: '',
    email: '',
    body: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.resetMessage();
  }

  resetMessage() {
    this.contactForm.resetForm();
  }

  send(): Promise<Boolean> {
    return new Promise<any>((resolve, reject) => {
      // send the message.
      this.dataService.sendContactMessage(this.message).subscribe((success) => {
        resolve(success);
      }, (err) => {
        reject(err);
      });

      // clear out the message
      this.resetMessage();
    });
  }
}
