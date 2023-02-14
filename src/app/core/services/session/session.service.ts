import { Injectable } from '@angular/core';
import SessionApi from 'src/app/api/sessionApi';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  token: ITokenWrapper | null = null;
  TOKEN_KEY: string = "session_token";
  TOKEN_EXPIRATION_DATE_KEY: string = "session_token_expiration_date";

  isLoggedIn(): boolean {
    this.getTokenFromLocalStorage();
    this.logoutIfExpired();
    return this.token != null;
  }

  async login(credentials: ICredentials): Promise<IActionOutcome> {
    if (this.isLoggedIn() === true) {
      return {
        wasSuccessful: false,
        message: "Could not login, already logged in. Please logout first."
      }
    }
    const outcome: IActionOutcome<ITokenWrapper> = await SessionApi.getSessionToken(credentials);
    if (outcome.wasSuccessful === true && outcome.body != null) {
      console.log("TOKEN: ", outcome.body);
      this.setLoggedIn(outcome.body);
    }
    return {
      wasSuccessful: outcome.wasSuccessful,
      message: outcome.message
    };
  }

  logout(): void {
    this.setLoggedOut();
  }

  private getTokenFromLocalStorage(): void {
    if (this.token != null) return;
    const token: string | null = window.localStorage.getItem(this.TOKEN_KEY);
    const date_string: string | null = window.localStorage.getItem(this.TOKEN_EXPIRATION_DATE_KEY);
    const date: Date | null = date_string ? new Date(date_string) : null;
    if (token == null || date == null) {
      this.setLoggedOut();
      return;
    }
    this.setLoggedIn({
      token: token,
      expires: date
    });
  }

  private logoutIfExpired(): void {
    if (this.token == null) return;
    if (new Date() > this.token.expires) this.setLoggedOut();
  }

  private setLoggedIn(token: ITokenWrapper): void {
    this.token = token;
    window.localStorage.setItem(this.TOKEN_KEY, token.token);
    window.localStorage.setItem(this.TOKEN_EXPIRATION_DATE_KEY, token.expires.toString());
  }

  private setLoggedOut(): void {
    this.token = null;
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.removeItem(this.TOKEN_EXPIRATION_DATE_KEY);
  }
}
