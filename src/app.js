'use strict'

var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.get('/', require('./basic'))

module.exports = app
