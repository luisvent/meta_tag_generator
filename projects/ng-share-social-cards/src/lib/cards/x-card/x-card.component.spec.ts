import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XCardComponent } from './x-card.component';

describe('XPreviewComponent', () => {
  let component: XCardComponent;
  let fixture: ComponentFixture<XCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
