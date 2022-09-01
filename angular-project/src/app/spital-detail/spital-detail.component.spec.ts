import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpitalDetailComponent } from './spital-detail.component';

describe('SpitalDetailComponent', () => {
  let component: SpitalDetailComponent;
  let fixture: ComponentFixture<SpitalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpitalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
