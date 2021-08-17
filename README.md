# MMM-WordsOfAffirmation
A Magic Mirror Module that will display new words of affirmation daily

## Installation
1. Navigate into your MagicMirror's `modules` folder
2. Execute `git clone https://github.com/TavianT/MMM-WordsOfAffirmation.git`
3. Navigate to newly created folder `MMM-WordsOfAffirmation`
4. Execute `npm install`

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-WordsOfAffirmation',
		position: 'lower_third',	// This can be any of the regions. Best result is in the lower_third imo
		config: {
			interval: 24 * 60 * 60 * 1000,  // in milliseconds, default is 24 * 60 * 60 * 1000 which is 1 day.
	    size: 'large' // default value is medium, but can be changed.
		}
	}
]
````

## Dependencies
No external dependancies needed

The MIT License (MIT)
=====================

Copyright © 2021 Tavian Taylor

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**