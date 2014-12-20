/**
 * @author Denise Souza
 * VFW1412
 * TEST PROJECT
 */

//Global Variables
//file system get file
//var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
//var imageFiles = imageList.getDirectoryListing();
//var pWidth = Ti.Platform.displayCaps.platformWidth;
//var pHeight = Ti.Platform.displayCaps.platformHeight;
//var sectionHeight = 100;
//var buttonHeight = 100;
//var currentWindow = Ti.UI.currentWindow;
//var json = require("json");


Ti.UI.setBackgroundColor("#000");

//Main Window // Title  // Nav  // Footer

var mainWindow = Ti.UI.createWindow({
	title: "Energy No Limit",
	backgroundColor: "#BDBDBD"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var mainFooter = Ti.UI.createLabel({
	text: "© by Denise Souza VFW1412",
	textAlign: "center",
	font: {fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"}
});


navWindow.openWindow();