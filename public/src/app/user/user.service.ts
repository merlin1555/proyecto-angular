import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

import "rxjs";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient
  ) { }

  create (user: User){
    this._http.post('/users', user)
    return this._http.post('/users', user).toPromise();
  }

  destroy (user: User){
    this._http.delete('/users/' + user._id)
    return this._http.delete('/users/' + user._id).toPromise();
  }

  update (user: User){
    this._http.put('/users/' + user._id, user)
    return this._http.put('/users/' + user._id, user).toPromise();
  }

  getUsers (){
    this._http.get('/users')
    return this._http.get('/users').toPromise();
  }

  getUser (user: User){
    this._http.get('/users/' + user._id)
    return this._http.get('/users' + user._id).toPromise();
  }
}
