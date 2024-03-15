import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-facebook-card',
  templateUrl: './facebook-card.component.html',
  styleUrls: ['./facebook-card.component.css']
})
export class FacebookCardComponent {

  @Input()
  metadata!: Metadata;

}
