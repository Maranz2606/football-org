import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../model/User';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User[];

  @Output()
  SelectedUser = new EventEmitter<User>();
  @Output()
  SelectedUserPost = new EventEmitter<User>();

  constructor() { }

  userClickEvent(user: User) {
    this.SelectedUser.emit(user);
    this.SelectedUserPost.emit(user);
  }
  ngOnInit() {
  }

}
