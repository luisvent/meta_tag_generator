import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-pinterest-preview',
  templateUrl: './pinterest-preview.component.html',
  styleUrls: ['./pinterest-preview.component.css']
})
export class PinterestPreviewComponent {

  @Input()
  metadata!: Metadata;

}
