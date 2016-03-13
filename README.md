#Usage
```javascript

var fontlist = [{ 
		filename: 'CustomFont.tff', 
		family: 'Custom Font SC' 
	}, {	 
		filename: 'CustomFont-Two.tff', 
		family: 'Custom Font Two SC' 
	}];

var fontDirPath = '/path/to/font/files/';
var fi = new FontInject(fontDirPath);
	
var fonts = fi.injectAll(fontlist);

// OR

fi.injectAll(fontlist);

```

#License
Do whatever you want with it under the [MIT license](https://github.com/bcruddy/FontInject/LICENSE.md).

#Bugs & Feedback
If you like it drop me a line on twitter [@bcruddy](https://twitter.com/bcruddy), if you've got a problem [report it](https://github.com/bcruddy/FontInject/issues).



