//Global Variables
var DOMBody = document.getElementsByTagName("body")[0];

var iGridWidth = 900;
var iGridColumns = 0;
var iGutterWidth = 0;

//Create Grid Container
var DOMGridContainer = document.createElement("div");
DOMGridContainer.classList.add("gridContainer");
DOMBody.appendChild(DOMGridContainer);

DOMGridContainer.style.width = iGridWidth+"px";
