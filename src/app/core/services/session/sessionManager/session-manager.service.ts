import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, map, Observable, of, Subscription, timeout, TimeoutError } from 'rxjs';
import { SessionTokenService } from 'src/app/core/services/session/sessionTokenService/session-token.service';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService implements OnDestroy {

  token: ITokenWrapper | null = null;
  tokenSubscription: Subscription | null = null;
  TOKEN_KEY: string = "session_token";
  TOKEN_EXPIRATION_DATE_KEY: string = "session_token_expiration_date";

  constructor(
    private sessionTokenService: SessionTokenService,
    private userManager: UserManagerService,
  ) {
    this.checkSessionToken();
  }

  isLoggedIn(): boolean {
    return this.token != null;
  }
  
  login(credentials: ICredentials, callback: (outcome: IActionOutcome) => void) {

    // Todo: This whole thing is awful please fix it

    if (this.isLoggedIn() === true) {
      callback({
        wasSuccessful: false,
        message: "Could not login, already logged in. Please logout first."
      });
      return;
    }
    
    // Todo: For some reason my http client never connects anymore suddenly...

    this.tokenSubscription = this.sessionTokenService.getSessionToken(credentials)
      .pipe(
        timeout(8000),
        catchError((error: TimeoutError | HttpErrorResponse) => {
          let message = "Unknown error"
          if (error instanceof HttpErrorResponse) message = error.statusText;
          if (error instanceof TimeoutError) message = "Timed out connecting to server";
          callback({
            wasSuccessful: false,
            message: message
          })
          return new Observable<ITokenWrapper>
        })
      )
      .subscribe(
      (token: ITokenWrapper) => {
        this.userManager.setUser(token.token, (outcome: IActionOutcome) => {
          if (outcome.wasSuccessful === false) {
            callback(outcome);
          } else {
            this.setLoggedIn(token);
            callback({
              wasSuccessful: true,
              message: "Logging in..."
            })
          }
        })
      }
    );
  }

  logout() {
    this.setLoggedOut();
    this.userManager.removeUser();
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
    this.userManager.setUser(token, (outcome) => {
      if (outcome.wasSuccessful) {
        this.setLoggedIn({
          token: token,
          expires: date
        });
      } else {
        this.setLoggedOut();
      }
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
