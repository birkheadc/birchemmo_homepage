import { Component, Input } from '@angular/core';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Component({
  selector: 'app-outcome-display',
  templateUrl: './outcome-display.component.html',
  styleUrls: ['./outcome-display.component.css']
})
export class OutcomeDisplayComponent {
  @Input()
  outcome: IActionOutcome | null = null;
}
