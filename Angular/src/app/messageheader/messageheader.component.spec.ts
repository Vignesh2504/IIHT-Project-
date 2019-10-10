import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageheaderComponent } from './messageheader.component';

describe('MessageheaderComponent', () => {
  let component: MessageheaderComponent;
  let fixture: ComponentFixture<MessageheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
