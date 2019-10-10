import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerlaunchComponent } from './trainerlaunch.component';

describe('TrainerlaunchComponent', () => {
  let component: TrainerlaunchComponent;
  let fixture: ComponentFixture<TrainerlaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerlaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
