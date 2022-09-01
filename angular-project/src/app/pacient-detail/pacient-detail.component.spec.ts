import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientDetailComponent } from './pacient-detail.component';

describe('PacientDetailComponent', () => {
  let component: PacientDetailComponent;
  let fixture: ComponentFixture<PacientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
