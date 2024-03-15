import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-discord-card',
  templateUrl: './discord-card.component.html',
  styleUrls: ['./discord-card.component.css']
})
export class DiscordCardComponent {

  @Input()
  metadata!: Metadata;

}
