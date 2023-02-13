import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCheckboxFieldComponent } from './simple-checkbox-field.component';

describe('SimpleCheckboxFieldComponent', () => {
  let component: SimpleCheckboxFieldComponent;
  let fixture: ComponentFixture<SimpleCheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCheckboxFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
