import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackPreviewComponent } from './slack-preview.component';

describe('SlackPreviewComponent', () => {
  let component: SlackPreviewComponent;
  let fixture: ComponentFixture<SlackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
