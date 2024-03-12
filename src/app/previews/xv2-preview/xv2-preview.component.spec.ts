import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xv2PreviewComponent } from './xv2-preview.component';

describe('Xv2PreviewComponent', () => {
  let component: Xv2PreviewComponent;
  let fixture: ComponentFixture<Xv2PreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Xv2PreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xv2PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
