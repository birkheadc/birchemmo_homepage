import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RegisterFormComponent } from '../register-form.component';

@Component({
  selector: 'app-register-form-input',
  templateUrl: './register-form-input.component.html',
  styleUrls: ['./register-form-input.component.css']
})
export class RegisterFormInputComponent {
  @Input()
  control!: FormControl
  @Input()
  _id: string = "";
  @Input()
  type: string = "";
}
