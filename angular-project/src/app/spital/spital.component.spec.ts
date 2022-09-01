import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpitalComponent } from './spital.component';

describe('SpitalComponent', () => {
  let component: SpitalComponent;
  let fixture: ComponentFixture<SpitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
