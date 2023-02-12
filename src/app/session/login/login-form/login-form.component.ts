import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  sessionService: SessionService
  loginForm!: FormGroup;

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService;
  }

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  generateLoginForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, []),
      password: new FormControl(null, [])
    });
  }

  getFormControl(controlName: string): FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }

  onSubmit() {
    // Todo
    console.log("login...");
  }
}
