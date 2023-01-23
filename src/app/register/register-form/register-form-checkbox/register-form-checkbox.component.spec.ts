import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormCheckboxComponent } from './register-form-checkbox.component';

describe('RegisterFormCheckboxComponent', () => {
  let component: RegisterFormCheckboxComponent;
  let fixture: ComponentFixture<RegisterFormCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
