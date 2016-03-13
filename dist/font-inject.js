var Font = (function () {
    function Font() {
    }
    return Font;
}());
var FontInject = (function () {
    function FontInject(fontDirPath) {
        this.stylesheet = null;
        this.rootPath = null;
        if (fontDirPath === void 0) {
            fontDirPath = './';
        }
        else {
            var lastLetter = fontDirPath.split('').pop();
            fontDirPath += lastLetter === '/' ? '' : '/';
        }
        this.rootPath = fontDirPath;
    }
    FontInject.prototype.injectAll = function (fonts) {
        if (this.stylesheet === null) {
            this.stylesheet = FontInject.generateStyleSheet();
        }
        fonts.forEach(this.insertFont.bind(this));
    };
    FontInject.prototype.insertFont = function (font) {
        var rule = this.getFontRule(font);
        this.stylesheet.insertRule(rule, 0);
    };
    FontInject.prototype.getFontRule = function (font) {
        var fontPath = this.rootPath + font.filename;
        return '@font-face { src: url(' + fontPath + '); font-family: "' + font.family + '"; }';
    };
    FontInject.generateStyleSheet = function () {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        return style.sheet;
    };
    return FontInject;
}());
//# sourceMappingURL=font-inject.js.map