// https://github.com/bcruddy/FontInject
// brian at ruddy dot io | @bcruddy

'use strict';

class Font {
  family:string;
  filename:string;
  weight:number = 400;
}

class FontInject {

  stylesheet:CSSStyleSheet = null;
  rootPath:string;

  constructor(fontDirPath:string = './') {
    let lastLetter = fontDirPath.split('').pop();
    fontDirPath += lastLetter === '/' ? '' : '/';

    this.rootPath = fontDirPath;

    return this;
  }

  injectAll(fonts:Font[]):FontInject {
    if (this.stylesheet === null) {
      this.stylesheet = FontInject.generateStyleSheet();
    }

    fonts.forEach(this.insertFont.bind(this));

    return this;
  }

  insertFont(font:Font):void {
    let rule = this.getFontRule(font);
    this.stylesheet.insertRule(rule, 0);
  }

  getFontRule(font:Font):string {
    let fontPath = this.rootPath + font.filename;

    return '@font-face { src: url(' + fontPath + '); font-family: "' + font.family + '"; font-weight: ' + font.weight + ' }';
  }

  static generateStyleSheet():CSSStyleSheet {
    let style = document.createElement('style');

    style.appendChild(document.createTextNode('')); // webkit hack
    document.head.appendChild(style);

    return <CSSStyleSheet>style.sheet;
  }

}

