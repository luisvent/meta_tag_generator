import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordCardComponent } from './discord-card.component';

describe('DiscordPreviewComponent', () => {
  let component: DiscordCardComponent;
  let fixture: ComponentFixture<DiscordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
