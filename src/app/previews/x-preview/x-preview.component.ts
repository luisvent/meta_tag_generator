import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-x-preview',
  templateUrl: './x-preview.component.html',
  styleUrls: ['./x-preview.component.css']
})
export class XPreviewComponent {

  @Input()
  metadata!: Metadata;


}
