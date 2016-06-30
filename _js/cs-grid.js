//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var iGridWidth = 900;
var iGridColumns = 2;
var iGutterWidth = 0;

//Create Grid Container
var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("cs-gridContainer");
DOMBody.appendChild(DOMGridContainer);

DOMGridContainer.style.width = iGridWidth+"px";

var DOMGridColumns = [];
for( var i = 0; i < iGridColumns; i += 1) {
  DOMGridColumns[i] = document.createElement("div");
  DOMGridColumns[i].classList.add("cs-gridColumn")
  DOMGridContainer.appendChild(DOMGridColumns[i]);
}
