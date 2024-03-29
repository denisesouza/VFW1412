/**
 * @author Denise Souza
 * VFW1412
 * Project 4
 */

//Global Variables
//file system get file
var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var imageFiles = imageList.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var sectionHeight = 100;
var buttonHeight = 100;
var currentWindow = Ti.UI.currentWindow;
var trainings = require ("json");




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
	bottom: 20,
	font: {fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"}
});



// Section 1 // Images

var imageGallery = Ti.UI.createButton({
	title: "Energy No Limit Gallery",
	backgroundColor: "#889EC5",
	font: {fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	color: "000",
	width: pWidth,
	top: buttonHeight,
	height: sectionHeight,
	file: "images.js"
});

var getImageGallery = function(){
	var gallery = Ti.UI.createWindow({
		url: this.file,
		title: imageGallery.title,
		navWindowImage: this.navWindow,
		window: this.newWindow,
		backgroundColor: this.backgroundColor 
	});

navWindow.openWindow(gallery);

};

imageGallery.addEventListener("click", getImageGallery);



//// Section 2 // Training Services

var trainingInfo = Ti.UI.createButton({
	title: "Training Services",
	backgroundColor: "#756972",
	font: {fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	color: "#000",
	width: pWidth,
	top: imageGallery.top*2,
	height: buttonHeight,
	file: "json.js"
});

var getTrainingInfo = function(){
	var trainingWindow = Ti.UI.createWindow({
		title: "Athlete Training",
		navWindowImage: this.navWindow,
		window: this.newWindow,
		backgroundColor: "#BDBDBD",
		url: this.file
	});

trainingWindow.add(trainingTable);
navWindow.openWindow(trainingWindow);

};

trainingInfo.addEventListener("click", getTrainingInfo);

//Title
var titleView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 20,
	height: 40
});


//Title Text
var titleText = Ti.UI.createLabel({
		text: "Trainings",
		textAlign: "center",
		font: {fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"}
});
	
	
//Border
var border = Ti.UI.createView({
		backgroundColor:"#e5e5e5",
		top: titleView.top + titleView.height,
		height: 1,
	});
	
	
//Table View
var trainingTable = Ti.UI.createTableView({
	top: titleView.top + titleView.height	
});

if(Ti.Platform.name === "iPhone OS"){
	trainingTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

//Training Section header & footer
var athleteSection = Ti.UI.createTableViewSection({
	headerTitle: "Athlete Training",
	footerTitle: "Information & Pricing"
});



//Array to add Training Table 
var trainingSections = [athleteSection];

//Adding the appropriate sections to the correct tables
trainingTable.setData(trainingSections);


//Loading json.js data
var loadfile = require("json");





//// Section 3 // Info form
var infoForm = Ti.UI.createButton({
	title: "Request Information",
	backgroundColor: "#889EC5",
	width: pWidth,
	font: {fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	color: "000",
	top: trainingInfo.top*1.5,
	height: buttonHeight
});

var getInfoForm = function(){
	var detailForm = Ti.UI.createWindow({
		title: "Submit Your Information",
		backgroundColor: "#BDBDBD",
		url: "info.js"
	});


navWindow.openWindow(detailForm);

};
	




//MAIN CODE main windows
mainWindow.add(imageGallery,trainingInfo, infoForm);
mainWindow.add(mainFooter);

//trainingInfo.addEventListener("click", getTrainingInfo);
infoForm.addEventListener("click", getInfoForm);



//MAIN CODE nav windows

navWindow.add(mainWindow);
navWindow.open();
