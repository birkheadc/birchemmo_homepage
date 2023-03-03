import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sessionManager: SessionManagerService;
  userManager: UserManagerService;
  router: Router;

  constructor(sessionManager: SessionManagerService, router: Router, userManager: UserManagerService) {
    this.sessionManager = sessionManager;
    this.userManager = userManager;
    this.router = router;
  }

  login = async (loginForm: FormGroup, callback: (outcome: IActionOutcome) => void) => {
    const credentials: ICredentials = {
      username: loginForm.value.username,
      password: loginForm.value.password
    }
    this.sessionManager.login(credentials, (outcome: IActionOutcome) => {
      callback(outcome);
      if (outcome.wasSuccessful === true) {
        this.onLogin();
      }
    });
  }

  onLogin = () => {
    console.log(this.userManager.user);
    if (this.userManager.user == null) {
      this.router.navigate(["/"]);
      return;
    }
    if (this.userManager.user.userDetails.role < 2) {
      this.router.navigate(["/send-verification", this.userManager.user.userDetails.emailAddress]);
      this.sessionManager.logout();
      return;
    }
    this.router.navigate(["/"]);
  }
}
