import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-nav',
  templateUrl: './large-nav.component.html',
  styleUrls: ['./large-nav.component.css']
})
export class LargeNavComponent {
  @Input()
  isLoggedIn: boolean = false;
  @Input()
  username: string = 'error';
}
