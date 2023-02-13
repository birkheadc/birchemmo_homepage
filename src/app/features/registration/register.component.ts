import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import { INewUser } from 'src/app/core/types/user/new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  submit = async (userForm: FormGroup, callback: (outcome: IActionOutcome) => void) => {
    const user: INewUser = {
      credentials: {
        username: userForm.value.username,
        password: userForm.value.password
      },
      emailAddress: userForm.value.emailAddress,
      sendMeUpdates: userForm.value.sendMeUpdates
    };

    const outcome: IActionOutcome = await this.userService.createUser(user);
    callback(outcome);
  }
}