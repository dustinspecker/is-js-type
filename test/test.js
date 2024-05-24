'use strict'
const test = require('ava')
const isJsType = require('../src/')

test('should throw TypeError if type is not a string', t => {
  const testFn = () => isJsType()
  t.throws(testFn, {instanceOf: TypeError, message: /Expected type to be a string/})
})

test('should return false for non js types', t => {
  t.falsy(isJsType('gulp'))
  t.falsy(isJsType('cat'))
})

test('should return true for js types', t => {
  t.truthy(isJsType('Array'))
  t.truthy(isJsType('Error'))
})

test('should be case sensitive', t => {
  t.falsy(isJsType('array'))
  t.falsy(isJsType('ARRAY'))
})
