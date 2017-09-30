const findEnd = require('./findControlCharacters')

module.exports = function eatControlCharacters (method) {
  return function eatControlCharactersWrap (chr, formerChr, codes, i, context) {
    if (context.controlChars === undefined) {
      context.controlChars = {}
    }

    if (context.controlChars[i]) {
      return 0
    }

    var end = findEnd(i++, codes, codes[i])
    if (end !== -1) {
      while (i <= end) {
        context.controlChars[i] = true
        i++
      }
      return 0
    }
    return method(chr, formerChr, codes, i, context)
  }
}
