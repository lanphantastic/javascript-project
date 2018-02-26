document.addEventListener("DOMContentLoaded", function() {

  // REFRESH INPUT
  document.getElementById('input').value = "";

  // START OF GENERATING NEW TITLE FUNCTION
  function generateTitle() {

    // STEP 1: DECLARE VARIABLES
    var input = document.getElementById('input');
    var keyword = input.value;

    // STEP 2: ARRAY OF NEW TITLES
    var newTitle = document.getElementById('generatedTitle');
    var array = [
        "5 Reasons You Must Consider ",
        "20 Ways to Change Your Life with ",
        "Why You Must Think About ",
        "Top 15 Resources for ",
        "Learn about ",
        "Read about ",
        "For and Against ",
        "Crazy Case Study on ",
        "Read our Case Study about ",
        "What You Must Know about ",
        "What's Important about ",
        "Our Roundup of The Best ",
        "10 Facts about ",
        "The Truth about ",
        "The Good, the Bad and the Ugly on ",
        "How to Find the Perfect ",
        "OMG! The Must Know Facts about ",
        "You Won't Believe What We Learned about "
    ];

    // STEP 3: RANDOMLY GENERATE A NEW TITLE WITH INPUT
    var randomizedTitle = array[Math.floor(Math.random() * array.length)];
    newTitle.innerHTML = randomizedTitle + keyword;
  };
  // END OF FUNCTION

  // CALL FUNCTION ON CLICK EVENT HANDLER
  var kwSubmit = document.getElementById('kw-submit');
  kwSubmit.addEventListener('click', generateTitle);

});
