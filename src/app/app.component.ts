import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Metadata} from "./interfaces/metadata.interface";
import {mockMetadata} from "./mock/metadata";
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import {Language} from "./enums/language.enum";
import {Encoding} from "./enums/content.enum";
import {Meta} from "@angular/platform-browser";
import {UtilsService} from "./services/utils.service";
import {animate, style, transition, trigger} from "@angular/animations";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('an', [
      transition(':enter', [
        style({ transform: 'translateY(10%)', opacity: 0 }),
        animate('100ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('100ms', style({ transform: 'translateY(-5%)', opacity: 0 })),
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit{

  @ViewChild('notificationTemplate', { static: false }) notificationTemplate?: TemplateRef<{}>;
  metadata: Metadata = mockMetadata;
  metadataForm: UntypedFormGroup;
  inputUrl = '';
  websiteProtocol = 'https://';
  loading = false;

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

  constructor(private fb: UntypedFormBuilder, private utils: UtilsService, private notificationService: NzNotificationService) {
    this.metadataForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', []],
      keywords: ['', []],
      imgUrl: ['', []],
      language: [Language.English, []],
      allowRobots: ['Yes', []],
      author: ['', []],
      description: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  ngOnInit(): void {
  }

  fillForm(metadata: Metadata ) {
    this.metadata = metadata;

    this.metadataForm.controls['title'].setValue(metadata.title);
    this.metadataForm.controls['url'].setValue(metadata.url);
    this.metadataForm.controls['keywords'].setValue(metadata.keywords.join(','));
    this.metadataForm.controls['imgUrl'].setValue(metadata.imgUrl);
    this.metadataForm.controls['language'].setValue(metadata.language);
    this.metadataForm.controls['allowRobots'].setValue(metadata.allowRobots? 'Yes' : 'No');
    this.metadataForm.controls['author'].setValue(metadata.author);
    this.metadataForm.controls['description'].setValue(metadata.description);

    this.generateMetatags();
  }

  getWebsiteMetatags() {
    if(this.inputUrl.length > 0) {
      this.loading = true;

      const completeUrl = this.inputUrl.includes(this.websiteProtocol)? this.inputUrl : `${this.websiteProtocol}${this.inputUrl}`;

      this.utils.getWebsiteMetatags(completeUrl).subscribe(response => {
        const metadata = this.utils.createMetadata(response.data);
        this.fillForm(metadata);
        this.loading = false;
      }, error => {
        this.loading = false;
        this.warningNotification('URL not valid', 'Invalid')
      })

    }
  }

  generateMetatags(): void {
    const metadata = this.utils.createMetadata(this.metadataForm.value);
    console.log(metadata)
    this.metadata = metadata;
    let tags = this.utils.createHTMLTags(this.metadata);
    tags += this.utils.createFacebookTags(this.metadata);
    tags += this.utils.createTwitterTags(this.metadata);
    tags += `\n\n<!-- Meta Tags Generated with metatags.lv-apps.com -->\n`

    this.textCode = tags;

    this.successNotification('Meta tags generated', 'Successfully')
  }

  errorNotification(message: string, errorMessage: string) {
    this.showNotification(message, {color: 'red', message: errorMessage});
  }


  warningNotification(message: string, warningMessage: string) {
    this.showNotification(message, {color: 'orange', message: warningMessage});
  }


  successNotification(message: string, successMessage: string) {
    this.showNotification(message, {color: 'green', message: successMessage});
  }

  neutralNotification(message: string) {
    this.showNotification(message);
  }

  showNotification(message: string, highlight?: {color: 'red' | 'orange' | 'green', message: string}) {

    this.notificationService.template(this.notificationTemplate!, { nzData: {
        highlight,
        message
      } });
  }

  codeCopied() {
    this.neutralNotification('Code copied!')
  }

}
