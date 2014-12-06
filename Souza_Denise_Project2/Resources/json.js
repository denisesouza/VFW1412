/**
 * @author Denise Souza
 * VFW1412
 * Project 2
 */
 
//JSON DATA

var trainings = {
	"Athlete Training":{
		"trainingDetails":[
			{		
				"title": "Athlete Performance Training",
				"details": "What to expect...Our athlete performance classes are for athletes who are serious about reaching goals taking their talents to another level. We focus on speed, strength, reaction and proper technique. The workouts are intense, high paced, and challenging. Our athletes learn how to TRAIN HARDER, WORK HARDER AND TAKE CARE OF THEIR BODY HARDER. The energy created keeps athletes motivated, shows results and keeps them coming back for more!"
			},
			{
				"title": "Adult Training",
				"details": "TBD"
			},
			{
				"title": "Event Training",
				"details": "TBD"
			},
		]
	},
	"Softball Training":{
		"trainingDetails":[
			{		
				"title": "Hitting",
				"details": "TBD"
			},
			{
				"title": "Catching",
				"details": "TBD"
			},
			{
				"title": "Fielding",
				"details": "TBD"
			}
		]
	},
	
//Function to create a new window

var getTraining = function(){
	var newWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	
//Title View

	var titleView = Ti.UI.createView({
		backgroundColor: "#fff",
		top: 20,
		height: 50
});

//Title Text

	var titleText - Ti.UI.createLabel({
		text: this.title,
		textAlign: "center",
		font: (fontSize: 16, fontFamily:"Helvetica", fontWeight: "bold")
	});
	
//Border

	var border = Ti.UI.createView({
		backgroundColor:"#e5e5e5",
		top: titleView.top + titleText.height,
		height: 1,
	});
	
//Training Information

	var info = Ti.UI.createLable({
		text: this.details,
		color: "#323232",
		font: (fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"),
		top: border.height + border.top + 50,
		left: 10,
		right: 10
	});
	
//Close Button

	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 10,
		font: (fontSize: 20, fontFamily:"Helvetica", fontWeight: "bold"),
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});

//Function to close new window

	var closeWindow = function(){
		newWindow.close();
		
	};
	

//MAIN CODE

	closeButton.addEventListener("click", coseWindow);
	
	tilteView.add(titleText);
	newWindow.add(titleView, border, titleText, closeButton);
	makeWindow.open();
	
// for loops to run through training details

for (var i=0; i=trainings.Athlete Trainings.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: trainings.Athlete Trainings.trainingDetails[i].title,
		menu: trainings.Athlete Trainings.trainingDetails[i].details,
		hasChild: true	
});

	
	
	
	
	
	
	



