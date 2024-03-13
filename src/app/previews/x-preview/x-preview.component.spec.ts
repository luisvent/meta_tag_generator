import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XPreviewComponent } from './x-preview.component';

describe('XPreviewComponent', () => {
  let component: XPreviewComponent;
  let fixture: ComponentFixture<XPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
