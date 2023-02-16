import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, map, Observable, of, Subscription } from 'rxjs';
import { SessionTokenService } from 'src/app/core/services/session/sessionTokenService/session-token.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService implements OnDestroy {

  sessionTokenService: SessionTokenService;
  token: ITokenWrapper | null = null;
  tokenSubscription: Subscription | null = null;
  TOKEN_KEY: string = "session_token";
  TOKEN_EXPIRATION_DATE_KEY: string = "session_token_expiration_date";

  constructor(sessionTokenService: SessionTokenService) {
    this.sessionTokenService = sessionTokenService;
    this.checkSessionToken();
  }

  isLoggedIn(): boolean {
    this.checkSessionToken();
    return this.token != null;
  }
  
  login(credentials: ICredentials, callback: (outcome: IActionOutcome) => void) {
    if (this.isLoggedIn() === true) {
      callback({
        wasSuccessful: false,
        message: "Could not login, already logged in. Please logout first."
      });
      return;
    }
    this.tokenSubscription = this.sessionTokenService.getSessionToken(credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          callback({
            wasSuccessful: false,
            message: error.statusText
          })
          return new Observable<ITokenWrapper>
        })
      )
      .subscribe(
      (token: ITokenWrapper) => {
        if (token == null) {
          callback({
            wasSuccessful: false,
            message: "Failed to login"
          })
          return;
        }
        this.setLoggedIn(token)
        callback({
          wasSuccessful: true,
          message: "Logging in..."
        })
      }
    );
  }

  logout() {
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

  private checkSessionToken(): void {
    this.getTokenFromLocalStorage();
    this.logoutIfExpired();
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

  ngOnDestroy(): void {
    this.tokenSubscription?.unsubscribe();
  }
}
