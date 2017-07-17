import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { ContactMessage } from '../../models/contactMessage.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  message: ContactMessage;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.resetMessage();
  }

  resetMessage() {
    this.message = {
      name: '',
      email: '',
      body: ''
    };
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
