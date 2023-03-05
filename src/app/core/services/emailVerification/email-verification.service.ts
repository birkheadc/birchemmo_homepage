import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription, take, timeout, TimeoutError } from 'rxjs';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private http: HttpClient) { }

  requestVerificationEmail(emailAddress: string, callback: (outcome: IActionOutcome) => void): void {
    const url: string = environment.userApiUrl + "/email-verification/send/" + emailAddress;
    this.http.post(url, {})
      .pipe(
        take(1),
        timeout(environment.userApiTimeout),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          callback({
            wasSuccessful: false,
            message: 'Sorry, failed to send email.'
          });
          return new Observable();
        })
      )
      .subscribe(() => {
        callback({
          wasSuccessful: true,
          message: 'Email has been sent.'
        });
      });
  }

  postVerificationCode(code: string, callback: (outcome: IActionOutcome) => void): void {
    const url: string = environment.userApiUrl + "/email-verification/verify";
    const body = {
      token: code,
      expires: null
    }
    this.http.post(url, body)
      .pipe(
        take(1),
        timeout(environment.userApiTimeout),
        catchError((error: TimeoutError | HttpErrorResponse) => {
          let message = "Unknown error"
          if (error instanceof HttpErrorResponse) message = error.statusText;
          if (error instanceof TimeoutError) message = "Timed out connecting to server";
          callback({
            wasSuccessful: false,
            message: message
          })
          return new Observable()
        })
      )
      .subscribe(() => {
      callback({
        wasSuccessful: true,
        message: "Email address verified successfully."
      })
    });
  }
}
