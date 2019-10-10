import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillbarcompletedComponent } from './skillbarcompleted.component';

describe('SkillbarcompletedComponent', () => {
  let component: SkillbarcompletedComponent;
  let fixture: ComponentFixture<SkillbarcompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillbarcompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillbarcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
