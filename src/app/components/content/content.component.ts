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
    console.log('loadUsers');
    this.users = this.dataService.getUsers();
  }
}
