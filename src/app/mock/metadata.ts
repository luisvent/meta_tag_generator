import {Encoding} from "../enums/content.enum";
import {Language} from "../enums/language.enum";
import {Metadata} from "../interfaces/metadata.interface";

export const mockMetadata: Metadata = {
  title: 'Meta Tags / OG Generator - Create and Preview ',
  author: 'Luis Ventura',
  url: 'https://metatags.lv-apps.com',
  favUrl: 'https://metatags.lv-apps.com/assets/favicon.ico',
  description: 'Generate the optimal Open Graph tags (OG tags) for your webpage.  See a live preview of how your webpage will look when shared on social media platforms like Facebook and Twitter.',
  keywords: ['meta', 'tags', 'metatags', 'og', 'facebook', 'twitter', 'html'],
  allowRobots: true,
  encoding: Encoding.UTF8,
  language: Language.English,
  imgUrl: 'https://metatags.lv-apps.com/assets/mtt.png'
};

export const mockTagsHTML = {
  plain: '<meta name="title" content="Testing tag">',
  formatted: '<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Testing tag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>',
  rendered: `<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>title<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">content</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>Testing tag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">&gt;</span></span>`
}
