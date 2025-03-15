import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail04Component } from './detail-04.component';

describe('Detail04Component', () => {
  let component: Detail04Component;
  let fixture: ComponentFixture<Detail04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
