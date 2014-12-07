/**
 * @author Denise Souza
 * VFW1412
 * Project 2
 */
 
 
Ti.UI.setBackgroundColor("#000");

//Background
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#f5f5f5"
});


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
		height: 2,
	});
	
	
	
//Table View
var trainingTable = Ti.UI.createTableView({
	top: titleView.top + titleView.height
	
	
});



//Athlete Training Section
var athleteSection = Ti.UI.createTableViewSection({
	headerTitle: "Athlete Training",
	footerTitle: "Information & Pricing",
	font: {fontSize: 10, fontFamily:"Helvetica"},
	top: 10,
	bottom: 10,
	height: 25
	
});


//Softball Training Section
var softballSection = Ti.UI.createTableViewSection({
	headerTitle: "Softball Training",
	footerTitle: "Information & Pricing",
	font: {fontSize: 10, fontFamily:"Helvetica"},
	top: 20,
	bottom: 10,
	height: 25
});
	
	
//Array to add Training Table 
var trainingSections = [athleteSection, softballSection];

//Adding the appropriate sections to the correct tables
trainingTable.setData(trainingSections);

//Loading json.js data
var loadfile = require("json");

//MAIN CODE
mainWindow.add(titleView, border, trainingTable);
titleView.add(titleText);
mainWindow.open();


	

