function highlight(link, h) {
	var label = link.parentNode;
	var rowCells = label.parentNode.childNodes;
	var highlightCell;

	for (i = 0; i < rowCells.length; i ++) {
		if (rowCells[i].cellIndex == 1) {
			highlightCell = rowCells[i];
			break;
		}
	}

	label.className = (h ? "label-hover" : "label");
	highlightCell.className = (h ? "highlight-hover" : "highlight");
}


var kybib = document.getElementById("kybib-downloads");
var links = kybib.getElementsByTagName("a");

for (i = 0; i < links.length; i ++) {

	links[i].onmouseover = function() {
		highlight(this, true);
	};
	links[i].onmouseout = function() {
		highlight(this, false);
	};
}
 