import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ICredentials from 'src/app/core/types/credentials/iCredentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  isWorking: boolean = false;
  outcome: IActionOutcome | null = null;

  @Input()
  submit!: (loginForm: FormGroup, callback: (outcome: IActionOutcome) => void) => void;

  ngOnInit(): void {
    this.loginForm = this.generateLoginForm();
  }

  generateLoginForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  getFormControl(controlName: string): FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }

  onSubmit() {
    this.isWorking = true;
    this.submit(this.loginForm, this.onSubmitted);
  }

  onSubmitted = (outcome: IActionOutcome) => {
    this.isWorking = false;
    this.outcome = outcome;
  }
}
