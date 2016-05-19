// Call all the node's modules we need for the project
// ----------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var logConsole = require('extended-console');






//
//
//  > Start programming
// -----------------------------------------------------------------------------

// Define square path
var IkeoApp = express();
IkeoApp.use(express.static(__dirname + '/public'));

console.log('bonjour');





//
//
//  > Set server on 10000 channel
// -----------------------------------------------------------------------------
IkeoApp.listen(10000);
module.export = IkeoApp;
