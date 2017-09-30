// http://ascii-table.com/ansi-escape-sequences.php
module.exports = function (i, chars) {
  const len = chars.length
  if (chars[i++] !== 27) {// Escape
    return -1
  }

  if (chars[i++] !== 91) {// [
    return -1
  }

  var chr = chars[i]
  if (chr === 115 || //      s Save Cursor Position
    chr === 117 || //        u Restore Cursor Position
    chr === 75 //            K Erase Line
  ) {
    return i
  }

  if (chr === 50 && //       2
    chars[i + 1] === 74 //   J Erase Display
  ) {
    return i + 1
  }

  if (chr === 61) { //       =
    while (++i < len) { //   (any)
      chr = chars[i]
      if (chr === 104 || //  h Set Mode
        chr === 108 //       l Reset Mode
      ) {
        return i
      }
    }
    return -1
  }

  var validInt = true
  while (i < len) {
    chr = chars[i]
    if (chr === 122 || //    p Set Keyboard Strings
      chr === 72 || //       H ...
      chr === 102 || //      f Cursor position
      chr === 109 //         m Set Graphics Mode
    ) {
      return i
    }
    if (validInt) {
      if (chr === 65 || //   A Cursor Up
        chr === 66 || //     B Cursor Down
        chr === 67 || //     C Cursor Forward
        chr === 68 //        D Cursor Backward
      ) {
        return i
      }

      validInt = (chr >= 48 && chr <= 57) || chr === 59 // Integer or ;
    }
    ++i
  }
  return -1
}
