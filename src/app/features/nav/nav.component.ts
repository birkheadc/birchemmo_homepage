import { Component } from '@angular/core';
import { SessionService } from 'src/app/core/services/session/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  sessionService: SessionService

  constructor(sessionService: SessionService) {
    this.sessionService = sessionService;
  }

  logout = (): void => {
    this.sessionService.logout();
  }
}
