// SOLUTION #1 - RAW JAVASCRIPT WITH ADDEVENTLISTENER ////////////
document.addEventListener("DOMContentLoaded", function() {

  const button = document.getElementById('button');
  const body = document.querySelector('body');

  button.addEventListener('click',function() {
    let hexColorCode = Math.random().toString(16).slice(2,8);
    let newColor = `#${hexColorCode}`;
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
