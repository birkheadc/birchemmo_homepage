import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeNavComponent } from './large-nav.component';

describe('LargeNavComponent', () => {
  let component: LargeNavComponent;
  let fixture: ComponentFixture<LargeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
