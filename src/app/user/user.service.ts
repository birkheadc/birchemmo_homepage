import { Injectable } from '@angular/core';
import { INewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  createUser(user: INewUser) {
    console.log("Create this user:", user);
  }
}
