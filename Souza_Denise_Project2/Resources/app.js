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
	height: 50	
});


//Title Text
var titleText = Ti.UI.createLabel({
		text: "Trainings",
		textAlign: "center",
		font: {fontSize: 16, fontFamily:"Helvetica", fontWeight: "bold"}
});
	
	
//Border
var border = Ti.UI.createView({
		backgroundColor:"#e5e5e5",
		top: titleView.top + titleText.height,
		height: 1,
	});
	
	
//Table View
var trainingTable = Ti.UI.createTableView({
	top: border.top + border.height
});


//Athlete Training Section
var athleteSection = Ti.UI.createTableViewSection({
	headerTitle: "Athlete Training",
	footerTitle: "Information & Pricing"
});


//Softball Training Section
var softballSection = Ti.UI.createTableViewSection({
	headerTitle: "Softball Training",
	footerTitle: "Information & Pricing"
});
	
	
//Array to add Training Table 
var trainingSections = [athleteSection, softballSection];

//Adding the appropriate sections to the correct tables
trainingTable.setData(trainingSections);

//Loading json.js data
var loadfile = require("json");

//MAIN CODE
mainWindow.add(titeView, border, trainingTable);
titleView.add(titleText);
mainWindow.open();


	

