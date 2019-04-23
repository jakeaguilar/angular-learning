import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  allowNewPass = false;
  passCreated = false;
  passCreationStatus = 'No pass was created!';
  secretPassword = '';
  passwords = [];

  // Property Binding with [disabled]
  constructor() {
    setTimeout(() => {
      this.allowNewPass = true;
    },2000)
  }

  ngOnInit() {
  }

  // Event Binding for "Add Server" Buttons and Server Name
  onCreatePass() {
    this.passCreated = true;
    this.passwords.push(this.secretPassword);
    this.passCreationStatus = 'Password was created! ' + this.secretPassword;
    console.log(this.secretPassword)

  }

}
