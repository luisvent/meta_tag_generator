import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-slack-card',
  templateUrl: './slack-card.component.html',
  styleUrls: ['./slack-card.component.css']
})
export class SlackCardComponent {

  @Input()
  metadata!: Metadata;

}
