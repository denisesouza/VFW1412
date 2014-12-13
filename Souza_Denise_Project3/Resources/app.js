/**
 * @author Denise Souza
 * VFW1412
 * Project 3
 */

Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});



//Main Button
var mainButton = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 20,
	height: 40
});


//Main Button Text
var mainButtonText = Ti.UI.createLabel({
		text: "Energy No Limit Gallery",
		textAlign: "center",
		font: {fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"}
});
	
	
//Border
var border = Ti.UI.createView({
		backgroundColor:"#e5e5e5",
		top: titleView.top + titleView.height,
		height: 1,
	});
	


//MAIN CODE	
//Loading json.js data
var loadfile = require("imagelayout.js");


mainWindow.add(mainButton, border);
mainButton.add(mainButtonText);
mainWindow.open();
