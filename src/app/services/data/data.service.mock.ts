import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DataServiceInterface } from './data.service';

import { User } from '../../models/user.model';
import { ContactMessage } from '../../models/contactMessage.model';

export class DataServiceMock implements DataServiceInterface {
  public static instance: DataServiceMock = new DataServiceMock();

  sendContactMessage(message: ContactMessage): Observable<Boolean> {
    return Observable.of(true);
  }
  getUsers(): Observable<User[]> {
    return Observable.of([{
      userId: 1,
      name: 'test',
      email: 'test@test.com'
    }]);
  }
}
