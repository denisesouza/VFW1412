/**
 * @author Denise Souza
 */

var songs = ["Wheels on the Bus", "Twinkle Twinkle Little Star", "Humpty Dumpty", "Itsy Bitsy Spider", "Baa Baa Black Sheep", "Ring around the Rosie"];
var length = myArray.length;
var i = -1;
var margin = 20;


//function for displaying text by clicking the next button
var displayNext = function(){
	if(i === length -1){
		i = -1;
	};
	mainMessage.text = myArray[i];
};



//function for displaying text by clicking the previous button
var displayPrevious = function(){
	if(i === length -1){
		i = -1;
	};
	mainMessage.text = myArray[i];
};


//main code
nextButton.addEventListener("click", displayNext);
previousButton.addEventListener("click", displayPrevious);