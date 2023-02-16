import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {

  constructor(private http: HttpClient) { }

  sendVerificationEmail(callback: (outcome: IActionOutcome) => void): void {
    // Todo: get the url from somewhere else
    const url: string = "http://localhost:5048/api/email-verification/send";
  }
}
