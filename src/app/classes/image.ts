export class Image {
  src: string;
  srcset?: string;
  srcsetWebP?: string;
  srcsetWebPWide?: string;
  alt?: string;

  constructor(
    src: string,
    srcset: string,
    srcsetWebP: string,
    srcsetWebPWide: string,
    alt: string
  ) {
    this.src = src;
    this.srcset = srcset;
    this.srcsetWebP = srcsetWebP;
    this.srcsetWebPWide = srcsetWebPWide;
    this.alt = alt;
  }
}
