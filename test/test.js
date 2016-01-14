/* global describe, it */
'use strict'
import {expect} from 'chai'
import isJsType from '../lib/'

describe('is-js-type', () => {
  it('should throw TypeError if type is not a string', () => {
    const test = () => isJsType()
    expect(test).to.throw(TypeError, /Expected type to be a string/)
  })

  it('should return false for non js types', () => {
    expect(isJsType('gulp')).to.eql(false)
    expect(isJsType('cat')).to.eql(false)
  })

  it('should return true for js types', () => {
    expect(isJsType('Array')).to.eql(true)
    expect(isJsType('Error')).to.eql(true)
  })

  it('should be case insensitive', () => {
    expect(isJsType('array')).to.eql(true)
    expect(isJsType('ARRAY')).to.eql(true)
  })
})
