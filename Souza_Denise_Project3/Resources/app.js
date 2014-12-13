/**
 * @author Denise Souza
 * VFW1412
 * Project 3
 */

Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#323232"
});



//Main Button
var mainButton = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 100,
	width: 300,
	borderRadius:8
});


//Main Button Text
var mainButtonText = Ti.UI.createLabel({
		text: "Energy No Limit Gallery",
		textAlign: "center",
		font: {fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"}
});
	
	

//MAIN CODE	
//Loading imagelayout.js file
var loadfile = require("imagelayout.js");


mainWindow.add(mainButton);
mainButton.add(mainButtonText);
mainWindow.open();
