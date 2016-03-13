// https://github.com/bcruddy/FontInject
// brian at ruddy dot io | @bcruddy

class Font {
    family:string;
    filename:string;
}

class FontInject {

    stylesheet:CSSStyleSheet = null;
    rootPath:string = null;

    constructor(fontDirPath:string) {
        if (fontDirPath === void 0) {
            fontDirPath = './';
        } else {
            let lastLetter = fontDirPath.split('').pop();
            fontDirPath += lastLetter === '/' ? '' : '/';
        }

        this.rootPath = fontDirPath;
    }

    injectAll(fonts:Font[]):void {
        if (this.stylesheet === null) {
            this.stylesheet = FontInject.generateStyleSheet();
        }

        fonts.forEach(this.insertFont.bind(this));
    }

    insertFont(font:Font):void {
        let rule = this.getFontRule(font);
        this.stylesheet.insertRule(rule, 0);
    }

    getFontRule(font:Font):string {
        let fontPath = this.rootPath + font.filename;

        return '@font-face { src: url(' + fontPath + '); font-family: "' + font.family + '"; }';
    }

    static generateStyleSheet():CSSStyleSheet {
        let style = document.createElement('style');

        style.appendChild(document.createTextNode('')); // webkit hack
        document.head.appendChild(style);

        return <CSSStyleSheet>style.sheet;
    }

}

