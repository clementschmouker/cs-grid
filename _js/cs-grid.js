//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("cs-gridContainer");


var DOMGridColumns = [];
var DOMGridGutters = [];
var DOMGridRows = [];

var DOMGridButton = document.createElement("button");
DOMGridButton.classList.add("cs-gridButton");

var bActive = true;
DOMGridButton.innerHTML = "ON";

function setCSGrid( gridwidth, gridcolumnnumber, gridgutterwidth, gridrowheight) {
  DOMBody.appendChild(DOMGridContainer);
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
  if(gridrowheight){
    for(var i = 0; i < document.body.offsetHeight / gridrowheight - 1; i += 1) {
      DOMGridRows[i] = document.createElement("div");
      DOMGridRows[i].classList.add("cs-gridRow");
      DOMGridRows[i].style.height = gridrowheight+"px";
      DOMGridContainer.appendChild(DOMGridRows[i]);
    }
    console.log(document.body.offsetHeight);
  }
}

DOMBody.appendChild(DOMGridButton);
DOMGridButton.addEventListener("click", function() {
  if(bActive == false) {
    bActive = true;
    DOMGridContainer.style.display = "block";
    DOMGridButton.innerHTML = "ON";
  }
  else {
    bActive = false;
    DOMGridContainer.style.display = "none";
    DOMGridButton.innerHTML = "OFF";
  }
});
