import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-linkedin-card',
  templateUrl: './linkedin-card.component.html',
  styleUrls: ['./linkedin-card.component.css']
})
export class LinkedinCardComponent {

  @Input()
  metadata!: Metadata;

}
