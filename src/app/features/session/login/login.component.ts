import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/core/services/session/sessionManager/session-manager.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionManagerService]
})
export class LoginComponent {
  sessionManager: SessionManagerService;
  router: Router;

  constructor(sessionManager: SessionManagerService, router: Router) {
    this.sessionManager = sessionManager;
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
    this.router.navigate(["/"]);
  }
}
