document.addEventListener('DOMContentLoaded',function() {

  // DECLARE VARIABLES
	var rock = "images/rock.png";
	var paper = "images/paper.png";
	var scissors = "images/scissors.png";
	var hands = {
    rock: rock,
    paper: paper,
    scissors: scissors
  };
	var choices = ['rock', 'paper', 'scissors'];
	var userChoice, compChoice;

  // MAKE EACH BUTTON CLICKABLE
  // grab all DOM object with the class 'button'
  var button = document.getElementsByClassName('button');
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', start);
  }

	// $('.button').on('click', start);
  //
	function start() {
		userChoice = this.id;
    console.log(`You chose ${userChoice}`);
		compChoice = choices[Math.floor(Math.random()*3)];
    console.log(`computer picked ${compChoice}`);

    var result = document.getElementsByClassName('result');
    var fist = document.getElementsByClassName('fist');

	};

});
