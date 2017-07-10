import { Injectable } from '@angular/core';
import { User } from '../../models/user.model'

@Injectable()
export class DataService {
  constructor() { }

  getUsers() : User[] {
    return [{
      userId: 1,
      name: 'afsoun amiri',
      email: 'afsoun1981@gmail.com'
    }, {
      userId: 2,
      name: 'reza roohian',
      email: 'mrroohian@gmail.com'
    }];
  }
}
