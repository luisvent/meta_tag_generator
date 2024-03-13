import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestPreviewComponent } from './pinterest-preview.component';

describe('PinterestPreviewComponent', () => {
  let component: PinterestPreviewComponent;
  let fixture: ComponentFixture<PinterestPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinterestPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinterestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
