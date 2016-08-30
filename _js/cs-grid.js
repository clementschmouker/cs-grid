var CSGrid = function() {
  this.DOMGridContainer = 0;
  this.DOMGridColumns = [];
  this.DOMGridGutters = [];
  this.DOMGridRows = [];

  this.DOMGridButton = document.createElement("button");
  this.bActive = true;

}


//Global Variables
var csGrid = new CSGrid();

function setCSGrid( object ) {

  csGrid.DOMGridContainer = document.createElement("div");
  csGrid.DOMGridContainer.classList.add("cs-gridContainer");


  csGrid.DOMGridButton.classList.add("cs-gridButton");
  csGrid.DOMGridButton.innerHTML = "ON";

  document.getElementsByTagName("body")[0].appendChild(csGrid.DOMGridContainer);
  document.getElementsByTagName("body")[0].appendChild(csGrid.DOMGridButton);
  csGrid.DOMGridContainer.style.width = object.gridWidth+object.gridWidthUnit;
  for( var i = 0; i < object.gridColumnNumber; i += 1) {
    csGrid.DOMGridGutters[i] = document.createElement("div");
    csGrid.DOMGridGutters[i].classList.add("cs-gridGutter");
    csGrid.DOMGridGutters[i].style.width = object.gridGutterWidth+object.gridGutterWidthUnit;
    csGrid.DOMGridGutters[i].style.height = document.body.offsetHeight +"px";

    csGrid.DOMGridColumns[i] = document.createElement("div");
    csGrid.DOMGridColumns[i].classList.add("cs-gridColumn")
    csGrid.DOMGridColumns[i].style.width = ((object.gridWidth / object.gridColumnNumber) - object.gridGutterWidth) + (object.gridGutterWidth/object.gridColumnNumber)+object.gridWidthUnit;
    csGrid.DOMGridColumns[i].style.height = document.body.offsetHeight +"px";
    csGrid.DOMGridContainer.appendChild(csGrid.DOMGridColumns[i]);
    if(i != object.gridColumnNumber-1){ //in order to not add a gutter to the end
      csGrid.DOMGridContainer.appendChild(csGrid.DOMGridGutters[i]);
    }
  }
  //Checks if there needs to be rows
  if(object.gridRowHeight){
    for(var i = 0; i < document.body.offsetHeight / object.gridRowHeight - 1; i += 1) {
      csGrid.DOMGridRows[i] = document.createElement("div");
      csGrid.DOMGridRows[i].classList.add("cs-gridRow");
      csGrid.DOMGridRows[i].style.height = object.gridRowHeight+object.gridRowUnit;
      csGrid.DOMGridContainer.appendChild(csGrid.DOMGridRows[i]);
    }
  }
  //Checks if there needs to start active/inactive
  csGrid.bActive = object.activateGrid;
  if(csGrid.bActive == true) {
    csGrid.DOMGridContainer.style.opacity = 1;
    csGrid.DOMGridButton.innerHTML = "ON";
  }
  if(csGrid.bActive == false) {
    csGrid.DOMGridContainer.style.opacity = 0;
    csGrid.DOMGridButton.innerHTML = "OFF";
  }
}

csGrid.DOMGridButton.addEventListener("click", function() {
  if(csGrid.bActive == false) {
    csGrid.bActive = true;
    csGrid.DOMGridContainer.style.opacity = 1;
    csGrid.DOMGridButton.innerHTML = "ON";
  }
  else {
    csGrid.bActive = false;
    csGrid.DOMGridContainer.style.opacity = 0;
    csGrid.DOMGridButton.innerHTML = "OFF";
  }
});
