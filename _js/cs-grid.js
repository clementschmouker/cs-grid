//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var iGridWidth = 900;
var iGridColumns = 6;
var iGridGutterWidth = 20;

//Create Grid Container
var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("cs-gridContainer");
DOMBody.appendChild(DOMGridContainer);


var DOMGridColumns = [];
var DOMGridGutters = [];

function setCSGrid( gridwidth, gridcolumnnumber, gridgutterwidth) {
  DOMGridContainer.style.width = gridwidth+"px";
  for( var i = 0; i < gridcolumnnumber; i += 1) {
    DOMGridGutters[i] = document.createElement("div");
    DOMGridGutters[i].classList.add("cs-gridGutter");
    DOMGridGutters[i].style.width = gridgutterwidth+"px";

    DOMGridColumns[i] = document.createElement("div");
    DOMGridColumns[i].classList.add("cs-gridColumn")
    DOMGridColumns[i].style.width = ((gridwidth / gridcolumnnumber) - gridgutterwidth) + (gridgutterwidth/gridcolumnnumber)+"px";
    console.log(DOMGridColumns[i].style.width +"----"+((gridwidth / gridcolumnnumber) - gridgutterwidth) + (gridgutterwidth/gridcolumnnumber));
    DOMGridContainer.appendChild(DOMGridColumns[i]);
    if(i != gridcolumnnumber-1){ //in order to not add a gutter to the end
      DOMGridContainer.appendChild(DOMGridGutters[i]);
    }
  }
}

setCSGrid(1000, 12, 20);
