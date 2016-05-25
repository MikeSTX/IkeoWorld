/*
//
// Node's module : franckyFamily
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
//      > value "North", "East", "South" or "West"
//
//  > This object has 1 methods, Description of the methode jusr below the
//  declaration of the methods
//    - addNewFrancky
//    - moveFrancky
//
// -------------------------------------------------------------------------- */
exports.Francky = function (idFrancky, name, icon, color, positionX, positionY, orientation) {

  this.idFrancky = idFrancky;
  this.name = name || "John";
  this.icon = icon || "mood";
  this.color = color || "red";
  this.positionX = positionX || 1;
  this.positionY = positionY || 1;
  this.orientation = orientation || "normal";

};
