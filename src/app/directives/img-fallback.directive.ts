import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {

  constructor(private element: ElementRef) {}

  @Input('appImgFallback') fallback: string | undefined;

  @HostListener('error')
  displayFallbackImg() {
    this.element.nativeElement.src = this.fallback || './assets/fallback.webp';
  }

}
