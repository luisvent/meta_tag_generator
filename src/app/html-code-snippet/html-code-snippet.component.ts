import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {highlight, languages, highlightElement} from 'prismjs';
import {UtilsService} from "../services/utils.service";

@Component({
  selector: 'app-html-code-snippet',
  templateUrl: './html-code-snippet.component.html',
  styleUrls: ['./html-code-snippet.component.css']
})
export class HtmlCodeSnippetComponent implements OnInit, OnChanges {


  @Input()
  textCode = ``;
  formattedCode = ``;

  constructor(private utils: UtilsService) {

  }

  ngOnInit(): void {
    this.init();
  }


  ngOnChanges(): void {
    this.init();
  }

  init() {
    this.formattedCode = '';
    this.formattedCode = this.formatCode(this.textCode);
  }

  formatCode(text: string) {
    const html = highlight(text, languages['html'], 'html');
    console.log(html);
    return html;
  }

  copyCode() {
    this.utils.copyToClipboard(this.textCode);
  }
}
