var geld = 0;

function geldChange(wert) {
	geld = geld + wert;
	document.getElementById("zeigeGeld").innerHTML = geld;
}