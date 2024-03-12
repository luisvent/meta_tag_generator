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

  protected readonly Encoding = Encoding;
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
    const metadata = this.createMetadata(this.metadataForm.value);
    this.metadata = metadata;
    let tags = this.createHTMLTags(this.metadata);
    tags += this.createFacebookTags(this.metadata);
    tags += this.createTwitterTags(this.metadata);
    tags += `\n\n<!-- Meta Tags Generated with metatags.lv-apps.com -->\n`

    this.textCode = tags;
  }

  createMetadata(values: any): Metadata {
    return {
      title: values?.title || '',
      author: values?.author || '',
      url: values?.url? values.url.includes('https://')? values.url : `https://${values.url}` : '',
      favUrl: values?.favUrl || '',
      description: values?.description || '',
      keywords: values?.keywords.length > 0? (values?.keywords as string).split(',').map(k => k.trim()): [],
      allowRobots: values?.allowRobots === 'Yes',
      encoding: values?.encoding || Encoding.UTF8,
      language: values?.language || Language.English,
      imgUrl: values?.imgUrl? values.imgUrl.includes('https://')? values.imgUrl : `https://${values.imgUrl}` : '',
    };
  }

  createHTMLTags(metadata: Metadata) {

    let tags = '<!-- HTML Meta Tags -->\n';

    if(metadata.title.length > 0) {
      tags += `<meta name="title" content="${metadata.title}" />\n`;
    }

    if(metadata.description.length > 0) {
      tags += `<meta name="description" content="${metadata.description}" />\n`;
    }

    if(metadata.keywords.length > 0) {
      tags += `<meta name="keywords" content="${metadata.keywords.join((','))}" />\n`;
    }

    if(metadata.language.length > 0) {
      tags += `<meta name="language" content="${metadata.language}" />\n`;
    }

    if(metadata.encoding) {
      tags += `<meta http-equiv="Content-Type" content="text/html; charset=${metadata.encoding}">\n`;
    }

    if(metadata.allowRobots) {
      tags += `<meta name="robots" content="index, follow">\n`;
    }

    return tags;
  }

  createFacebookTags(metadata: Metadata) {

    let tags = '\n<!-- Facebook Meta Tags -->\n';
    tags += `<meta property="og:type" content="website">\n`;

    if(metadata.title.length > 0) {
      tags += `<meta property="og:title" content="${metadata.title}" />\n`;
      tags += `<meta property="og:site_name" content="${metadata.title}" />\n`;
    }

    if(metadata.description.length > 0) {
      tags += `<meta property="og:description" content="${metadata.description}" />\n`;
    }

    if(metadata.imgUrl.length > 0) {
      tags += `<meta property="og:image" content="${metadata.imgUrl}" />\n`;
    }

    if(metadata.url.length > 0) {
      tags += `<meta property="og:url" content="${metadata.url}">\n`;
    }

    return tags;
  }

  createTwitterTags(metadata: Metadata) {

      let tags = '\n<!-- Twitter Meta Tags -->\n';
    tags += `<meta name="twitter:card" content="summary_large_image">\n`;

    if(metadata.title.length > 0) {
      tags += `<meta name="twitter:title" content="${metadata.title}" />\n`;
    }

    if(metadata.description.length > 0) {
      tags += `<meta name="twitter:description" content="${metadata.description}" />\n`;
    }

    if(metadata.imgUrl.length > 0) {
      tags += `<meta name="twitter:image" content="${metadata.imgUrl}" />\n`;
    }

    if(metadata.url.length > 0) {
      const url = new URL(metadata.url);

      tags += `<meta property="twitter:domain" content="${url.hostname}">\n`;
      tags += `<meta property="twitter:url" content="${url.href}">`;
    }

    return tags;
  }
}
