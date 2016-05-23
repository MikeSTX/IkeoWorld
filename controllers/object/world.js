/*
//
// Node's module : world
//  - - - - - - - - - - - --  - - - -
//
//  > This module define the object "franckyFamily". The parameters of the
//  object is :
//    - id (type : int)
//    - name (type : string)
//    - width (type : integer) - set the width (Y axe) of the world
//    - length (type : integer) - set the length (X axe) of the world
//    - backgroundColor (type : string) - color with hexadecimal value
//
//
// -------------------------------------------------------------------------- */
var World = function(idWorld, name, width, length, backgroundColor) {

  this.idWorld = idWorld;
  this.name = name || 'Ikeo';
  this.width = width || 20;
  this.length = length || 20;
  this.backgroundColor = backgroundColor || '#FFFFFF';

};

module.exports = World;
