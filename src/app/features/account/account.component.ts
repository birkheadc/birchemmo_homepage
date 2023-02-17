import { Component } from '@angular/core';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  userManager: UserManagerService;

  constructor(userManager: UserManagerService) {
    this.userManager = userManager;
  }
}
