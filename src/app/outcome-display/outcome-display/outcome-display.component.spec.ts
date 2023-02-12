import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeDisplayComponent } from './outcome-display.component';

describe('OutcomeDisplayComponent', () => {
  let component: OutcomeDisplayComponent;
  let fixture: ComponentFixture<OutcomeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutcomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
