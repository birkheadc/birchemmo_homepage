import { Injectable } from '@angular/core';
import UserApi from 'src/app/api/userApi';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import { INewUser } from 'src/app/core/types/user/new-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async createUser(user: INewUser): Promise<IActionOutcome> {
    const outcome: IActionOutcome = await UserApi.postNewUser(user);
    return outcome;
  }
}
