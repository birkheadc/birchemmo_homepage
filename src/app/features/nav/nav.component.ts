import { Component } from '@angular/core';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sessionManager: SessionManagerService

  constructor(sessionManager: SessionManagerService) {
    this.sessionManager = sessionManager;
  }

  logout = (): void => {
    this.sessionManager.logout();
  }
}
