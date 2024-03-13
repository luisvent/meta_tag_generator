
import { UtilsService } from './utils.service';
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {mockMetadata} from "../mock/metadata";
import {Encoding} from "../enums/content.enum";
import {Language} from "../enums/language.enum";
import {APIMetatags} from "../interfaces/api-metadata.interface";

describe('UtilsService', () => {
  let service: UtilsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
      imports: [HttpClientTestingModule]
    })

    service = TestBed.inject(UtilsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('createMetadata', () => {

    it('should return complete metadata', () => {
      const formData = {
        title: 'Meta Tags / OG Generator - Create and Preview ',
        author: 'Luis Ventura',
        url: 'https://metatags.lv-apps.com',
        favUrl: 'metatags.lv-apps.com/mtt_preview.webp',
        description: 'Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter.',
        keywords: 'meta, tags, metatags, og, facebook, twitter, html',
        allowRobots: 'Yes',
        encoding: Encoding.UTF8,
        language: Language.English,
        imgUrl: 'metatags.lv-apps.com/mtt_preview.webp'
      };
      const processedMetadata = service.createMetadata(formData);
      expect(processedMetadata).toEqual(mockMetadata);
    })

  })

  describe('createHTMLTags', () => {

    it('should create metadata tags', () => {

      const tags = service.createHTMLTags(mockMetadata);
      expect(tags).toEqual(`<!-- HTML Meta Tags -->
<meta name="title" content="Meta Tags / OG Generator - Create and Preview " />
<meta name="description" content="Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter." />
<meta name="keywords" content="meta,tags,metatags,og,facebook,twitter,html" />
<meta name="language" content="English" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="robots" content="index, follow">\n`);
    })

  })

  describe('createTwitterTags', () => {

    it('should create twitter tags', () => {

      const tags = service.createTwitterTags(mockMetadata);
      expect(tags).toEqual(`\n<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Meta Tags / OG Generator - Create and Preview " />
<meta name="twitter:description" content="Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter." />
<meta name="twitter:image" content="https://metatags.lv-apps.com/mtt_preview.webp" />
<meta property="twitter:domain" content="metatags.lv-apps.com">
<meta property="twitter:url" content="https://metatags.lv-apps.com/">`);
    })

  })

  describe('createFacebookTags', () => {

    it('should create facebook tags', () => {

      const tags = service.createFacebookTags(mockMetadata);
      expect(tags).toEqual(`\n<!-- Facebook Meta Tags -->
<meta property="og:type" content="website">
<meta property="og:title" content="Meta Tags / OG Generator - Create and Preview " />
<meta property="og:site_name" content="Meta Tags / OG Generator - Create and Preview " />
<meta property="og:description" content="Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter." />
<meta property="og:image" content="https://metatags.lv-apps.com/mtt_preview.webp" />
<meta property="og:url" content="https://metatags.lv-apps.com">\n`);
    })

  })

  it('should get metadata from api', () => {
    const resultData: APIMetatags = {
      "title": "Slack is your productivity platform",
      "description": "Slack is a new way to communicate with your team. It’s faster, better organized, and more secure than email.",
      "url": "https://slack.com",
      "site_name": "Slack",
      "type": "website",
      "image": "https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/unfurl/slack-e2e-homepage-unfurl.jpg",
      "icon": "https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png",
      "keywords": "",
      "theme": "",
      "google": "",
      "site": "@slackhq",
      "card": "summary_large_image",
      "superfish": "nofish",
      "viewport": "width=device-width, initial-scale=1",
      "robots": ""
    };

    let result: APIMetatags | undefined;

    let url = 'http://slack.com';

    service.getWebsiteMetatags(url).subscribe(response => {
      result = response.data;
    })
    const req = httpTestingController.expectOne('https://api.lv-apps.com/metatags/metadata?url=' + url);
    req.flush(resultData);

    expect(result).toEqual(resultData);
  })
});
