  import { Component } from '@angular/core';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userManager: UserManagerService;

  constructor(userManager: UserManagerService) {
    console.log("1");
    this.userManager = userManager;
  }
}
