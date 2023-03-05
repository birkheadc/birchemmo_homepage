import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, timeout, TimeoutError } from 'rxjs';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import { INewUser } from 'src/app/core/types/user/new-user';
import IUser from 'src/app/core/types/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: INewUser, callback: (outcome: IActionOutcome) => void): void {
    const url: string = environment.userApiUrl + "/user/new";
    this.http.post(url, user)
      .pipe(
        timeout(environment.userApiTimeout),
        catchError((error: HttpErrorResponse | TimeoutError) => {
          let message = "Unknown error";
          if (error instanceof HttpErrorResponse) message = error.statusText;
          if (error instanceof TimeoutError) message = "Timed out connecting to server";
          callback({
            wasSuccessful: false,
            message: message
          })
          return new Observable
        })
      ).subscribe(() => {
        callback({
          wasSuccessful: true,
          message: "New user created successfully."
        });
      });
    // Todo: Re-write this with HttpClient
    // const outcome: IActionOutcome = await UserApi.postNewUser(user);
    // return outcome;
  }

  getUser(token: string): Observable<IUser> {
    const url: string = environment.userApiUrl + "/user";
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + token
    })
    return this.http.get<IUser>(url, { headers: headers });
  }
}
