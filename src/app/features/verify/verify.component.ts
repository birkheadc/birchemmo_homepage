import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailVerificationService } from 'src/app/core/services/emailVerification/email-verification.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  isWorking: boolean = false;
  verificationCode: string | null = "";
  outcome: IActionOutcome | null = null;

  constructor(private route: ActivatedRoute, private emailVerificationService: EmailVerificationService) {}

  ngOnInit(): void {
    this.verificationCode = this.route.snapshot.paramMap.get('verificationCode');
    this.submitCode();
  }

  submitCode(): void {
    this.isWorking = true;
    this.emailVerificationService.postVerificationCode(this.verificationCode ?? "", (outcome: IActionOutcome) => {
      this.outcome = outcome;
      this.isWorking = false;
    });
  }
}
