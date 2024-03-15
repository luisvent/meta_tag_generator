import { NgModule } from '@angular/core';
import {DiscordCardComponent} from "./cards/discord-card/discord-card.component";
import {FacebookCardComponent} from "./cards/facebook-card/facebook-card.component";
import {GoogleCardComponent} from "./cards/google-card/google-card.component";
import {LinkedinCardComponent} from "./cards/linkedin-card/linkedin-card.component";
import {PinterestCardComponent} from "./cards/pinterest-card/pinterest-card.component";
import {SlackCardComponent} from "./cards/slack-card/slack-card.component";
import {XCardComponent} from "./cards/x-card/x-card.component";
import {Xv2CardComponent} from "./cards/xv2-card/xv2-card.component";

@NgModule({
  declarations: [
    DiscordCardComponent,
    FacebookCardComponent,
    GoogleCardComponent,
    LinkedinCardComponent,
    PinterestCardComponent,
    SlackCardComponent,
    XCardComponent,
    Xv2CardComponent
  ],
  exports: [
    DiscordCardComponent,
    FacebookCardComponent,
    GoogleCardComponent,
    LinkedinCardComponent,
    PinterestCardComponent,
    SlackCardComponent,
    XCardComponent,
    Xv2CardComponent
  ]
})
export class CardsModule { }
