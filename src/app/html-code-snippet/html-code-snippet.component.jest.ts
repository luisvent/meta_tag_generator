
import { HtmlCodeSnippetComponent } from './html-code-snippet.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AntdModule} from "../ant.module";
import {NzCardComponent} from "ng-zorro-antd/card";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";

describe('HtmlCodeSnippetComponent', () => {
  let component: HtmlCodeSnippetComponent;
  let fixture: ComponentFixture<HtmlCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AntdModule, HttpClientTestingModule ],
      declarations: [HtmlCodeSnippetComponent, NzCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('passes', () => {
    expect(true).toBeTruthy();
  })

  it('should format code on init', () => {
    component.textCode = '<meta name="title" content="Testing tag">';
    fixture.detectChanges();
    component.init();

    expect(component.formattedCode).toEqual(`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Testing tag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>`);
  })

  it('should render formatted code', () => {
    component.textCode = '<meta name="title" content="Testing tag">';
    fixture.detectChanges();
    component.init();
    fixture.detectChanges();

    const codeContainer = fixture.debugElement.query(By.css('[data-testid="code-container"]'));

    expect(codeContainer.nativeElement.innerHTML).toEqual(`<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Testing tag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>`);
  })
});
