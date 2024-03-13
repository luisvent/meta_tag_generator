import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {APIMetatags} from "../interfaces/api-metadata.interface";
import {Metadata} from "../interfaces/metadata.interface";
import { Encoding } from '../enums/content.enum';
import { Language } from '../enums/language.enum';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor(private http: HttpClient) { }

  getWebsiteMetatags(url: string): Observable<{ message: string, status: string, data: APIMetatags }> {
    const METATAGS_API = 'https://api.lv-apps.com/metatags/metadata?url='
    return this.http.get(`${METATAGS_API}${url}`).pipe(result => result as any);
  }

  createMetadata(values: any): Metadata {
    return {
      title: values?.title || '',
      author: values?.author || '',
      url: values?.url? values.url.includes('https://')? values.url : `https://${values.url}` : '',
      favUrl: values?.icon || values?.favUrl || '',
      description: values?.description || '',
      keywords: values?.keywords.length > 0? (values?.keywords as string).split(',').map(k => k.trim()): [],
      allowRobots: values?.allowRobots === 'Yes',
      encoding: values?.encoding || Encoding.UTF8,
      language: values?.language || Language.English,
      imgUrl: values?.image || (values?.imgUrl? values.imgUrl.includes('https://')? values.imgUrl : `https://${values.imgUrl}` : ''),
    };
  }

  createHTMLTags(metadata: Metadata) {

    let tags = '<!-- HTML Meta Tags -->\n';

    if(metadata.title.length > 0) {
      tags += `<meta name="title" content="${metadata.title}" />\n`;
    }

    if(metadata.author.length > 0) {
      tags += `<meta name="author" content="${metadata.author}" />\n`;
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

  copyToClipboard(text: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
