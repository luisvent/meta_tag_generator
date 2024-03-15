
import { HtmlCodeSnippetComponent } from './html-code-snippet.component';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AntdModule} from "../ant.module";
import {NzCardComponent} from "ng-zorro-antd/card";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";
import {first} from "rxjs";
import {UtilsService} from "../services/utils.service";
import {mockTagsHTML} from "../mock/metadata";

describe('HtmlCodeSnippetComponent', () => {
  let component: HtmlCodeSnippetComponent;
  let fixture: ComponentFixture<HtmlCodeSnippetComponent>;
  let mockUtilsService = {
    copyToClipboard: (text: string) => {
    },
    formatCode: (code: string) => {
      return mockTagsHTML.formatted;
  }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AntdModule, HttpClientTestingModule ],
      declarations: [HtmlCodeSnippetComponent, NzCardComponent],
      providers: [{provide: UtilsService, useValue: mockUtilsService}]
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
    component.textCode = mockTagsHTML.plain;
    fixture.detectChanges();
    component.init();

    expect(component.formattedCode).toEqual(mockTagsHTML.formatted);
  })

  it('should render formatted code', () => {
    component.textCode = mockTagsHTML.plain;
    fixture.detectChanges();
    component.init();
    fixture.detectChanges();

    const codeContainer = fixture.debugElement.query(By.css('[data-testid="code-container"]'));

    expect(codeContainer.nativeElement.innerHTML).toEqual(mockTagsHTML.rendered);
  })

  it('should emit copy event on copy icon click', () => {

    const copyIconElement = fixture.debugElement.query(By.css('[data-testid="copy-icon"]'));
    let emitted = false;

    component.codeCopied.pipe(first()).subscribe(data => {
      emitted = true;
    })

    copyIconElement.triggerEventHandler('click');
    expect(emitted).toBeTruthy();
  })
});
