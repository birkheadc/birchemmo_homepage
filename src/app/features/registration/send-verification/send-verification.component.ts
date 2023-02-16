import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailVerificationService } from 'src/app/core/services/emailVerification/email-verification.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Component({
  selector: 'app-send-verification',
  templateUrl: './send-verification.component.html',
  styleUrls: ['./send-verification.component.css']
})
export class SendVerificationComponent implements OnInit {
  isWorking: boolean = false;
  emailAddress: string | null = null;
  outcome: IActionOutcome = {
    wasSuccessful: false,
    message: "That email address is not valid."
  };

  constructor(private route: ActivatedRoute, private emailVerificationService: EmailVerificationService) {
    
  }
  ngOnInit(): void {
    this.emailAddress = this.route.snapshot.paramMap.get("email");
    if (this.isEmailAddressValid()) this.sendVerificationEmail();
  }

  isEmailAddressValid(): boolean {
    const re = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/;
    const match = this.emailAddress?.match(re);
    return match != null;
  }

  sendVerificationEmail() {
    this.isWorking = true;
    this.emailVerificationService.sendVerificationEmail(
      (outcome: IActionOutcome ) => {
        this.isWorking = false;
        this.outcome = outcome;
      }
    );
  }
}
