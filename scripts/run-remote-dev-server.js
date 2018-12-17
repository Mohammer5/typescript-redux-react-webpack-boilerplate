// Needs Node v8, doesn't work with node v10
var remoteDevServer = require('remotedev-server');
remoteDevServer({ hostname: 'localhost', port: 8000 });
