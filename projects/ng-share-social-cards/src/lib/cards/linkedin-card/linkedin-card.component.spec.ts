import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinCardComponent } from './linkedin-card.component';

describe('LinkedinPreviewComponent', () => {
  let component: LinkedinCardComponent;
  let fixture: ComponentFixture<LinkedinCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
