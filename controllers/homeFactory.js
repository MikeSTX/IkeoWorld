//
//
// Node.JS module : home
//- - - - - - - - - - - - - -
//  > This module display the view "home.ejs"
//
// -----------------------------------------------------------------------------
exports.homeFactory = function(req, res) {

    console.log("> Display the view : home.ejs");
    res.render('./home.ejs')

};
