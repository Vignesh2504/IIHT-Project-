import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechaddComponent } from './techadd.component';

describe('TechaddComponent', () => {
  let component: TechaddComponent;
  let fixture: ComponentFixture<TechaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
