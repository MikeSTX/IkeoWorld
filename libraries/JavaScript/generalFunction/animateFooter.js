/*
  setFooterUp
  --------------------------------
  This function is called when mouseover event on the footer
  display the footer

  INPUTS :
    > idFooter : to get the id of the footer

  OUTPUTS :
    > none
______________________________________________________________________________*/
function setFooterUp(idFooter) {

  // Get element footer
  // --------------------------------
  var id = document.getElementById(idFooter);

  // Up the footer
  // --------------------------------
  id.style.bottom = '0px';

}


/*
  setFooterDown
  --------------------------------
  This function is called when mouseout event on the footer
  hide the footer

  INPUTS :
    > idFooter : to get the id of the footer

  OUTPUTS :
    > none
______________________________________________________________________________*/
function setFooterDown(idFooter) {

  // Get element footer
  // --------------------------------
  var id = document.getElementById(idFooter);

  // Up the footer
  // --------------------------------
  id.style.bottom = '-38px';

}
