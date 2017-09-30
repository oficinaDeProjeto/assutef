[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat)](LICENSE.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/varsize-string.svg)](https://badge.fury.io/js/varsize-string)
[![Build Status](https://travis-ci.org/martinheidegger/varsize-string.svg?branch=master)](https://travis-ci.org/martinheidegger/varsize-string)

# varsize-string
Varsize-string is a JavaScript CommonJS (node.js) package for working
with strings where the different characters have different sizes.

## Installation & Usage
With [npm](https://docs.npmjs.com/getting-started/installing-node) you can install and use the `varsize-string` like this:

```
$ npm install varsize-string --save
```

With the package being successfully installed you can create an instance like this:

```JavaScript
function charWidth(charCode, formerCharCode, inString, pos) {
    /* in this example a-z (lower-case) is 0.8 the width of other characters */
    return (charCode >= 97 && charCode <= 122 ) ? 0.8 : 1
}
var VarSizeString = require('varsize-string')
var str = new VarSizeString('ABCdef', charWidth)
var str2 = VarSizeString('abcDEF', charWidth) // You don't need to use `new`
```

## Application
The most important application of `varsize-string` is in combination with 
[`wcsize`](https://github.com/martinheidegger/wcsize) that identifies the size of strings rendered in a common terminal,
see [`wcstring`](https://github.com/martinheidegger/wcstring) for a shorthand combination of both.

It can also be used in a (visual) web context to correctly `wrap` or `truncate` strings.

## Operations
On the instance you can apply a set of operations. Note that the following explanation uses `size` as an accumulated amount of width and `width` as a single-line `size`.

### `.width()`
Get the `size` of the widest line in the string. 

### `.size()`
Get the `size` of the complete string.

### `.sizeBeforeFirst(search, [<int> startOffset])`
Analogous to [`String.indexOf`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf). Looks for the first occurance of `search`. Optionally takes `startOffset` which is the `size` of characters that have to happen before the search takes place (default=0).

### `.sizeBeforeLast(search, [<int> endOffset])`
Analogous to [`String.lastIndexOf`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf). Looks for the last occurance of `search`.
Optionally takes `endOffset` which is the size offset from the end of the string from which to search for `search`.

### `.substring(<int> startSize, [<int> endSize])`
Analogous to [`String.substring`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substring). This method will return the **fully visible** characters between `startSize` and `endSize`. If `endSize` is not given it will assume a substring from `startSize` until the end of the string.
_However:_ **Unlike** `String.substring`, this method returns an object with the properties `size` and `string` in order to know the size of the substring.

Example:
```JavaScript
var vsstring = require('varsize-string')
vsstring('abcdef', charWidth).substring(0, 3) // {string: 'abc', size: 2.4}
```

### `.substr(<int> startSize, [<int> size])`
Equal to `.substring(startSize, startSize + size)`.


### `.truncate(<int> size, <varsize-string || String> suffix)`
Truncates the string after a size. Will append the given `suffix` to the string if it does exceed the size.

### `.pop()`
Removes the last character from the string and returns the new `.size()`.

### `.wrap(<int> width, [padding])`
Normalizes the string in order for all lines to fit within `width`.

Example:
```JavaScript
var vsstring = require('varsize-string')
vsstring('abcdef', charWidth).wrap(3) // 'abc\ndef'
vsstring('ab cd ef', charWidth).wrap(5) // 'ab cd\nef'
vsstring('ab cd ef', charWidth).wrap(3) // 'ab\ncd\nef'
```

#### Padding
The padding option takes a padding specification and applies it to the
wrapping process.

Example:

```JavaScript
var padding = {
    first: {left: ' - ', right: ' '},
    regular: {left: '   ', right: ' '}
}
vsstring('abcdefghijklmnop', charWidth).wrap(10, padding)
//  - abcdef
//    ghijkl
//    mnop
```

There are a few shorthands to specifying the padding:

```JavaScript
padding = '  '
```

... is equals to ...

```JavaScript
{
    first: '  ',
    regular: '  '
}
```

... is equals to ...

```JavaScript
{
    first: {left: '  ': right: undefined},
    regular: {left: '  ': right: undefined}
}
```

Also you can preset left/right for both first and regular:

```JavScript
{
    right: 'x',
    first: {left: ' - '},
    regular: {left: '   '}
}
```

... is equal to ... 

```JavaScript
{
    first: {left: ' - ', right: 'x'},
    regular: {left: '   ', right: 'x'}
}
```

Note that the left/right presets override the first/regular specification:

```JavaScript
{
    left: 'x',
    first: '-',
    regular: ' '
}
```

... is equal to ...

```JavaScript
{
    first: {left: 'x', right: undefined},
    regular: {left: 'x', right: undefined}
}
```

Also it supports a fallback to regular if first is missing:

```JavaScript
{
    regular: {left: 'x', right: undefined}
}
```

... is equal to ...

```JavaScript
{
    first: {left: 'x', right: undefined},
    regular: {left: 'x', right: undefined}
}
```

### `vsstring.padding(characterLookup, [process], [width], padding)`
Turns a flexible padding definition into a clear padding definition. You can pass in an optional `process` variable to process the strings before they are being turned into varsizes-strings. You can also pass-in a `width` to make sure that the padding will not exceed the width of, say, a wrapped string.
