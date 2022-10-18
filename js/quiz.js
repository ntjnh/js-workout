var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var number = document.getElementById("number");
var options = document.getElementsByClassName("option");
var next = document.getElementById("next");
var finish = document.getElementById("finish");

var results = document.getElementById("results");
var replay = document.getElementById("replay");
var displayScore = document.getElementById("score");

// Score keeper
var score = 0;

// Loop through the places array

generateQuestion(brazil);

  // Function to generate a question
    function generateQuestion(place) {
    // Display the question in the h2
      question.textContent = questionAsk(place);
    // Display question number in p
      number.textContent = questionNumber(place);
    // Display the four choices in the ul as lis
      retrieveChoices(place);
      answerOptions(place);
      // When the correct answer is clicked, the corresponding li should turn green (.list-group-item-success)
      answerSelection(place);
      // When the incorrect answer is clicked, the corresponding li should turn red (.list-group-item-danger) and the correct one should turn green (.list-group-item-success)
    }


    var position = 0;
    next.addEventListener("click", function() {
      generateQuestion(places[position += 1]);
      if (position === 14) {
        next.style.display = "none";
        finish.style.display = "inline";
        finish.addEventListener("click", function() {
          displayResults();
        });
        // replay.addEventListener("click", function() {
        //   position = -1;
        //   generateQuestion(places[position += 1]);
        //   next.style.display = "inline";
        //   finish.style.display = "none";
        //   if (position === 14) {
        //     displayResults();
        //   }
        // });
      }
    });



  // Button (#next) to move on the the next question

    // Change text to "finish" on the last question.

// Show result at the end: e.g. 7 out of 10
    // displayResults();


// FUNCTIONS

// Check if country or not and then word question accordingly
function questionAsk(place) {
  if (place.isCountry) {
    return "What is the capital city of " + place.country + "?";
  } else {
    return place.capital + " is the capital city of which country?";
  }
}

// Get the array position and add 1 (to be used as question number)
function questionNumber(place) {
  return places.indexOf(place) + 1;
}

// Put the options into an array, check if country or not then get capital or country
function retrieveChoices(place) {
  var choices = [];
  if (place.isCountry) {
    choices.push(place.capital);
  } else {
    choices.push(place.country);
  }
  choices.push(place.option1, place.option2, place.option3);
  return choices;
}

// Get the correct answer and the other options and put them into the list items
function answerOptions(place) {
  for (var i = 0; i < options.length; i++) {
    options[i].textContent = retrieveChoices(place)[i];
  }
}

// Change the state of the option when it is clicked on
function answerSelection(place) {

  var handler = function() {
    if (this.textContent === place.capital) {
      this.classList.add("list-group-item-success");
      score++;
    } else {
      this.classList.add("list-group-item-danger");
      options[0].classList.add("list-group-item-success");
    }
    console.log("Current score: " + score);
  }

  for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", handler);

    setTimeout(function() {
      options[i].removeEventListener("click", handler);
      console.log("event listener removed");
    }, 3000);


  }
}

// Move on to next question by clicking button
function nextQuestion() {
  next.addEventListener("click", function() {
    generateQuestion(place);
  });
}

function displayResults() {
  quiz.style.display = "none";
  results.style.display = "block";
  displayScore.textContent = score;
}
