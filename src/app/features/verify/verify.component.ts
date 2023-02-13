import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  verificationCode: string | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.verificationCode = this.route.snapshot.paramMap.get('verificationCode');
  }
}
