import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordPreviewComponent } from './discord-preview.component';

describe('DiscordPreviewComponent', () => {
  let component: DiscordPreviewComponent;
  let fixture: ComponentFixture<DiscordPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
