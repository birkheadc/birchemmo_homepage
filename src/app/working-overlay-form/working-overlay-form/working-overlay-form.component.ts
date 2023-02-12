import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-working-overlay-form',
  templateUrl: './working-overlay-form.component.html',
  styleUrls: ['./working-overlay-form.component.css']
})
export class WorkingOverlayFormComponent {
  @Input()
  isWorking!: boolean;
}
