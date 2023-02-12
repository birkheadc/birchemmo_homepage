import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  userService: UserService;
  userForm!: FormGroup;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userForm = this.generateUserForm();
    this.userForm.get('confirmPassword')?.addValidators([
      this.controlValuesMatch(
        this.userForm.get('password') as FormControl,
        this.userForm.get('confirmPassword') as FormControl
      )
    ]);
  }

  generateUserForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(32), Validators.pattern("^[a-zA-Z0-9 ]*$")]),
      emailAddress: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(64)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      sendMeMail: new FormControl(false),
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
    // Todo
    console.log("create user...", this.userForm);
    console.log(this.userForm.valid ? "This form is valid." : "THIS FORM IS NOT VALID!");
  }
}
