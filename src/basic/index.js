'use strict'

const MyBigView = require('./MyBigView')
var httpextra = require('http-extra')
import Main from './main'
import Layout from './layout'
import P1 from './p1'
import P2 from './p2'

import Bigview from "bigview";

module.exports = function (req, res) {
  httpextra(res)

  const ctx = {
    req: req,
    res: res
  }
  var bigpipe = new Bigview(ctx)

  bigpipe.main = Main
  bigpipe.layout = Layout

  bigpipe.mode = 'pipeline'
  bigpipe.add(P1)
  bigpipe.add(P2)

  if (req.query && req.query.bigview_mode) {
    bigpipe.mode = req.query.bigview_mode
  }

  // 从this.cookies('bigview_mode') 其次
  // debug("this.cookies = " + req.cookies)
  if (req.cookies && req.cookies.bigview_mode) {
    bigpipe.mode = req.cookies.bigview_mode
  }

  // bigpipe.preview('aaaa.html')
  // bigpipe.isMock = true
  // bigpipe.previewFile = 'aaaa.html'
  bigpipe.start()
}
