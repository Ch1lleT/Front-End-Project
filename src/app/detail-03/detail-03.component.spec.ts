import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail03Component } from './detail-03.component';

describe('Detail03Component', () => {
  let component: Detail03Component;
  let fixture: ComponentFixture<Detail03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
