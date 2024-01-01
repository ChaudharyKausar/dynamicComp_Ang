import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueToothComponent } from './blue-tooth.component';

describe('BlueToothComponent', () => {
  let component: BlueToothComponent;
  let fixture: ComponentFixture<BlueToothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueToothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueToothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
