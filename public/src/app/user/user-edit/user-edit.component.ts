import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  @Input() user: User = new User(); // Asignación en el constructor
  editUser: User = new User;
  @Output() updateUserEvent = new EventEmitter();
  constructor(){}

  ngOnInit(){
    Object.assign(this.editUser, this.user)
  }
  update(){
    this.editUser.editable = false;
    this.updateUserEvent.emit({
      original: this.user,
      edited: this.editUser
    });
  }
}
