/*
  checkXLimit
  --------------------------------
  This function check if Francky will go out of the world on X axe

  INPUTS :
    > idOrientation : to know where Francky want to move
    > idFranckyPositionX : to kwow the X pos of Francky
    > widthOfWorld :to know the X limits of the world

  OUTPUTS :
    > state (boolean) : set true if Francky can move, otherwise false
______________________________________________________________________________*/
function checkXLimit(idOrientation, idFranckyPositionX, widthOfWorld) {

  // Get the orientation & pos X
  var orientation = document.getElementById(idOrientation).innerHTML;
  var intPosX = parseInt(document.getElementById(idFranckyPositionX).innerHTML, 10);

  // Deal with left side
  // -----------------------------------------
  if ((intPosX == 1) && (orientation == 'West')) {
    return false;
  }

  // Deal with right side
  // -----------------------------------------
  if ((intPosX == widthOfWorld) && (orientation == 'East')) {
    return false;
  }

  // End of function
  // -----------------------------------
  return true;

};




/*
  checkYLimit
  --------------------------------
  This function check if Francky will go out of the world on Y axe

  INPUTS :
    > idOrientation : to know where Francky want to move
    > idFranckyPositionY : to kwow the Y pos of Francky
    > heightOfWorld :to know the Y limits of the world

  OUTPUTS :
    > > state (boolean) : set true if Francky can move, otherwise false
______________________________________________________________________________*/
function checkYLimit(idOrientation, idFranckyPositionY, heightOfWorld) {

  // Get the orientation & pos Y
  var orientation = document.getElementById(idOrientation).innerHTML;
  var intPosY = parseInt(document.getElementById(idFranckyPositionY).innerHTML, 10);

  // Deal with up side
  // -----------------------------------------
  if ((intPosY == heightOfWorld) && (orientation == 'North')) {
    return false;
  }

  // Deal with down side
  // -----------------------------------------
  if ((intPosY == 1) && (orientation == 'South')) {
    return false;
  }

  // End of function
  // -----------------------------------
  return true;

};




/*
  checkOtherFrancky
  --------------------------------
  This function check if there's another Franck next current Franck on the next
  box

  INPUTS :
    > idOrientation : to know where Francky want to move
    > idCurrentFranckyPositionX : to kwow the X position of the current Francky
    > idFranckyPositionX :to know the X position of the other Francky
    > idCurrentFranckyPositionY : to kwow the Y position of the current Francky
    > idFranckyPositionY :to know the Y position of the other Francky

  OUTPUTS :
    > state (boolean) : set true if Francky can move, otherwise false
______________________________________________________________________________*/
function checkOtherFrancky(idOrientation, idCurrentFranckyPositionX, idFranckyPositionX, idCurrentFranckyPositionY, idFranckyPositionY) {

  // Get the orientation & X informations & Y informations
  // ---------------------------------------------------------------------------
  var orientation = document.getElementById(idOrientation).innerHTML;
  var intCurrentPosX = parseInt(document.getElementById(idCurrentFranckyPositionX).innerHTML, 10);
  var intPosX = parseInt(document.getElementById(idFranckyPositionX).innerHTML, 10);
  var intCurrentPosY = parseInt(document.getElementById(idCurrentFranckyPositionY).innerHTML, 10);
  var intPosY = parseInt(document.getElementById(idFranckyPositionY).innerHTML, 10);


  if (orientation == 'East') {

    if ((intPosX == intCurrentPosX + 1) && (intPosY == intCurrentPosY)) {
      return false;
    }

  } else if (orientation == 'West') {

    if ((intPosX == intCurrentPosX - 1) && (intPosY == intCurrentPosY)) {
      return false;
    }

  } else if (orientation == 'North') {

    if ((intPosY == intCurrentPosY + 1) && (intPosX == intCurrentPosX)) {
      return false;
    }

  } else if (orientation == 'South') {

    if ((intPosY == intCurrentPosY - 1) && (intPosX == intCurrentPosX)) {
      return false;
    }
  }

  // End of function
  // -----------------------------------
  return true;

};
