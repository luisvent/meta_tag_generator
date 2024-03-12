import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCodeSnippetComponent } from './html-code-snippet.component';

describe('HtmlCodeSnippetComponent', () => {
  let component: HtmlCodeSnippetComponent;
  let fixture: ComponentFixture<HtmlCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCodeSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
