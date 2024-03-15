import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-xv2-card',
  templateUrl: './xv2-card.component.html',
  styleUrls: ['./xv2-card.component.css']
})
export class Xv2CardComponent {

  @Input()
  metadata!: Metadata;

}
