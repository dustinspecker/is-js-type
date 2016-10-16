'use strict'
import jsTypes from 'js-types'

const lowerCaseTypes = jsTypes.map(type => type.toLowerCase())

/**
 * Determine if a type is JS type
 * @param {String} type - type to verify
 * @return {Boolean} - type is a JS type
 */
module.exports = function isJsType(type) {
  if (typeof type !== 'string') {
    throw new TypeError('Expected type to be a string')
  }

  return lowerCaseTypes.indexOf(type.toLowerCase()) > -1
}
