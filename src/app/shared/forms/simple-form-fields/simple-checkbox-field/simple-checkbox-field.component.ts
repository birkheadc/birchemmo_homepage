import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-checkbox-field',
  templateUrl: './simple-checkbox-field.component.html',
  styleUrls: ['./simple-checkbox-field.component.css']
})
export class SimpleCheckboxFieldComponent {
  @Input()
  _id!: string;
  @Input()
  control!: FormControl;
}
