import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongfComponent } from './longf.component';

describe('LongfComponent', () => {
  let component: LongfComponent;
  let fixture: ComponentFixture<LongfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
