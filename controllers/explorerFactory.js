//
//
// Node.JS module : explorer
//- - - - - - - - - - - - - -
//  > This module display the view "explorer.ejs"
//
// -----------------------------------------------------------------------------
exports.explorerFactory = function(FranckyFamily, IkeoWorld) {

  return function(req, res) {

      FranckyFamily[0].setPositionX(FranckyFamily[0].positionX, FranckyFamily[0].positionY + 1);
      console.log(IkeoWorld.name);

      console.log("Pos X : " + FranckyFamily[0].positionX + " & Pos Y : " + FranckyFamily[0].positionY );

      console.log("> Display the view : explorer.ejs");
      res.render('./explorer.ejs')

    }
};
