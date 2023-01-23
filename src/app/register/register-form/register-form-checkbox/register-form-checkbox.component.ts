import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form-checkbox',
  templateUrl: './register-form-checkbox.component.html',
  styleUrls: ['./register-form-checkbox.component.css']
})
export class RegisterFormCheckboxComponent {
  @Input()
  _id: string = "";
  @Input()
  control!: FormControl;
}
