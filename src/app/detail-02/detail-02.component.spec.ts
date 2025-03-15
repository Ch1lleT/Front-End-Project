import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail02Component } from './detail-02.component';

describe('Detail02Component', () => {
  let component: Detail02Component;
  let fixture: ComponentFixture<Detail02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detail02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detail02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
