import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AntdModule} from "./ant.module";
import { XPreviewComponent } from './previews/x-preview/x-preview.component';
import { SlackPreviewComponent } from './previews/slack-preview/slack-preview.component';
import {GooglePreviewComponent} from "./previews/google-preview/google-preview.component";
import {FacebookPreviewComponent} from "./previews/facebook-preview/facebook-preview.component";
import {LinkedinPreviewComponent} from "./previews/linkedin-preview/linkedin-preview.component";
import {PinterestPreviewComponent} from "./previews/pinterest-preview/pinterest-preview.component";
import { DiscordPreviewComponent } from './previews/discord-preview/discord-preview.component';
import { Xv2PreviewComponent } from './previews/xv2-preview/xv2-preview.component';
import {ImgFallbackDirective} from "./directives/img-fallback.directive";
import { HtmlCodeSnippetComponent } from './html-code-snippet/html-code-snippet.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GooglePreviewComponent,
    XPreviewComponent,
    FacebookPreviewComponent,
    LinkedinPreviewComponent,
    PinterestPreviewComponent,
    SlackPreviewComponent,
    DiscordPreviewComponent,
    Xv2PreviewComponent,
    ImgFallbackDirective,
    HtmlCodeSnippetComponent,
  ],
  imports: [
    AntdModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
