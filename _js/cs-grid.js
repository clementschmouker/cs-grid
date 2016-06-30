var CSGrid = function() {
  this.DOMGridContainer = 0;
  this.DOMGridColumns = [];
  this.DOMGridGutters = [];
  this.DOMGridRows = [];
  this.bActive = true;
}


//Global Variables

var DOMGridButton = document.createElement("button");
var csGrid = new CSGrid();

function setCSGrid( gridwidth, gridcolumnnumber, gridgutterwidth, gridrowheight, activategrid) {

  csGrid.DOMGridContainer = document.createElement("div");
  csGrid.DOMGridContainer.classList.add("cs-gridContainer");


  DOMGridButton.classList.add("cs-gridButton");
  DOMGridButton.innerHTML = "ON";

  document.getElementsByTagName("body")[0].appendChild(csGrid.DOMGridContainer);
  document.getElementsByTagName("body")[0].appendChild(DOMGridButton);
  csGrid.DOMGridContainer.style.width = gridwidth+"px";
  for( var i = 0; i < gridcolumnnumber; i += 1) {
    csGrid.DOMGridGutters[i] = document.createElement("div");
    csGrid.DOMGridGutters[i].classList.add("cs-gridGutter");
    csGrid.DOMGridGutters[i].style.width = gridgutterwidth+"px";

    csGrid.DOMGridColumns[i] = document.createElement("div");
    csGrid.DOMGridColumns[i].classList.add("cs-gridColumn")
    csGrid.DOMGridColumns[i].style.width = ((gridwidth / gridcolumnnumber) - gridgutterwidth) + (gridgutterwidth/gridcolumnnumber)+"px";
    csGrid.DOMGridContainer.appendChild(csGrid.DOMGridColumns[i]);
    if(i != gridcolumnnumber-1){ //in order to not add a gutter to the end
      csGrid.DOMGridContainer.appendChild(csGrid.DOMGridGutters[i]);
    }
  }
  //Checks if there needs to be rows
  if(gridrowheight){
    for(var i = 0; i < document.body.offsetHeight / gridrowheight - 1; i += 1) {
      csGrid.DOMGridRows[i] = document.createElement("div");
      csGrid.DOMGridRows[i].classList.add("cs-gridRow");
      csGrid.DOMGridRows[i].style.height = gridrowheight+"px";
      csGrid.DOMGridContainer.appendChild(csGrid.DOMGridRows[i]);
    }
  }
  //Checks if there needs to start active/inactive
  csGrid.bActive = activategrid;
  if(csGrid.bActive == true) {
    csGrid.DOMGridContainer.style.opacity = 1;
    DOMGridButton.innerHTML = "ON";
  }
  if(csGrid.bActive == false) {
    csGrid.DOMGridContainer.style.opacity = 0;
    DOMGridButton.innerHTML = "OFF";
  }
}

DOMGridButton.addEventListener("click", function() {
  if(csGrid.bActive == false) {
    csGrid.bActive = true;
    csGrid.DOMGridContainer.style.opacity = 1;
    DOMGridButton.innerHTML = "ON";
  }
  else {
    csGrid.bActive = false;
    csGrid.DOMGridContainer.style.opacity = 0;
    DOMGridButton.innerHTML = "OFF";
  }
});
