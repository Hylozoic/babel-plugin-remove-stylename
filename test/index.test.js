const fs = require('fs')
const path = require('path')
const test = require('ava')
const transformFileSync = require('babel-core').transformFileSync

const plugin = require('../index')

test('Removes styleName from single element', t => {
  const expected = fs.readFileSync(path.join(__dirname, 'singleElementExpected.jsx'), 'utf8').trim()
  const actual = transformFileSync(path.join(__dirname, 'singleElement.jsx'), {
    plugins: [plugin],
    babelrc: false
  }).code
  t.is(actual, expected)
})

test('Removes styleName from nested elements', t => {
  const expected = fs.readFileSync(path.join(__dirname, 'nestedElementsExpected.jsx'), 'utf8').trim()
  const actual = transformFileSync(path.join(__dirname, 'nestedElements.jsx'), {
    plugins: [plugin],
    babelrc: false
  }).code
  t.is(actual, expected)
})
