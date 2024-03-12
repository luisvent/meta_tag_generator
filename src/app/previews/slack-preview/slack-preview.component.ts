import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-slack-preview',
  templateUrl: './slack-preview.component.html',
  styleUrls: ['./slack-preview.component.css']
})
export class SlackPreviewComponent {

  @Input()
  metadata!: Metadata;

}
