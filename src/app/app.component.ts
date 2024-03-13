import {Component, OnInit} from '@angular/core';
import {Metadata} from "./interfaces/metadata.interface";
import {mockMetadata} from "./mock/metadata";
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import {Language} from "./enums/language.enum";
import {Encoding} from "./enums/content.enum";
import {Meta} from "@angular/platform-browser";
import {UtilsService} from "./services/utils.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  metadata: Metadata = mockMetadata;
  metadataForm: UntypedFormGroup;
  inputUrl = '';

  protected readonly Object = Object;
  protected readonly Language = Language;
  networks = [
    {
      key: 'facebook',
      name: 'Facebook',
      icon: 'bxl-facebook-circle'
    },
    {
      key: 'google',
      name: 'Google',
      icon: 'bxl-google'
    },
    {
      key: 'x',
      name: 'X / Twitter',
      icon: 'bxl-twitter'
    },
    {
      key: 'linkedin',
      name: 'LinkedIn',
      icon: 'bxl-linkedin'
    },
    {
      key: 'pinterest',
      name: 'Pinterest',
      icon: 'bxl-pinterest'
    },
    {
      key: 'discord',
      name: 'Discord',
      icon: 'bxl-discord'
    },
    {
      key: 'slack',
      name: 'Slack',
      icon: 'bxl-slack'
    },
  ];
  textCode = '';

  constructor(private fb: UntypedFormBuilder, private utils: UtilsService) {
    this.metadataForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', []],
      keywords: ['', []],
      imgUrl: ['', []],
      language: [Language.English, []],
      allowRobots: ['Yes', []],
      author: ['', []],
      description: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    // this.utils.getWebsite('https://jsonplaceholder.typicode.com/todos/1');
    // this.utils.getWebsite('https://discord.com');
  }

  generateMetatags(): void {
    const metadata = this.utils.createMetadata(this.metadataForm.value);
    this.metadata = metadata;
    let tags = this.utils.createHTMLTags(this.metadata);
    tags += this.utils.createFacebookTags(this.metadata);
    tags += this.utils.createTwitterTags(this.metadata);
    tags += `\n\n<!-- Meta Tags Generated with metatags.lv-apps.com -->\n`

    this.textCode = tags;
  }

}
