import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeStamp } from 'console';
import { map } from 'rxjs';
import { EmailVerificationService } from 'src/app/core/services/emailVerification/email-verification.service';
import IActionOutcome from 'src/app/core/types/actionOutcome/iActionOutcome';

@Component({
  selector: 'app-send-verification',
  templateUrl: './send-verification.component.html',
  styleUrls: ['./send-verification.component.css']
})
export class SendVerificationComponent implements OnInit {

  // This component needs to get the current user so it can:
  // reroute to home if the current user is already validated (why are you even on this page?)
  // add the email address to the page otherwise

  emailAddress: string | null= null;
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.emailAddress = this.route.snapshot.paramMap.get('emailAddress');
  }
}
