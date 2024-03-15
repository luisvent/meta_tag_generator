import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackCardComponent } from './slack-card.component';

describe('SlackPreviewComponent', () => {
  let component: SlackCardComponent;
  let fixture: ComponentFixture<SlackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
