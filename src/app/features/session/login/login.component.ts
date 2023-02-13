import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';
import { SessionService } from '../session.service';
import ITokenWrapper from '../../../core/types/tokenWrapper/tokenWrapper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionService]
})
export class LoginComponent {
  sessionService: SessionService;

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService;
  }

  login = async (loginForm: FormGroup, callback: (outcome: IActionOutcome<any>) => void) => {
    const credentials: ICredentials = {
      username: loginForm.value.username,
      password: loginForm.value.password
    }
    const outcome: IActionOutcome<ITokenWrapper> = await this.sessionService.login(credentials);
    const token: ITokenWrapper | null | undefined = outcome.body;
    if (outcome.wasSuccessful === false || outcome.body == null) {
      callback(outcome);
    }
    else {
      console.log("Log in with token: ", outcome.body);
    }
  }
}
