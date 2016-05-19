// Call all the node's modules we need for the project
// ----------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var logConsole = require('extended-console');






//
//
//  > Start programming
// -----------------------------------------------------------------------------

// Define root path
var IkeoApp = express();
IkeoApp.use(express.static(__dirname + '/public'));


// Call the node's module proper to the "IkeoWordl" Project (controllers)
// -----------------------------------------------------------------------------
// 2 JSON Object :
var franckyFamilyController = require('./controllers/JSON/franckyFamily.js');
var worldController = require('./controllers/JSON/world.js')

//

// Path to the website View



// Set the Ikeo World
var ObjIkeoWorld = worldController.addNewWorld(0, '', 0, 0, '');
ObjIkeoWorld[1] = worldController.addNewWorld(1, 'Ikeo', 15, 20, '#4CAF50');

// Create the object and set one member of the francky family
var ObjFranckyFamily = franckyFamilyController.addNewFrancky(0, '', '', '', 0, 0, '');
ObjFranckyFamily[1] = franckyFamilyController.addNewFrancky(1, 'Franck', 'mood', '#607D8B', 1, 1, 'North');


//console.log(ObjFranckyFamily[1].name);
//console.log(ObjIkeoWorld[1]);





//
//
//  > Set server on 10000 channel
// -----------------------------------------------------------------------------
IkeoApp.listen(10000);
module.export = IkeoApp;
