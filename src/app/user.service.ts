import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './model/user';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  findAll() : Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
