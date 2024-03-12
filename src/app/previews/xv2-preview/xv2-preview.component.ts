import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-xv2-preview',
  templateUrl: './xv2-preview.component.html',
  styleUrls: ['./xv2-preview.component.css']
})
export class Xv2PreviewComponent {

  @Input()
  metadata!: Metadata;

}
