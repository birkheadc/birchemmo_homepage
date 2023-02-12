import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  login(credentials: any) {
    console.log("Log in with credentials: ", credentials);
  }
}
