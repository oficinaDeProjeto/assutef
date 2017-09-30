const WCString = require('../')
const test = require('tape')

test('regular init', function (t) {
  t.equal(WCString('abcd').size(), 4, 'functional use')
  t.equal(WCString('あい').size(), 4, 'functional use, double width')
  t.equal(new WCString('あい').size(), 4, 'instance use, double width')
  t.equal(new WCString('ai').size(), 2, 'instance use')
  t.end()
})

test('eat terminal control characters', function (t) {
  t.equal(WCString('あ\u001b[uあb').size(), 5, 'Regularly')
  t.equal(WCString('あ\u001b[uあb', false).size(), 8, 'ignored')
  t.equal(WCString('あ\u001b[1234Aあb').size(), 5, 'long control string')
  t.end()
})
