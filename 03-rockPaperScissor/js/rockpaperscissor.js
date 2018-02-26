document.addEventListener('DOMContentLoaded', function() {

  // DECLARE VARIABLES
  var rock = "images/rock.png";
	var paper = "images/paper.png";
	var scissors = "images/scissor.png";
	var hands = {
    rock: rock,
    paper: paper,
    scissor: scissor
  };
	var choices = ['rock', 'paper', 'scissor'];
	var userChoice, compChoice;

  // CLICK BUTTON
  var button = document.getElementsByClassName('button');
  button.addEventListener('click', start);

	function start() {
    var button = document.getElementsByClassName('button');
    button.addEventListener('unclick', function() {

      userChoice = this.id;
      compChoice = choices[Math.floor(Math.random()*3)];

      var result = document.getElementsByClassName('result');
      var fist = document.getElementsByClassName('fist');

      result.hide();
      fist.show();
    });
	};

});
