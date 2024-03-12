import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-linkedin-preview',
  templateUrl: './linkedin-preview.component.html',
  styleUrls: ['./linkedin-preview.component.css']
})
export class LinkedinPreviewComponent {

  @Input()
  metadata!: Metadata;

}
