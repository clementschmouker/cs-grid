//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var iGridWidth = 900;
var iGridColumns = 6;
var iGridGutterWidth = 20;

//Create Grid Container
var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("cs-gridContainer");
DOMBody.appendChild(DOMGridContainer);

DOMGridContainer.style.width = iGridWidth+"px";

var DOMGridColumns = [];
var DOMGridGutters = [];
for( var i = 0; i < iGridColumns; i += 1) {
  DOMGridGutters[i] = document.createElement("div");
  DOMGridGutters[i].classList.add("cs-gridGutter");
  DOMGridGutters[i].style.width = iGridGutterWidth+"px";

  DOMGridColumns[i] = document.createElement("div");
  DOMGridColumns[i].classList.add("cs-gridColumn")
  DOMGridColumns[i].style.width = ((iGridWidth / iGridColumns) - iGridGutterWidth) + iGridGutterWidth/iGridColumns+"px";
  DOMGridContainer.appendChild(DOMGridColumns[i]);
  if(i != iGridColumns-1){ //in order to not add a gutter to the end
    DOMGridContainer.appendChild(DOMGridGutters[i]);
  }
}
