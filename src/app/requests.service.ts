import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';
import { map } from 'rxjs/operators';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';
  constructor( private http: HttpClient ) { }

  getUser(): Observable<User[]> {
    return this.http.get(this.BASE_URL + '/users')
    .pipe(
      map((response: User[]) => {
        return response.map(UserJson =>
          User.convJson(UserJson));
        }
      ));
    }

    getUserId(id: number): Observable<Post[]> {

      return this.http.get(this.BASE_URL + '/posts/?userId=' + id)
      .pipe(
        map((response: Post[]) => {
          return response.map(PostJson =>
            Post.convJson(PostJson));

          }
        ));
      }

  }




