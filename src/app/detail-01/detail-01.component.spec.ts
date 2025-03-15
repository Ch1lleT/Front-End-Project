import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail01Component } from './detail-01.component';

describe('Detail01Component', () => {
  let component: Detail01Component;
  let fixture: ComponentFixture<Detail01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
