import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaNewComponent } from './trivia-new.component';

describe('TriviaNewComponent', () => {
  let component: TriviaNewComponent;
  let fixture: ComponentFixture<TriviaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
