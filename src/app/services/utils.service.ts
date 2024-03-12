import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {APIMetatags} from "../interfaces/api-metadata.interface";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }

  getWebsiteMetatags(url: string): Observable<APIMetatags> {
    const METATAGS_API = 'https://api.lv-apps.com/metatags/metadata?url='
    return this.http.get(`${METATAGS_API}${url}`).pipe(result => result as any);
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
