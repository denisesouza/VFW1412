/**
 * @author Denise Souza
 * VFW1412
 * Project 3
 */

//Global Variables
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 30;
var rowCount = 4;
var margin = 10;
var spacing = 5;
var numberOfSpace = (rowCount + 1) * spacing;
var width = (pWidth - numberOfSpace) / rowCount;
var position = position + (width + spacing);

//file system get file
var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourceDirectory, "images");
var imageFiles = imageList.getDirectoryListing();


//function to open image thumbnail gallery
var getImageGallery = function(){
	var gallery = Ti.UI.createWindow({
		backgroundColor: "#5C5C5C"
	});
	
//Creating Title of Gallery
var galleryTitle = Ti.UI.createView({
	backgroundColor: "#E5E5E5",
	top: 20,
	height: 50
});

//Creating Text for Title of Gallery
var galleryText = Ti.UI.createLabel({
	text: "Athlete & Event Pictures",
	color: "#fff",
	textAlign: "center",
	font: {fontSize: 16, fontFamily:"Helvetica", fontWeight: "bold"}
});

//Creating border for gallery
var border = Ti.UI.createView({
	backgroundColor: "#000",
	top: galleryTitle.top + galleryTitle.height,
	height: 1,
});

//Creating close button - utilizing code from project 2
//Close Button
	var closeButton = Ti.UI.createLabel({
		text: "Close",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 16, fontFamily:"Helvetica", fontWeight: "bold"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});



//creating scroll view
var container = Ti.UI.createScrollView({
	contentWidth: pWidth,
	contentHeight:
	
});
