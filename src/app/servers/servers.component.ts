import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer0';

  // Property Binding with [disabled]
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  // Event Binding for "Add Server" Buttons and Server Name
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServerName() {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
