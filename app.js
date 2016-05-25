// Call all the node's modules we need for the project
// ----------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var logConsole = require('extended-console');

//var EventEmitter = require('events').EventEmitter;




//
//
//  > Start programming
// -----------------------------------------------------------------------------

// Define root path
var app = express();
app.use(express.static(__dirname + '/libraries'));

/*var keypress = new EventEmitter();
keypress.on('event', function() {
    console.log('bonjour');
});


keypress.emit('event');*/





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
    new Francky.Francky(1, 'Homer', 'mood', 'red', 1, 1, 'South'),
    new Francky.Francky(2, 'Marge', 'face', 'blue', 2, 1, 'South'),
    new Francky.Francky(3, 'Maggie', 'mood-bad', 'green', 3, 1, 'South')
  ]


exports.FranckyFamily = FranckyFamily;



// Define path of the websiet view
// --------------------------------------------
app.get('/', homeController.homeFactory);
app.get('/home', homeController.homeFactory);

app.get('/explorer/', explorerController.explorerFactory(FranckyFamily, IkeoWorld));
app.get('/explorer/:idFrancky', explorerController.franckyFocus(FranckyFamily, IkeoWorld));


//
// Wait for event of the keypress
//
//  <> 3 commands
//    > key 'arrow left' -> Francky set orientation 90° left
//    > key 'arrow right' -> Francky set orientation 90° rigth
//    > key 'A button' -> Francky move forward his orientation
//
// -----------------------------------------------
/*keypress.on('data', function(keyboard) {


    // Arrow 'up', to set the orientation "North"
    if (keyboard == 'a' || keyboard == 'A') {

      console.log(keyboard);

    } else if (keyboard == '\u001B\u005B\u0043') {

      console.log('right');

    } else if (keyboard == '\u001B\u005B\u0044') {

      console.log('left');

    } else {

      console.log('wrong command');
    }

    /*if (keyboard == '\u001B\u005B\u0041') {
        //process.stdout.write('up');
        console.log('up');
    }
    if () {
        process.stdout.write('right');
    }
    if (keyboard == '\u001B\u005B\u0042') {
        process.stdout.write('down');
    }
    if (keyboard == '\u001B\u005B\u0044') {
        process.stdout.write('left');
    }

    if (keyboard == '\u0003') { process.exit(); }    // ctrl-c
});*/


// Lisen for key pressed event
// --------------------------------------
/*process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress" : ', key);
});*/






//
//
//  > Set server on 10000 channel
// -----------------------------------------------------------------------------
app.listen(8080);
module.export = app;
