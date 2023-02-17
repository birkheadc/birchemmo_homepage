import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user/user.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';
import ITokenWrapper from 'src/app/core/types/tokenWrapper/tokenWrapper';
import IUser from 'src/app/core/types/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService implements OnDestroy {
  user: IUser | null = null;
  userSubscription: Subscription | null = null;

  constructor(private userService: UserService) {  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  setUser(token: string, callback: (outcome: IActionOutcome) => void): void {
    this.userSubscription = this.userService.getUser(token)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          callback({
            wasSuccessful: false,
            message: error.statusText
          });
          return new Observable<IUser>
        })
      )
      .subscribe(
        (user: IUser) => {
          this.user = user;
          callback({
            wasSuccessful: true,
            message: "Fetched user successfully"
          });
        }
      )
  }

  removeUser() {
    this.user = null;
  }


}
