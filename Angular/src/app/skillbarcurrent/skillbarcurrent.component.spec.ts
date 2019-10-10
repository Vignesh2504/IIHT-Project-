import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillbarcurrentComponent } from './skillbarcurrent.component';

describe('SkillbarcurrentComponent', () => {
  let component: SkillbarcurrentComponent;
  let fixture: ComponentFixture<SkillbarcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillbarcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillbarcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
