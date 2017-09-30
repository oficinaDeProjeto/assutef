function preparePaddingSet (characterLookup, width, process, padding, override, fallback) {
  var result
  if (typeof padding === 'string') {
    padding = {left: padding, right: undefined}
  } else if (typeof padding !== 'object') {
    padding = {}
  }
  if (override) {
    result = {
      left: override.left || padding.left,
      right: override.right || padding.right
    }
  } else {
    result = {
      left: padding.left,
      right: padding.right
    }
  }

  if (fallback) {
    if (result.left === undefined) {
      result.left = fallback.left
    }

    if (result.right === undefined) {
      result.right = fallback.right
    }
  }
  if (result.left !== undefined && !(result.left instanceof VarSizeString)) {
    result.left = new VarSizeString(process(result.left), characterLookup)
  }
  if (result.right !== undefined && !(result.right instanceof VarSizeString)) {
    result.right = new VarSizeString(process(result.right), characterLookup)
  }
  var leftSize = result.left ? result.left.size() : 0
  var rightSize = result.right ? result.right.size() : 0
  if (!isNaN(width)) {
    while (rightSize > 0 && (leftSize + rightSize) >= width) {
      rightSize = result.right.pop()
    }
    while (leftSize >= width) {
      leftSize = result.left.pop()
    }
  }
  return result
}

function preparePadding (characterLookup, process, width, padding) {
  if (arguments.length === 2) {
    padding = process
    process = undefined
  } else if (arguments.length === 3) {
    padding = width
    if (typeof process === 'function') {
      width = undefined
    } else {
      width = process
      process = undefined
    }
  }
  if (!process) {
    process = function (str) {
      return str
    }
  }
  var prepare = preparePaddingSet.bind(null, characterLookup, width, process)
  var override = prepare(padding)
  var regular = prepare(padding && padding.regular, override)
  return {
    first: prepare(padding && padding.first, override, regular),
    regular: regular
  }
}

function VarSizeString (string, characterLookup) {
  if (!(this instanceof VarSizeString)) {
    return new VarSizeString(string, characterLookup)
  }
  this.string = string
  this.characterLookup = characterLookup
}
VarSizeString.padding = preparePadding
VarSizeString.prototype.init = function () {
  if (isNaN(this._size)) {
    if (this.string.length > 0) {
      var string = this.string
      const lookup = this.characterLookup
      const sizes = new Float32Array(string.length)
      const chars = new Uint16Array(string.length)
      for (var j = 0; j < string.length; j++) {
        chars[j] = string.charCodeAt(j)
      }
      const context = {}
      var size = 0
      var formerChar = null
      for (var i = 0; i < string.length; i++) {
        var c = chars[i]
        var cSize = lookup(c, formerChar, chars, i, context)
        sizes[i] = size
        size += cSize
        formerChar = c
      }
      this._sizes = sizes
      this._size = size
    } else {
      delete this._sizes
      this._size = 0
    }
  }
}
VarSizeString.prototype.size = function () {
  this.init()
  return this._size
}
VarSizeString.prototype.substr = function (start, size) {
  if (size === undefined) {
    return this.substring(start)
  }
  return this.substring(start, start + size)
}
VarSizeString.prototype.pop = function () {
  this.init()
  if (!this._sizes) {
    return 0
  }
  var last = this._sizes.length - 1
  var newSize = this._sizes[last]
  this._sizes = this._sizes.subarray(0, last)
  this.string = this.string.substring(0, last)
  if (this._sizes.length === 0) {
    this._sizes = undefined
  }
  this._size = newSize
  this._lines = undefined
  return newSize
}
VarSizeString.prototype.substring = function (start, end) {
  this.init()

  var sizes = this._sizes

  if (start < 0) {
    start = 0
  }
  if (end === undefined) {
    end = this._size
  } else if (end < 0) {
    end = 0
  }

  if (start > end) {
    var tmp = end
    end = start
    start = tmp
  }

  if (end > this._size) {
    end = this._size
  }

  if (start > this._size) {
    return {
      string: '',
      size: 0
    }
  }

  if (start === 0 && end === this._size) {
    return {
      string: this.string,
      size: this._size
    }
  }

  var from = 0
  while (sizes[from] < start) {
    ++from
  }

  var to = from
  if (this._size <= end) {
    to = this.string.length
  } else {
    while (sizes[to] < end) {
      ++to
    }
    if (sizes[to] !== end) {
      to -= 1
    }
  }

  var endSize
  if (to === this.string.length) {
    endSize = this._size
  } else {
    endSize = sizes[to]
  }
  return {
    string: this.string.substring(from, to),
    size: endSize - sizes[from]
  }
}
VarSizeString.prototype.width = function () {
  return this.getLines().reduce(function (max, line) {
    var size = line.size()
    return (size > max) ? size : max
  }, 0)
}
VarSizeString.prototype.getLines = function () {
  if (!this._lines) {
    this._lines = this.string.split(/[\r\n]+/).map(function (line) {
      return new VarSizeString(line.replace(/^\s+|\s+$/g, ''), this.characterLookup)
    }.bind(this))
  }
  return this._lines
}
VarSizeString.prototype.wrap = function (width, padding, process) {
  const sep = ' '
  const sepLength = 1
  const lineBreak = '\n'

  padding = preparePadding(this.characterLookup, process, width, padding)

  var hadLeftOver = false
  var currentPadding = padding.first
  var left
  var right
  var remainingWidth = width
  var result = []

  function paddingRight () {
    if (right && !/^\s*$/.test(right.string)) {
      if (remainingWidth > 0) {
        result.push(new Array(remainingWidth + 1).join(' '))
      }
      result.push(right.string)
    }
  }

  function paddingInit () {
    left = currentPadding.left
    if (left) {
      remainingWidth -= left.size()
    }
    right = currentPadding.right
    if (right) {
      remainingWidth -= right.size()
    }
  }

  function nextLine () {
    paddingRight()
    result.push(lineBreak)
    hadLeftOver = false
    remainingWidth = width
    currentPadding = padding.regular
    paddingInit()
  }

  function leftPad () {
    if (left) {
      result.push(left.string)
      left = false
    }
  }

  paddingInit()
  this.getLines().forEach(function (line) {
    var lineWidth = line.size()
    var lineOffset = 0
    while (lineWidth - lineOffset + (hadLeftOver ? sepLength : 0) > remainingWidth) {
      var sepPos = line.sizeBeforeLast(sep, lineOffset + remainingWidth - (hadLeftOver ? sepLength : 0))
      if (sepPos < lineOffset) {
        sepPos = -1 // Ignore it if the last space is before the start (in other words: there is no space in the expected area)
      }
      if (sepPos !== -1) {
        if (hadLeftOver) {
          result.push(sep)
          remainingWidth -= sepLength
        }
        leftPad()
        result.push(line.substring(lineOffset, sepPos).string.replace(/^\s+|\s+$/g, ''))
        lineOffset = sepPos + 1
      } else if (!hadLeftOver) {
        var part = line.substr(lineOffset, remainingWidth)
        leftPad()
        result.push(part.string.replace(/^\s+|\s+$/g, ''))
        lineOffset += part.size
        remainingWidth -= part.size
      }
      nextLine()
    }
    var content = line.substring(lineOffset)
    if (hadLeftOver) {
      result.push(sep)
      remainingWidth -= sepLength
    }
    leftPad()
    result.push(content.string.replace(/^\s+|\s+$/g, ''))
    hadLeftOver = true
    remainingWidth -= content.size
    return result
  })

  paddingRight()
  return result.join('')
}
VarSizeString.prototype.sizeBeforeFirst = function (search, startAfter) {
  this.init()
  if (startAfter > this._size) {
    return -1
  }
  var i = 0
  while (this._sizes[i] < startAfter) {
    ++i
  }
  var found = this.string.indexOf(search, i)
  if (found === -1) {
    return -1
  }
  return this._sizes[found]
}
VarSizeString.prototype.sizeBeforeLast = function (search, endBefore) {
  this.init()
  if (endBefore < 1) {
    return -1
  }
  var i = this._sizes.length - 1
  while (this._sizes[i] > endBefore) {
    --i
  }
  var found = this.string.lastIndexOf(search, i)
  if (found === -1) {
    return -1
  }
  return this._sizes[found]
}
VarSizeString.prototype.truncate = function (size, suffix) {
  if (!(suffix instanceof VarSizeString)) {
    suffix = new VarSizeString(suffix, this.characterLookup)
  }
  if (this.size() <= size) {
    return this.string
  }
  return this.substring(0, size - suffix.size()).string + suffix.string
}

module.exports = VarSizeString
