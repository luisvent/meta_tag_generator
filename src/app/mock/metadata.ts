import {Encoding} from "../enums/content.enum";
import {Language} from "../enums/language.enum";
import {Metadata} from "../interfaces/metadata.interface";

export const mockMetadata: Metadata = {
  title: 'Meta Tags / OG Generator - Create and Preview ',
  author: 'Luis Ventura',
  url: 'https://metatags.lv-apps.com',
  favUrl: 'https://luisvent.com/assets/favicon-CqZ8BsZs.ico',
  description: 'Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter.',
  keywords: ['meta', 'tags', 'metatags', 'og', 'facebook', 'twitter', 'html'],
  allowRobots: true,
  encoding: Encoding.UTF8,
  language: Language.English,
  imgUrl: 'https://metatags.lv-apps.com/assets/mtt_preview.webp'
};
