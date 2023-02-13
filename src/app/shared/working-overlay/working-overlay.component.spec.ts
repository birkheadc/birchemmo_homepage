import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingOverlayComponent } from './working-overlay.component';

describe('WorkingOverlayFormComponent', () => {
  let component: WorkingOverlayComponent;
  let fixture: ComponentFixture<WorkingOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
