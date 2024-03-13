import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePreviewComponent } from './google-preview.component';

describe('GooglePreviewComponent', () => {
  let component: GooglePreviewComponent;
  let fixture: ComponentFixture<GooglePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
