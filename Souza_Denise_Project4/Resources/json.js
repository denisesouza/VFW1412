/**
 * @author Denise Souza
 * VFW1412
 * Project 4
 */
 
//JSON DATA
var currentWindow = Ti.UI.currentWindow;
var pWidth = Ti.Platform.displayCaps.platformWidth;
var trainings = {
	"AthleteTraining":{
		"trainingDetails":[
			{		
				"title": "Athlete Performance Training",
				"details": "What to expect...Our athlete performance classes are for athletes who are serious about reaching goals taking their talents to another level. We focus on speed, strength, reaction and proper technique. The workouts are intense, high paced, and challenging. Our athletes learn how to TRAIN HARDER, WORK HARDER AND TAKE CARE OF THEIR BODY HARDER. The energy created keeps athletes motivated, shows results and keeps them coming back for more!"
			},
			{
				"title": "Adult Training",
				"details": "Chicken pork leberkas doner fatback prosciutto pig landjaeger kevin short loin cow pancetta. Meatloaf ground round jowl picanha, short loin pork chop turkey drumstick biltong tri-tip doner venison. Salami pork belly tongue andouille. Strip steak ham flank, rump venison kevin boudin short ribs capicola ground round."
			},
			{
				"title": "Event Training",
				"details": "Chicken pork leberkas doner fatback prosciutto pig landjaeger kevin short loin cow pancetta. Meatloaf ground round jowl picanha, short loin pork chop turkey drumstick biltong tri-tip doner venison. Salami pork belly tongue andouille. Strip steak ham flank, rump venison kevin boudin short ribs capicola ground round."
			},
		]
	},
	
};

var newWindow = Ti.UI.createWindow({
		title: "Training Info",
		backgroundColor: "#f5f5f5"
	});


	var view = Ti.UI.createView({
		backgroundColor: "#BDBDBD",
		top: 90,
		width: pWidth,
		height: 300
	});	

//var mainWindow = Ti.UI.createWindow({
	//title: "Training Info",
	//backgroundColor: "#f5f5f5"
//});




var getInfo = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
});
	
	
//Title View
	var createTitleView = Ti.UI.createView({
		backgroundColor: "#fff",
	 	top: 20,
		height: 50
});

//Title Text
	var createTitleText = Ti.UI.createLabel({
		text: this.title,
		textAlign: "center",
		font: {fontSize: 16, fontFamily:"Helvetica", fontWeight: "bold"}
	});
	
	
//Border
	var createBorder = Ti.UI.createView({
		backgroundColor:"#e5e5e5",
		top: createTitleView.top + createTitleView.height,
		height: 2,
	});
	
//Training Information
	var info = Ti.UI.createLabel({
		text: this.details,
		color: "#323232",
		font: {fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
		top: border.height + border.top + 50,
		left: 10,
		right: 10
	});



	

// for loops to run through training details

for (var i=0; i<trainings.AthleteTraining.trainingDetails.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: trainings.AthleteTraining.trainingDetails[i].title,
		details: trainings.AthleteTraining.trainingDetails[i].details,
		hasChild: true	
	});
	athleteSection.add(row);
	row.addEventListener("click", getInfo);
};	
	


//Function to close new window
	var closeWindow = function(){
		detailWindow.close();
	};
	

createTitleView.add(createTitleText);
detailWindow.add(createTitleView, createBorder, info, closeButton);

		
//MAIN CODE
currentWindow.add(creatTitleView, createBorder,info);
currentWindow.open(detailWindow);
currentWindow.open(newWindow);
	
	
	closeButton.addEventListener("click", closeWindow);
	
	
	};





	




	