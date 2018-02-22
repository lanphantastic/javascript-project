// SOLUTION #1 - RAW JAVASCRIPT WITH ADDEVENTLISTENER ////////////
document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById('button');
  var body = document.querySelector('body');

  button.addEventListener('click',function() {
    var newColor = '#' + Math.random().toString(16).slice(2,8);
    return body.style.background = newColor;
  });
});

/////// SOLUTION #2 - JQUERY METHOD /////////////

// $(document).ready(function () {
//
// 	function randomColor() {
// 		return '#' + Math.random().toString(16).slice(2, 8);
// 	};
//
// 	$("#button").on("click", function () {
// 		$('body').css('background', randomColor());
// 	});
// });
