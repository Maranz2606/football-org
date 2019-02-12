import { Component, Input } from '@angular/core';
import { RequestsService } from './requests.service';
import { User } from './model/User';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercitazione';

@Input()
 user: User [] = [];
 selectedUser: User = null;
 selectedUserPost: Post[] = null;

  constructor(private request: RequestsService) {
    const successhandler = (response) => {
      this.user = response;

    };

    const errorHandler = (error) => {
      console.log('error', error);
    };
    this.request.getUser().subscribe(successhandler, errorHandler);


  }

  postClickEvent(user: User) {

  }



  userClickEvent(user: User) {
    this.request.getUserId(user.id).pipe(
      )
    .subscribe(post => {

      this.selectedUserPost = post;
    });

    this.selectedUser = user;
  }


}



