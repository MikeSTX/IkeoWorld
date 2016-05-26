// Call all the node's modules we need for the project
// ----------------------------------------------------------------
var express = require('express');
var logConsole = require('extended-console');


//
//
//  > Start programming
// -----------------------------------------------------------------------------

// Define root path
var app = express();
app.use(express.static(__dirname + '/libraries'));



// Call the node's module proper to the "IkeoWordl" Project (controllers)
// -----------------------------------------------------------------------------

// 2 controllers "object" :
var Francky = require('./controllers/object/francky');
var World = require('./controllers/object/world')


// 2 controllers "views"
var homeController = require('./controllers/homeFactory')
var explorerController = require('./controllers/explorerFactory')


//
// Create objects
// -----------------------------------------------------------------------------
var IkeoWorld = new World(1, 'Ikeo', 10, 10, '#FAFAFA');
var FranckyFamily = [
    new Francky.Francky(1, 'Homer', 'mood', 'red', 1, 1, 'North'),
    new Francky.Francky(2, 'Marge', 'face', 'blue', 2, 1, 'North'),
    new Francky.Francky(3, 'Maggie', 'mood-bad', 'green', 3, 1, 'North')
  ]



// Define path of the websiet view
// --------------------------------------------
app.get('/', homeController.homeFactory(IkeoWorld));
app.get('/home', homeController.homeFactory(IkeoWorld));

app.get('/explorer/', explorerController.explorerFactory(FranckyFamily, IkeoWorld));
app.get('/explorer/:idFrancky', explorerController.franckyFocus(FranckyFamily, IkeoWorld));


//
//
//  > Set server on 10000 channel
// -----------------------------------------------------------------------------
app.listen(8080);
module.export = app;
