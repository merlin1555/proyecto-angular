import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import{ User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users!: User[]; // Cambia 'user' a 'users'
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  constructor(){}

  ngOnInit(){

  }

  destroy(user: User){
    const response = confirm('delete?')
    if(response){
      this.destroyUserEvent.emit(user);
    }
  }

  update(users: any){
    this.updateUserEvent.emit(users)
  }
}
