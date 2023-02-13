import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextFieldComponent } from './simple-text-field.component';

describe('SimpleTextFieldComponent', () => {
  let component: SimpleTextFieldComponent;
  let fixture: ComponentFixture<SimpleTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTextFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
