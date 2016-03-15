var FontInject = (function () {
    function FontInject(fontDirPath) {
        if (fontDirPath === void 0) { fontDirPath = './'; }
        this.stylesheet = null;
        var isLastCharSlash = fontDirPath.slice(-1) === '/';
        if (!isLastCharSlash) {
            fontDirPath += '/';
        }
        this.rootPath = fontDirPath;
        return this;
    }
    FontInject.prototype.injectAll = function (fonts) {
        if (this.stylesheet === null) {
            this.stylesheet = FontInject.generateStyleSheet();
        }
        fonts.forEach(this.insertFont.bind(this));
        return this;
    };
    FontInject.prototype.insertFont = function (font) {
        var rule = this.getFontRule(font);
        this.stylesheet.insertRule(rule, 0);
    };
    FontInject.prototype.getFontRule = function (font) {
        var fontPath = this.rootPath + font.filename;
        return '@font-face { src: url(' + fontPath + '); font-family: "' + font.family + '"; font-weight: ' + font.weight + ' }';
    };
    FontInject.generateStyleSheet = function () {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        return style.sheet;
    };
    return FontInject;
}());
var Font = (function () {
    function Font(family, filename, weight) {
        if (weight === void 0) { weight = 400; }
        this.family = family;
        this.filename = filename;
        this.weight = weight;
    }
    return Font;
}());
//# sourceMappingURL=font-inject.js.map