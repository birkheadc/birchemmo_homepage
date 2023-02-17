import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private http: HttpClient) { }

  postVerificationCode(code: string, callback: (outcome: IActionOutcome) => void): void {
    setTimeout(() => {
      callback({
        wasSuccessful: false,
        message: "Not yet implemented"
      })
    }, 1000)
  }
}
