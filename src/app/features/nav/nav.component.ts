import { Component } from '@angular/core';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sessionManager: SessionManagerService
  userManager: UserManagerService;

  constructor(sessionManager: SessionManagerService, userManager: UserManagerService) {
    this.sessionManager = sessionManager;
    this.userManager = userManager;
  }

  logout = (): void => {
    this.sessionManager.logout();
  }
}
