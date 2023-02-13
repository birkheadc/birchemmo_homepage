import { Injectable } from '@angular/core';
import IActionOutcome from '../../types/actionOutcome/iActionOutcome';
import UserApi from '../../../api/userApi';
import { INewUser } from '../../types/user/new-user';

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
