[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat)](LICENSE.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/wcsize.svg)](https://badge.fury.io/js/wcsize)

# wcsize
`wcsize` is a JavaScript CommonJS package that deals with the fact that some characters in monospace font environments (like terminals) are displayed with the size of two characters while others occupy the space of one character.

It is derived (forked) from [wcwidth](https://github.com/timoxley/wcwidth) which is a derivate of [wcwidth.c](http://www.cl.cam.ac.uk/~mgk25/ucs/wcwidth.c) which is custom implemented and seems better tested with japanese than the similar package [visualwidth-js](https://github.com/tokuhirom/visualwidth-js). It differes from both of those packages by only returning the width of one character (as integer!) which is important for performance
reasons.

This is a sister-package of [monospace-char-width](https://github.com/martinheidegger/monospace-char-width) whis is based on `visualwidth-js`.

## Installation & Usage
Install the package with `npm i wcsize --save` and pass the character you want to test like this:

```JavaScript
var wcsize = require('wcsize')

function charSize(string, pos) {
    wcsize(string.charCodeAt(pos), pos > 0 ? string.charCodeAt(pos-1) : 0)
}

charSize('abcd', 0) // 1
```

## Surrogates _or_ Why two character codes?
The size of some characters depends on surrogates which means that depending on the character before their size changes. For it to work appropriately you need to pass-in both the current character code and the one before that.

