import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

// Interfaz para el objeto 'users' en el método 'update'
interface UserUpdate {
  original: User;
  edited: User;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  ];
  constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
    //this.getUsers();
  }

  getUsers() {
    //this._userService.getUsers()
    //  .then(users => this.users);
  }

  create(user: User){
    this.users.push(user);
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  // Se especifica el tipo de 'users' como UserUpdate
  update(users: UserUpdate){
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }
}