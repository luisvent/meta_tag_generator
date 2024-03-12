import {Language} from "../enums/language.enum";
import {Encoding} from "../enums/content.enum";

export interface Metadata {
  title: string;
  author: string;
  favUrl: string;
  url: string;
  description: string;
  keywords: string[];
  allowRobots: boolean;
  encoding: Encoding;
  language: Language;
  imgUrl: string;
}
