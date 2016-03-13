#font-inject.js
With font-inject.js you can allow your users to access hundreds of different fonts on demand without preloading all of them.

##Usage
```javascript

var fontList = [{
        filename: 'Blackout-2am.ttf',
        family: 'Blackout 2am'
    }, {
        filename: 'Butcherman-Regular.ttf',
        family: 'Butcherman'
    }, {
        filename: 'Cookie-Regular.ttf',
        family: 'Cookie'
    }, {
        filename: 'Dorsa-Regular.ttf',
        family: 'Dorsa'
    }, {
        filename: 'Salsa-Regular.ttf',
        family: 'Salsa'
    }];
    
var fontDirPath = '/path/to/fonts/';
var fi = new FontInject(fontDirPath);

fi.injectAll(fontList);

```

##License
Do whatever you want with it under the [MIT license](https://github.com/bcruddy/FontInject/LICENSE.md).

##Bugs & Feedback
If you like it drop me a line on twitter [@bcruddy](https://twitter.com/bcruddy), if you've got a problem [report it](https://github.com/bcruddy/FontInject/issues).



