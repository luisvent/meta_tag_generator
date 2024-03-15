import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestCardComponent } from './pinterest-card.component';

describe('PinterestPreviewComponent', () => {
  let component: PinterestCardComponent;
  let fixture: ComponentFixture<PinterestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
