import {Component, Input} from '@angular/core';
import {Metadata} from "../../interfaces/metadata.interface";

@Component({
  selector: 'app-discord-preview',
  templateUrl: './discord-preview.component.html',
  styleUrls: ['./discord-preview.component.css']
})
export class DiscordPreviewComponent {

  @Input()
  metadata!: Metadata;

}
