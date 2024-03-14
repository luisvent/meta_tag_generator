import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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

  @Output()
  codeCopied: EventEmitter<any> = new EventEmitter();

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
    this.formattedCode = this.utils.formatCode(this.textCode);
  }

  copyCode() {
    this.utils.copyToClipboard(this.textCode);
    this.codeCopied.emit();
  }
}
