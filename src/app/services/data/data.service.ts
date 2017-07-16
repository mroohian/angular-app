import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';
import { ContactMessage } from '../../models/contactMessage.model';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private http : Http) { 
  }

  getUsers() : Observable<User[]> {
    let returnObservable = this.http.get('/api/users')
      .map((response) => response.json());

    return returnObservable;
  }

  sendContactMessage(message : ContactMessage) : Observable<Boolean> {
    let returnObservable = this.http.post('/api/contactMessage', message)
      .map((response) => response.ok);

    return returnObservable;
  }
}
