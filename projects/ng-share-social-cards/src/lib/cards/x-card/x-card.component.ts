import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-x-card',
  templateUrl: './x-card.component.html',
  styleUrls: ['./x-card.component.css']
})
export class XCardComponent {

  @Input()
  metadata!: Metadata;


}
