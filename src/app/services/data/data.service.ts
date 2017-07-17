import { Injectable } from '@angular/core';

import { User } from '../../models/user.model';
import { ContactMessage } from '../../models/contactMessage.model';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface DataServiceInterface {
  getUsers(): Observable<User[]>;
  sendContactMessage(message: ContactMessage): Observable<Boolean>;
}

@Injectable()
export class DataService implements DataServiceInterface {
  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    const returnObservable = this.http.get('/api/users')
      .map((response) => response.json());

    return returnObservable;
  }

  sendContactMessage(message: ContactMessage): Observable<Boolean> {
    const returnObservable = this.http.post('/api/contactMessage', message)
      .map((response) => response.ok);

    return returnObservable;
  }
}
