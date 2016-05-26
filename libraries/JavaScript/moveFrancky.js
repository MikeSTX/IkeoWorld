/*
  moveForwardFrancky
  --------------------------------
  This function let Francky move forward the next box according to his/her
  orientation - called when the user pressed 'a' or 'A' key

  INPUTS :
    > id Francky : to get the id of the Francky controled by the user

  OUTPUTS :
    > none
______________________________________________________________________________*/
function moveForwardFrancky(idFrancky, orientationFrancky) {

  // Get id of INPUTS
  // ----------------------------------
  var id = document.getElementById(idFrancky);
  var orientation = document.getElementById(orientationFrancky).innerHTML;

  // Move the div Francky according to his/her orientation
  if (orientation == 'North') {

    moveYaxe(id, '-71px', -51);

  } else if (orientation == 'South') {

    moveYaxe(id, '30px', 51);

  } else if (orientation == 'West') {

    moveXaxe(id, '-71px', -51);

  } else if (orientation == 'East') {

    moveXaxe(id, '30px', 51);

  }

}




/*
  moveYaxe
  --------------------------------
  This function let Francky move on the Y axe

  INPUTS :
    > id : id of Francky div
    > nbPixelsMoveStart : nb pixel movement of Francky for the first movement
    > nbPixelsMove : nb pixel movement of Francky normally

  OUTPUTS :
    > none
______________________________________________________________________________*/
function moveYaxe(id, nbPixelsMoveStart, nbPixelsMove) {

  if (id.style.marginTop == '') {

      id.style.marginTop = nbPixelsMoveStart;

  } else {
    id.style.marginTop = '' + (parseInt(id.style.marginTop, 10) + (nbPixelsMove)) + 'px';
  }
}



/*
  moveXaxe
  --------------------------------
  This function let Francky move on the X axe

  INPUTS :
    > id : id of Francky div
    > nbPixelsMoveStart : nb pixel movement of Francky for the first movement
    > nbPixelsMove : nb pixel movement of Francky normally

  OUTPUTS :
    > none
______________________________________________________________________________*/
function moveXaxe(id, nbPixelsMoveStart, nbPixelsMove) {

  if (id.style.marginLeft == '') {

    id.style.marginLeft = nbPixelsMoveStart;

  } else {
    id.style.marginLeft = '' + (parseInt(id.style.marginLeft, 10) + (nbPixelsMove)) + 'px';

  }
}


/*
  turnFrancky
  --------------------------------
  This function let Francky turn left 90° - called when the user pressed
  "left arrow"

  INPUTS :
    > id Francky : (string) to know what Francky is controled by the user

  OUTPUTS :
    > none
______________________________________________________________________________*/
function turnFrancky(idFrancky, angle) {

  // Get id Francky & his/her current rotation
  var id = document.getElementById(idFrancky);
  currentAngle = getCurrentAngle(id);


  // Rotate it
  // -------------------------
  var rotated = false;
  deg = rotated ? currentAngle : currentAngle + angle;

  id.style.webkitTransform = 'rotate('+deg+'deg)';
  id.style.mozTransform    = 'rotate('+deg+'deg)';
  id.style.msTransform     = 'rotate('+deg+'deg)';
  id.style.oTransform      = 'rotate('+deg+'deg)';
  id.style.transform       = 'rotate('+deg+'deg)';

}



/*
  getCurrentAngle
  --------------------------------
  This function let Francky turn rigth 90° - called when the user pressed
  "right arrow"

  INPUTS :
    > id Francky : (string) to know what Francky is controled by the user

  OUTPUTS :
    > stateMovement : (boolean) if the movement succeed or not
______________________________________________________________________________*/
function getCurrentAngle(id) {

  var st = window.getComputedStyle(id, null);
  var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform");

   if( tr !== "none") {

     var values = tr.split('(')[1];
     values = values.split(')')[0];
     values = values.split(',');

     var a = values[0];
     var b = values[1];
     var c = values[2];
     var d = values[3];

     var scale = Math.sqrt(a*a + b*b);
     var currentRotation = Math.round(Math.atan2(b, a) * (180/Math.PI));

   } else {
     var currentRotation = 0;
   }

   // Return the current angle
   return currentRotation;
};
