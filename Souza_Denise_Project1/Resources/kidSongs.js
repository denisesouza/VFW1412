/**
 * @author Denise Souza
 * * VFW1412
 * Project 1
 */

var songs = ["Wheels on the Bus", "Twinkle Twinkle Little Star", "Humpty Dumpty", "Itsy Bitsy Spider", "Baa Baa Black Sheep", "Ring around the Rosie"];
var length = songs.length;
var i = -1;



//function for displaying text by clicking the next button
var displayNext = function(){
	if(i === length -1){
		i = -1;
	};
i++;
	mainMessage.text = songs[i];
};



//function for displaying text by clicking the previous button
var displayPrevious = function(){
	if(i === 0){
		i = length;
	};
i--;	
	
	mainMessage.text = songs[i];
};


//main code
nextButton.addEventListener("click", displayNext);
previousButton.addEventListener("click", displayPrevious);