var app = require('./app')
var graceful = require('graceful');
var server = app.listen(4005)

graceful({
    servers: [server],
    killTimeout: '30s',
  });

// var open = require("open");
// open("http://127.0.0.1:4005");