//
//
// Node.JS module : explorer
//- - - - - - - - - - - - - -
//  > This module display the view "explorer.ejs"
//
// -----------------------------------------------------------------------------
var EventEmitter = require('events').EventEmitter;
/*var keypress = require('keypress');

keypress(process.stdin);

//keypress.setRawMode(true);
//keypress.resume();
//keypress.setEncoding('utf8');
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.exit();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume(); */

exports.explorerFactory = function(FranckyFamily, IkeoWorld) {

  /*FranckyFamily[0].setPositionX(FranckyFamily[0].positionX + 1);
  FranckyFamily[0].setPositionX(FranckyFamily[0].positionX + 1);
  FranckyFamily[0].setPositionY(FranckyFamily[0].positionY + 1);*/

  return function(req, res) {

      console.log("> Display the view : explorer.ejs");
      res.render('./explorer.ejs', {IkeoWorld: IkeoWorld, FranckyFamily: FranckyFamily, idFrancky: -1});
    }
};



exports.franckFocus = function(FranckyFamily, IkeoWorld) {

  /*FranckyFamily[0].setPositionX(FranckyFamily[0].positionX + 1);
  FranckyFamily[0].setPositionX(FranckyFamily[0].positionX + 1);
  FranckyFamily[0].setPositionY(FranckyFamily[0].positionY + 1);*/

  return function(req, res) {

      console.log("> Display the view : explorer.ejs");
      res.render('./explorer.ejs', {IkeoWorld: IkeoWorld, FranckyFamily: FranckyFamily,
                                      idFrancky: req.params.idFrancky});

    }
};
