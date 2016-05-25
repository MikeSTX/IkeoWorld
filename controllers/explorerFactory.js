//
//
// Node.JS module : explorer
//- - - - - - - - - - - - - -
//  > This module display the view "explorer.ejs"
//
// -----------------------------------------------------------------------------
exports.explorerFactory = function(FranckyFamily, IkeoWorld) {

  return function(req, res) {

      console.log("> Display the view : explorer.ejs");
      res.render('./explorer.ejs', {IkeoWorld: IkeoWorld, FranckyFamily: FranckyFamily, idFrancky: -1});
    }
};



exports.franckyFocus = function(FranckyFamily, IkeoWorld) {

  return function(req, res) {

      console.log("> Display the view : explorer.ejs");
      res.render('./explorer.ejs', {IkeoWorld: IkeoWorld, FranckyFamily: FranckyFamily,
                                      idFrancky: req.params.idFrancky});

    }
};
