import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UserApi from 'src/app/api/userApi';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import { INewUser } from 'src/app/core/types/user/new-user';
import IUser from 'src/app/core/types/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async createUser(user: INewUser): Promise<IActionOutcome> {
    // Todo: Re-write this with HttpClient
    // const outcome: IActionOutcome = await UserApi.postNewUser(user);
    // return outcome;
  }

  getUser(token: string): Observable<IUser> {
    // Todo: Get this string from somewhere else
    const url: string = "http://localhost:5048/api/user";
    const headers: HttpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + token
    })
    return this.http.get<IUser>(url, { headers: headers });
  }
}
