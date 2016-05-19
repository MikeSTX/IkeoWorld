/*
//
// Node's module : world
//  - - - - - - - - - - - --  - - - -
//
//  > This module define the object "franckyFamily". The parameters of the
//  object is :
//    - id (type : int)
//    - name (type : string)
//    - icon (type : string) - to design the object on the website
//    - color (type : string) - to design the object on the website, define in
//      hexadecimal
//    - positionX (type : int) - to put the francky on the IkeoWorld - axe X
//    - positionY (type : int) - to put the francky on the IkeoWorld - axe Y
//    - orientation (type : string) - to put the francky orientation
//
//  > This object has 1 methods, Description of the methode jusr below the
//  declaration of the methods
//    - addNewFrancky
//    - moveFrancky
//
// -------------------------------------------------------------------------- */
exports.addNewWorld = function(idWorld, name, width, length, color) {

  var world = {

    'id': idWorld,
    'name': name,
    'width': width,
    'length': length,
    'color' : color

  }

  return world;

};
