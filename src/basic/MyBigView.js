'use strict'

const BigView = require('bigview')
const Promise = require('bluebird')

module.exports = class MyBigView extends BigView {
  constructor(ctx, options = {}) {
    super(ctx, options)
  }
  
  before () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true)
      }, 0)
    })
  }

  beforeRenderLayout () {
    // console.log('beforeRenderLayout')
    return Promise.resolve(true)
  }

  afterRenderLayout () {
    // console.log('afterRenderLayout')
    return Promise.resolve(true)
  }
}
