/**
 * @author Denise Souza
 * VFW1412
 * Project 4
 */

var pWidth = Ti.Platform.displayCaps.platformWidth;
var currentWindow = Ti.UI.currentWindow;

var newWindow = Ti.UI.createWindow({
		title: "Energy No Limit Gallery",
		backgroundColor: "#fff"
	});


	var view = Ti.UI.createView({
		backgroundColor: "#BDBDBD",
		top: 90,
		width: pWidth,
		height: 300
	});	

var textArea1 = Ti.UI.createTextArea({
	borderWidth: 1,
	borderColor: "BDBDBD",
	borderRadius: 5,
	color: "000",
	font:{fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	returnKeyType: Ti.UI.RETURNKEY_GO,
	textAlign: 'left',
	value: 'Name',
	top: 45,
	width: 300,
	height: 40
});
	
var textArea2 = Ti.UI.createTextArea({
	borderWidth: 1,
	borderColor: "BDBDBD",
	borderRadius: 5,
	color: "000",
	font:{fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	returnKeyType: Ti.UI.RETURNKEY_GO,
	textAlign: 'left',
	value: 'Address',
	top: textArea1.top*2,
	width: 300,
	height: 40
});

var textArea3 = Ti.UI.createTextArea({
	borderWidth: 1,
	borderColor: "BDBDBD",
	borderRadius: 5,
	color: "000",
	font:{fontSize: 14, fontFamily:"Helvetica", fontWeight: "bold"},
	returnKeyType: Ti.UI.RETURNKEY_GO,
	textAlign: 'left',
	value: 'Email',
	top: textArea2.top*1.5,
	width: 300,
	height: 40
});

//Adding text input fields

currentWindow.add(textArea1, textArea2, textArea3);
currentWindow.open(newWindow);
