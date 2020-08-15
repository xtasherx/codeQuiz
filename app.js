// DOM selection
const highScoreButton = document.querySelector(".navbar-brand");
const goBackButton = document.querySelector(".go-back");
const clearScoreButton = document.querySelector(".clear-score");
const startBtn = document.querySelector(".start-btn");
const startDiv = document.querySelector(".start-div");
const questDiv = document.querySelector(".question-div");
const initDiv = document.querySelector(".initials-div");
const scoreDiv = document.querySelector(".highscore-div");
const multChoice = document.querySelector(".mult-choice");
const scoreList = document.querySelector(".scoreList");
const scoreLis = document.querySelector(".score");
const corrIncor = document.querySelector(".right-wrong");
const quest = document.querySelector(".question");
const ansBtn = document.querySelectorAll(".ans-btn");
const tryBtn = document.querySelector(".try-again");
const initButton = document.querySelector(".init-btn");
const initInput = document.querySelector(".init-input");
const displayScore = document.querySelector(".display-score");
const timeLeft = document.querySelector(".time-left");
const qAndA = {
  questions: [
    "What method is used to convert a string into a number?",
    "JavaScript is a ______ typed language?",
    "A __________ data type is not an object and has no methods.",
    "What is the method used to create a random number between 0 and 1?",
    "A function that is passed into another function as an argument is a __________.",
  ],
  answers0: [".parseInt()", ".length", ".toUpperCase()", ".toString()"],
  answers1: ["dynamically", "statically", "cryptically", "quickly"],
  answers2: ["primitive", "value", "array", "boolean"],
  answers3: ["Math.random()", ".parseInt()", "Math.ciel()", "Math.floor()"],
  answers4: ["callback function", "pass function", "variable", "new function"],
  score: 0,
  timer: 0,
  counter: 0,
  questCount: 0,
  secondsLeft: 60,
  initials: [],
  scoreWriteOut: [],
};

/////////////////////////////////////////////
/////////////functions//////////////////////
////////////////////////////////////////////

// function to show/hide divs
function hideDivs(div, div1, div2, div3) {
  div.style.display = "block";
  if (div.style.display === "block") {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
  }
}
// pull answer lists from qAndA and display them as button text for each question
function answerGen(count, answers) {
  if (qAndA.questCount === count) {
    ansBtn.forEach((button) => {
      button.textContent = answers[qAndA.counter];
      qAndA.counter++;
      // console.log(qAndA.counter);
    });
    qAndA.counter = 0;
  }
}
// displays correct/incorrect answer and tracks score
function goodAnswer(answer) {
  if (event.target.textContent === answer) {
    corrIncor.textContent = `Correct`;
    qAndA.score++;
  } else {
    corrIncor.textContent = `Incorrect`;
    qAndA.secondsLeft = qAndA.secondsLeft - 10;
  }
}
// countdown
function setTime() {
  var timerInterval = setInterval(function () {
    qAndA.secondsLeft--;
    timeLeft.textContent = `Time Left ${qAndA.secondsLeft}`;

    if (qAndA.secondsLeft <= 0 || initDiv.style.display === "block") {
      if (initDiv.style.display === "block") {
        qAndA.secondsLeft = 60;
        timeLeft.textContent = "";
        qAndA.questCount = 0;
        clearInterval(timerInterval);
      } else {
        hideDivs(initDiv, startDiv, questDiv, scoreDiv);
        displayScore.textContent = ` You ran out of time! Your final score is: ${qAndA.score}`;
        qAndA.secondsLeft = 60;
        timeLeft.textContent = "";
        qAndA.questCount = 0;
        clearInterval(timerInterval);
      }
    }
  }, 1000);
}
/////////////////////////////////////////////////////////
////////////////Event Listeners//////////////////////////
/////////////////////////////////////////////////////////

//access highscores when link in nav is pressed
highScoreButton.addEventListener("click", () => {
  hideDivs(scoreDiv, questDiv, initDiv, startDiv);
  scoreList.style.display = "block";
});

// go back to main page from highscore
goBackButton.addEventListener("click", () => {
  hideDivs(startDiv, questDiv, initDiv, scoreDiv);
});

// start button
startBtn.addEventListener("click", () => {
  hideDivs(questDiv, startDiv, initDiv, startDiv);
  // prep first question and add 1 to questCount
  quest.innerHTML = `${qAndA.questions[qAndA.questCount]}`;
  qAndA.score = 0;
  answerGen(0, qAndA.answers0);
  qAndA.secondsLeft = 60;
  setTime();
  qAndA.questCount++;
});

// button to clear high scores
clearScoreButton.addEventListener("click", () => {
  scoreList.textContent = "";
  localStorage.clear();
  qAndA.initials = [];
  qAndA.scoreWriteOut = [];
});

multChoice.addEventListener("click", (event) => {
  event.target.classList.remove("active");
  // check for correct answers
  if (qAndA.questCount === 1) {
    goodAnswer(qAndA.answers0[0]);
  } else if (qAndA.questCount === 2) {
    goodAnswer(qAndA.answers1[0]);
  } else if (qAndA.questCount === 3) {
    goodAnswer(qAndA.answers2[0]);
  } else if (qAndA.questCount === 4) {
    goodAnswer(qAndA.answers3[0]);
  } else if (qAndA.questCount === 5) {
    goodAnswer(qAndA.answers4[0]);
  }

  // continue to populate questions as answer buttons are chosen
  quest.innerHTML = `${qAndA.questions[qAndA.questCount]}`;
  // generate the correct answer choices for each question
  answerGen(1, qAndA.answers1);
  answerGen(2, qAndA.answers2);
  answerGen(3, qAndA.answers3);
  answerGen(4, qAndA.answers4);

  qAndA.questCount++;

  // all questions have been answered move to initials div
  if (qAndA.questCount > 5) {
    hideDivs(initDiv, startDiv, questDiv, scoreDiv);
    displayScore.textContent = `Your final score is: ${qAndA.score}`;
    qAndA.questCount = 0;
    corrIncor.textContent = "";
  }
});
let writeOutKeeper = "";
initButton.addEventListener("click", () => {
  let newScoreSpot = document.createElement("li");
  newScoreSpot.textContent = `${initInput.value}: ${qAndA.score}`;
  localStorage.setItem(`${initInput.value}`, qAndA.score);
  let currentScore = localStorage.getItem(`${initInput.value}`);
  console.log(currentScore);
  scoreList.appendChild(newScoreSpot);
  hideDivs(scoreDiv, questDiv, initDiv, startDiv);
  scoreList.style.display = "block";
  // needs to store the score to rank high scores
});
