import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription, take, timeout, TimeoutError } from 'rxjs';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private http: HttpClient) { }

  requestVerificationEmail(emailAddress: string): void {
    const url: string = "http://localhost:5048/api/email-verification/send/" + emailAddress;
    this.http.post(url, {})
      .pipe(
        take(1),
        timeout(3000),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return new Observable();
        })
      )
      .subscribe(
        () => console.log("success")
      );
  }

  postVerificationCode(code: string, callback: (outcome: IActionOutcome) => void): void {
    // Todo: Get this string from somewhere else
    const url: string = "http://localhost:5048/api/email-verification/verify";
    const body = {
      token: code,
      expires: null
    }
    this.http.post(url, body)
      .pipe(
        take(1),
        timeout(3000),
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
