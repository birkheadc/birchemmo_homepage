import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(sessionManager: SessionManagerService) {
    this.sessionManager = sessionManager;
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
    console.log("go to new page now");
  }
}
