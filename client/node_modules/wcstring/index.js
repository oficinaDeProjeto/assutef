function cacheWcSize (chr) {
  var size = cache[chr]
  if (isNaN(size)) {
    size = wcsize(chr)
    cache[chr] = size
  }
  return size
}

const wcsize = require('wcsize')
const inherits = require('util').inherits
const VarSizeString = require('varsize-string')
const cache = {}
const eatControlCharacters = require('./eatControlCharacters')
const controlWcSize = eatControlCharacters(cacheWcSize)

function WCString (string, ignoreControlCharacters) {
  if (!(this instanceof WCString)) {
    return new WCString(string, ignoreControlCharacters)
  }
  var charSizes = cacheWcSize
  if (ignoreControlCharacters !== false) {
    charSizes = controlWcSize
  }
  VarSizeString.call(this, string, charSizes)
}
inherits(WCString, VarSizeString)
WCString.padding = function (ignoreControlCharacters) {
  var args = Array.prototype.slice.apply(arguments)
  var charSizes = cacheWcSize
  if (ignoreControlCharacters !== false) {
    charSizes = controlWcSize
  }
  args.shift()
  args.unshift(charSizes)
  return VarSizeString.padding.apply(VarSizeString, args)
}
module.exports = WCString
