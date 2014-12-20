/**
 * @author Denise Souza
 * VFW1412
 * Project 4
 */

var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var imageFiles = imageList.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow = Ti.UI.currentWindow;




//Creating new window for each image

//var currentWindow = Ti.Ui.currentWindow;

	var newWindow = Ti.UI.createWindow({
		title: "Energy No Limit Gallery",
		backgroundColor: "#fff"
	});


	var view = Ti.UI.createView({
		backgroundColor: "#889EC5",
		top: 90,
		width: pWidth,
		height: 300
	});	
	
	var nextImageButton = Ti.UI.createButton({
		bottom: 0,
		height: 50,
		width: pWidth,
		title: "Next Image",
		backgroundColor: "#fff"
	});
	
	var startImage1 = 0;
	
	
	var startImage = Ti.UI.createImageView({
		image: "photos/" + imageFiles[startImage1],
		borderRadius: 1,
		top: 80,
		bottom: 100,
		width: pWidth,
		fileName: imageFiles[startImage1]
	});


//Math logic to pick random images and not repeat same one

	var nextImage = function(){
		startImage1 = Math.floor(Math.random() * 10) +1;
		startImage.image = "photos/" + imageFiles[startImage1];
	if(startImage1 = startImage1)
		{
			startImage1=0;
		};
		
	};
	
//MAIN CODE

currentWindow.add(startImage);
nextImageButton.addEventListener("click", nextImage);

currentWindow.add(nextImageButton);
currentWindow.open(newWindow);

