/*
  updateOrientationInformation
  --------------------------------
  This function update the orientation information on the explorer view

  INPUTS :
    > idFranckyOrientation : (string) balise where the information is written
    > sens : (integer) to kwow if Francky turn left or right

  OUTPUTS :
    > none
______________________________________________________________________________*/
function updateOrientationInformation(idFranckyOrientation, sense) {

  // Get the old orientation
  var oldOrientation = document.getElementById(idFranckyOrientation).innerHTML;

  // Set new orietation according to the sens of rotation
  // ------------------------------------------------------------

  // Turn left
  if (sense == 0) {

    if (oldOrientation == 'South') {
      orientation = 'West';
    } else if (oldOrientation == 'West') {
      orientation = 'North';
    } else if (oldOrientation == 'North') {
      orientation = 'East';
    } else if (oldOrientation == 'East') {
      orientation = 'South';
    }

  } else if (sense == 1) { // Turn right

    if (oldOrientation == 'South') {
      orientation = 'East';
    } else if (oldOrientation == 'East') {
      orientation = 'North';
    } else if (oldOrientation == 'North') {
      orientation = 'West';
    } else if (oldOrientation == 'West') {
      orientation = 'South';
    }

  }

  // Set new text-decoration
  // ----------------------------------
  document.getElementById(idFranckyOrientation).textContent = orientation;

}



/*
  updatePositionX
  --------------------------------
  This function update the X position of Francky on the explorer view

  INPUTS :
    > idFranckyPositionX : (string) balise where the information is written
    > sens : (integer) to kwow where the Francky moved

  OUTPUTS :
    > none
______________________________________________________________________________*/
function updatePositionX(idFranckyPositionX, idOrientation) {

  // Get the orientation & pos X
  var orientation = document.getElementById(idOrientation).innerHTML;
  var oldPosX = document.getElementById(idFranckyPositionX).innerHTML;

  // Set new X position according to the sens of rotation
  // ------------------------------------------------------------
  if (orientation == 'West') {

    var intOldPosX = parseInt(oldPosX, 10);
    var posX = intOldPosX - 1;
    document.getElementById(idFranckyPositionX).textContent = posX.toString();

  }  else if (orientation == 'East') {

    var intOldPosX = parseInt(oldPosX, 10);
    var posX = intOldPosX + 1;
    document.getElementById(idFranckyPositionX).textContent = posX.toString();
  }

}



/*
  updatePositionY
  --------------------------------
  This function update the Y position of Francky on the explorer view

  INPUTS :
    > idFranckyPositionY : (string) balise where the information is written
    > sens : (integer) to kwow where the Francky moved

  OUTPUTS :
    > none
______________________________________________________________________________*/
function updatePositionY(idFranckyPositionY, idOrientation) {

  // Get the orientation & pos Y
  var orientation = document.getElementById(idOrientation).innerHTML;
  var oldPosY = document.getElementById(idFranckyPositionY).innerHTML;

  // Set new X position according to the sens of rotation
  // ------------------------------------------------------------
  if (orientation == 'North') {

    var intOldPosY = parseInt(oldPosY, 10);
    var posY = intOldPosY + 1;
    document.getElementById(idFranckyPositionY).textContent = posY.toString();

  }  else if (orientation == 'South') {

    var intOldPosY = parseInt(oldPosY, 10);
    var posY = intOldPosY - 1;
    document.getElementById(idFranckyPositionY).textContent = posY.toString();
  }

}
