import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail05Component } from './detail-05.component';

describe('Detail05Component', () => {
  let component: Detail05Component;
  let fixture: ComponentFixture<Detail05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
