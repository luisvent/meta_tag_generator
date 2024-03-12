import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPreviewComponent } from './facebook-preview.component';

describe('FacebookPreviewComponent', () => {
  let component: FacebookPreviewComponent;
  let fixture: ComponentFixture<FacebookPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
