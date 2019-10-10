import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerheaderComponent } from './trainerheader.component';

describe('TrainerheaderComponent', () => {
  let component: TrainerheaderComponent;
  let fixture: ComponentFixture<TrainerheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
