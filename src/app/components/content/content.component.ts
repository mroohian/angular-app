import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users: User[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  loadUsers() {
    var usersObservable = this.dataService.getUsers();
    usersObservable.subscribe((users) => {
      /* onNext */
      this.users = users;
      console.log('onNext');
    }, (err) => {
      /* onError */
      console.log('onError');
    }, () => {
      /* onComplete */
      console.log('onComplete');
    });

  }
}
