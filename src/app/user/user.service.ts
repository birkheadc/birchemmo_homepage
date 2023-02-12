import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import IActionOutcome from '../api/actionOutcome/iActionOutcome';
import UserApi from '../api/userApi';
import { INewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async createUser(data: FormGroup, callback: (outcome: IActionOutcome) => void): Promise<void> {
    
    const user: INewUser = {
      credentials: {
        username: data.value.username,
        password: data.value.password
      },
      emailAddress: data.value.emailAddress,
      sendMeUpdates: data.value.sendMeUpdates
    }

    const outcome: IActionOutcome = await UserApi.postNewUser(user);
    callback(outcome);
  }
}
