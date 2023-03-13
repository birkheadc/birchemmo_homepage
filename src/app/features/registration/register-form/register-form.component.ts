import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  userForm!: FormGroup;
  isWorking: boolean = false;
  outcome: IActionOutcome | null = null;

  @Input()
  submit!: (loginForm: FormGroup, callback: (outcome: IActionOutcome) => void) => void;

  ngOnInit(): void {
    this.userForm = this.generateUserForm();
    this.userForm.get('confirmPassword')?.addValidators([
      this.controlValuesMatch(
        this.userForm.get('password') as FormControl,
        this.userForm.get('confirmPassword') as FormControl
      )
    ]);
  }

  ngAfterViewInit() {
    const usernameInput: HTMLElement | null = document.querySelector('#Username');
    usernameInput?.focus();
  }

  generateUserForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(32), Validators.pattern("^[a-zA-Z0-9 ]*$")]),
      emailAddress: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      sendMeUpdates: new FormControl(false),
      agreeToTos: new FormControl(false, Validators.requiredTrue)
    });
  }

  controlValuesMatch(a: FormControl, b: FormControl): ValidatorFn {
    return () => a.value === b.value ? null : { valuesMatch: false };
  }

  getFormControl(controlName: string): FormControl {
    return this.userForm.controls[controlName] as FormControl;
  }

  onSubmit() {
    this.isWorking = true;
    this.submit(this.userForm, this.onSubmitted);
  }

  onSubmitted = (outcome: IActionOutcome) => {
    this.isWorking = false;
    this.outcome = outcome;
  }  
}
