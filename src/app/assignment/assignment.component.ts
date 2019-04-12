import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  usernameStatus: string = 'No username was created.';
  userName: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  //
  onResetUsername() {
    this.usernameStatus = 'Username was created: ' + this.userName;
    this.userName = '';
  }

  onUpdateUserName() {
    this.userName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
