import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinPreviewComponent } from './linkedin-preview.component';

describe('LinkedinPreviewComponent', () => {
  let component: LinkedinPreviewComponent;
  let fixture: ComponentFixture<LinkedinPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
