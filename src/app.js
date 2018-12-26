'use strict'

const Koa = require('koa');
const serve = require('koa-static');

var Router = require('koa-router');
const app = new Koa();

var path = require('path')

app.use(serve(path.join(__dirname, '../public')));


router.get('/', require('./basic'));

app
  .use(router.routes())
  .use(router.allowedMethods());

module.exports = app
