import { Component } from '@angular/core';
import { UserManagerService } from 'src/app/core/services/user/userManager/user-manager.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  userManager: UserManagerService;

  constructor(userManager: UserManagerService) {
    this.userManager = userManager;
  }
}
