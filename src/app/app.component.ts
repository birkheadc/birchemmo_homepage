import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // sessionManager: SessionManagerService;

  // constructor(sessionManager: SessionManagerService) {
  //   this.sessionManager = sessionManager;
  // }

  ngOnInit(): void {
    // this.sessionManager
  }
}
