import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import IActionOutcome from '../api/actionOutcome/iActionOutcome';
import SessionApi from '../api/sessionApi';
import ICredentials from './credentials/iCredentials';
import ITokenWrapper from './tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  async login(loginForm: FormGroup) {
    console.log("Log in with credentials: ", loginForm.value);
    const credentials: ICredentials = {
      username: loginForm.value.username,
      password: loginForm.value.password
    }

    const outcome: IActionOutcome<ITokenWrapper> = await SessionApi.getSessionToken(credentials);
    console.log('Outcome: ', outcome);
  }
}
