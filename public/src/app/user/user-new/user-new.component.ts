import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrl: './user-new.component.css'
})
export class UserNewComponent  implements OnInit{
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;

  constructor(){}

  ngOnInit() {
    
  }
  create() {
    //console.log('Creating user:', this.newUser);
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }
}
