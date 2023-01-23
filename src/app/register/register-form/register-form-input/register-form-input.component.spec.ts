import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormInputComponent } from './register-form-input.component';

describe('RegisterFormInputComponent', () => {
  let component: RegisterFormInputComponent;
  let fixture: ComponentFixture<RegisterFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
