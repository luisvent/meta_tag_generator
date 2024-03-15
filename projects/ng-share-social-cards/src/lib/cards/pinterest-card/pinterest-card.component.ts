import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-pinterest-card',
  templateUrl: './pinterest-card.component.html',
  styleUrls: ['./pinterest-card.component.css']
})
export class PinterestCardComponent {

  @Input()
  metadata!: Metadata;

}
