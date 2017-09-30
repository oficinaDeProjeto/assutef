var test = require('tape')
var width = require('../')
var last = 59

function w (t, str, expected) {
  var code = str.charCodeAt(0)
  t.equal(width(code), expected)
  t.equal(width(code, last), expected)
  last = code
}

function wSurr (t, codes, expected) {
  t.equal(width(codes[1], codes[0]), expected)
}

test('regular width', function (t) {
  w(t, 'a', 1)
  w(t, 'z', 1)
  w(t, ' ', 1)
  w(t, '1', 1)
  w(t, '9', 1)
  w(t, '-', 1)
  w(t, '$', 1)
  w(t, '.', 1)
  t.end()
})

test('double width', function (t) {
  w(t, 'あ', 2)
  w(t, 'ん', 2)
  w(t, 'ア', 2)
  w(t, 'ン', 2)
  t.end()
})
