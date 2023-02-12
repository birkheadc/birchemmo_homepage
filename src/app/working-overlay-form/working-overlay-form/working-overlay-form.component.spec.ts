import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOverlayFormComponent } from './working-overlay-form.component';

describe('WorkingOverlayFormComponent', () => {
  let component: WorkingOverlayFormComponent;
  let fixture: ComponentFixture<WorkingOverlayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingOverlayFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingOverlayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
