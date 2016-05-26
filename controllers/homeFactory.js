//
//
// Node.JS module : home
//- - - - - - - - - - - - - -
//  > This module display the view "home.ejs"
//
// -----------------------------------------------------------------------------
exports.homeFactory = function(IkeoWorld) {

  return function(req, res) {

    console.log(IkeoWorld.name);

    console.log("> Display the view : home.ejs");
    res.render('./home.ejs', {IkeoWorld: IkeoWorld});
  }

};
