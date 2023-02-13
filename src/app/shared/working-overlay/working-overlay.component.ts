import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-working-overlay',
  templateUrl: './working-overlay.component.html',
  styleUrls: ['./working-overlay.component.css']
})
export class WorkingOverlayComponent {
  @Input()
  isWorking!: boolean;
}
