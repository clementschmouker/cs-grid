//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("cs-gridContainer");


var DOMGridColumns = [];
var DOMGridGutters = [];
var DOMGridRows = [];

var DOMGridButton = document.createElement("button");
DOMGridButton.classList.add("cs-gridButton");
DOMGridButton.innerHTML = "ON";
var bActive = true;

function setCSGrid( gridwidth, gridcolumnnumber, gridgutterwidth, gridrowheight, activategrid) {
  DOMBody.appendChild(DOMGridContainer);
  DOMBody.appendChild(DOMGridButton);
  DOMGridContainer.style.width = gridwidth+"px";
  for( var i = 0; i < gridcolumnnumber; i += 1) {
    DOMGridGutters[i] = document.createElement("div");
    DOMGridGutters[i].classList.add("cs-gridGutter");
    DOMGridGutters[i].style.width = gridgutterwidth+"px";

    DOMGridColumns[i] = document.createElement("div");
    DOMGridColumns[i].classList.add("cs-gridColumn")
    DOMGridColumns[i].style.width = ((gridwidth / gridcolumnnumber) - gridgutterwidth) + (gridgutterwidth/gridcolumnnumber)+"px";
    DOMGridContainer.appendChild(DOMGridColumns[i]);
    if(i != gridcolumnnumber-1){ //in order to not add a gutter to the end
      DOMGridContainer.appendChild(DOMGridGutters[i]);
    }
  }
  //Checks if there needs to be rows
  if(gridrowheight){
    for(var i = 0; i < document.body.offsetHeight / gridrowheight - 1; i += 1) {
      DOMGridRows[i] = document.createElement("div");
      DOMGridRows[i].classList.add("cs-gridRow");
      DOMGridRows[i].style.height = gridrowheight+"px";
      DOMGridContainer.appendChild(DOMGridRows[i]);
    }
  }
  //Checks if there needs to start active/inactive
  bActive = activategrid;
  if(bActive == true) {
    DOMGridContainer.style.opacity = 1;
    DOMGridButton.innerHTML = "ON";
  }
  if(bActive == false) {
    DOMGridContainer.style.opacity = 0;
    DOMGridButton.innerHTML = "OFF";
  }
}

DOMGridButton.addEventListener("click", function() {
  if(bActive == false) {
    bActive = true;
    DOMGridContainer.style.opacity = 1;
    DOMGridButton.innerHTML = "ON";
  }
  else {
    bActive = false;
    DOMGridContainer.style.opacity = 0;
    DOMGridButton.innerHTML = "OFF";
  }
});
