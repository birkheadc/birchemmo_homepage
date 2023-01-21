import { Component, Injectable } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  private userService: UserService

  constructor(userService: UserService) {
    this.userService = userService;
  }

  createUser = (event: FormEvent) => {
    
  }
}
