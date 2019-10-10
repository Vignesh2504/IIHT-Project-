import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainermessageComponent } from './trainermessage.component';

describe('TrainermessageComponent', () => {
  let component: TrainermessageComponent;
  let fixture: ComponentFixture<TrainermessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainermessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
