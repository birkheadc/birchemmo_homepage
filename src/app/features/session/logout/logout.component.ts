import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  sessionManager: SessionManagerService;
  router: Router;

  isWorking: boolean = false;

  constructor(sessionManager: SessionManagerService, router: Router) {
    this.sessionManager = sessionManager;
    this.router = router;
    this.logout();
  }

  logout(): void {
    // Logging out is instant because all that happens is the session token is throw out.
    // But the user will expect a quick loading page so we give it to them.
    this.isWorking = true;
    const timeout = setTimeout(() => {
      this.sessionManager.logout();
      this.isWorking = false;
    }, 1000);
  }
}
