const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const number = document.getElementById("number");
const options = document.getElementsByClassName("option");
const next = document.getElementById("next");
const finish = document.getElementById("finish");

const results = document.getElementById("results");
const replay = document.getElementById("replay");
const displayScore = document.getElementById("score");

// Score keeper
let score = 0;

// Loop through the places array

generateQuestion(brazil);

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


  let position = 0;
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
  const choices = [];
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
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = retrieveChoices(place)[i];
  }
}

// Change the state of the option when it is clicked on
function answerSelection(place) {

  const handler = function() {
    if (this.textContent === place.capital) {
      this.classList.add("list-group-item-success");
      score++;
    } else {
      this.classList.add("list-group-item-danger");
      options[0].classList.add("list-group-item-success");
    }
    console.log("Current score: " + score);
  }

  for (let i = 0; i < options.length; i++) {
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
