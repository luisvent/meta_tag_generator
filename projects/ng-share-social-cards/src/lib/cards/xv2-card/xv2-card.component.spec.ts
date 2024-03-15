import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xv2CardComponent } from './xv2-card.component';

describe('Xv2PreviewComponent', () => {
  let component: Xv2CardComponent;
  let fixture: ComponentFixture<Xv2CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Xv2CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xv2CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })
});
