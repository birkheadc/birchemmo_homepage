import { Injectable } from '@angular/core';
import IActionOutcome from '../../core/types/actionOutcome/iActionOutcome';
import SessionApi from '../../api/sessionApi';
import ICredentials from '../../core/types/credentials/iCredentials';
import ITokenWrapper from '../../core/types/tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  async login(credentials: ICredentials): Promise<IActionOutcome<ITokenWrapper>> {
    const outcome: IActionOutcome<ITokenWrapper> = await SessionApi.getSessionToken(credentials);
    return outcome;
  }
}
