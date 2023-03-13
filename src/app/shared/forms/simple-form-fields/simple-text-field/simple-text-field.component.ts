import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-text-field',
  templateUrl: './simple-text-field.component.html',
  styleUrls: ['./simple-text-field.component.css']
})
export class SimpleTextFieldComponent {
  @Input()
  _id!: string;
  @Input()
  type!: string;
  @Input()
  control!: FormControl;
}
