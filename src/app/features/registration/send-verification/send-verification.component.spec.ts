import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerificationComponent } from './send-verification.component';

describe('SendVerificationComponent', () => {
  let component: SendVerificationComponent;
  let fixture: ComponentFixture<SendVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
