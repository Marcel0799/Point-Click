var Quelle = '/Muenzen.txt';
var geld;
var amtEins;

// Auslesen wie viel Geld vorhanden ist

var loca = window.location.href;
var punkt = loca.search(/wert.+/);
geld = parseInt(loca.charAt(punkt+5) + loca.charAt(punkt+6));

if(isNaN(geld)) {
	geld = 0;
}

// Auslesen ob Amt eins bestandden wurde

punkt = loca.search(/WarAmtEins.+/);
var TorF = loca.charAt(punkt+11);

if(TorF == "t") {
	amtEins = true;
}	else {
	amtEins = false;
}

function geldAnzeigen() {
	document.getElementById("zeigeGeld").innerHTML = '<p><font size="20" color="black">' + geld + '</font></p>' ;
}

function geldChange(wert) {
	console.log(geld);
	geld = geld + wert;
	document.getElementById("zeigeGeld").innerHTML = '<p><font size="20" color="black">' + geld + '</font></p>' ;
}

function amtEinsBestanden() {
	amtEins = true;
}
function amtEinsAberkennen() {
	amtEins = false;
}

function wurdeAmtEinsBestanden() {
	return amtEins;
}

function nextPage(fensterID,nameNext){

	if(isNaN(geld)) {
		geld = 0;
	}
	document.getElementById(fensterID).href=nameNext + ".html?wert=" + geld + "WarAmtEins=" + amtEins;
}

