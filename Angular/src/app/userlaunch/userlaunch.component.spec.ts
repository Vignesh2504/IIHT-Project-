import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlaunchComponent } from './userlaunch.component';

describe('UserlaunchComponent', () => {
  let component: UserlaunchComponent;
  let fixture: ComponentFixture<UserlaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
