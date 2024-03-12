import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-facebook-preview',
  templateUrl: './facebook-preview.component.html',
  styleUrls: ['./facebook-preview.component.css']
})
export class FacebookPreviewComponent {

  @Input()
  metadata!: Metadata;

}
