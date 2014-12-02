/**
 * @author Denise Souza
 */

//My own jukebox - kids sign-a-longs - Project1
// colors used #ffffff #ff5202 #0073ff #49ad0d


Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#c8d2dd",
	backgroundRepeat: "true",
});

//Main view window
var mainView = Ti.UI.createView({
	backgroundColor: "#ff5202",
	borderColor: "#000",
	borderRadius: 4,
	borderWidth: 1,
	height: 400,
	width: 300,
	top: 40
});

//Text label for main view
var mainMessage = Ti.UI.createLabel({
	text: "Click Next to see your favorite childhood songs",
	color: "#000",
	font: {fontsize:14, fontFamily: "chalkboard", fontWeight: "bold"},
	textAlign: "center"
});

//Previous Button
var previousButton = Ti.UI.createView({
	backgroundColor: "##0073ff",
	height: 50,
	width: 125,
	borderRadius: 4,
	borderColor: "#000",
	borderRadius: 4,
	borderWidth: 1,
	bottom: 50,
	left: 10
});

//Next Button
var nextButton = Ti.UI.createView({
	backgroundColor: "##0073ff",
	height: 50,
	width: 125,
	borderRadius: 4,
	borderColor: "#000",
	borderRadius: 4,
	borderWidth: 1,
	bottom: 50,
	right: 10
});

//Previous Button Text
var previousText = Ti.UI.createLabel({
	text: "Previous",
	color: "#000",
	font: {fontsize:14, fontFamily: "chalkboard", fontWeight: "bold"},
	textAlign: "center"
	
});

//Next Button Text
var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: {fontsize:14, fontFamily: "chalkboard", fontWeight: "bold"},
	textAlign: "center"
	
});



//main code
mainView.add(mainMessage);
mainWindow.add (mainView,previousButton, nextButton);
previousButton.add(previousText);
nextButton.add(nextText);
mainWindow.open();
