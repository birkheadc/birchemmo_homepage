import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user/user.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import { INewUser } from 'src/app/core/types/user/new-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userService: UserService;
  router: Router;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
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

    this.userService.createUser(user, (outcome: IActionOutcome): void => {
      callback(outcome)
      if (outcome.wasSuccessful === true) {
        this.onCreatedSuccessfully(userForm.value.emailAddress);
      }
    });
  }

  onCreatedSuccessfully(emailAddress: string): void {

    this.router.navigate(["/send-verification", emailAddress], { skipLocationChange: true });
  }
}