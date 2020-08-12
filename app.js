// add handles for index.html
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
const initButton = document.querySelector(".init-btn");
const initInput = document.querySelector(".init-input");
const displayScore = document.querySelector(".display-score");

const qAndA = {
  questions: [
    "What is your name?",
    "What is your quest?",
    "What is your favorite color?",
    "What is the air-speed velocity of an Unladen Swallow",
    "This isn't even a question I just need something.",
  ],
  answers0: ["Tasha", "To find the holy grail.", "Green", "placeholder"],
  answers1: ["your mom", "To find the holy grail.", "Green", "placeholder"],
  answers2: [
    "your moms mom",
    "To find the holy grail.",
    "Green",
    "placeholder",
  ],
  answers3: ["dude", "To find the holy grail.", "Green", "placeholder"],
  answers4: ["the dude", "To find the holy grail.", "Green", "placeholder"],
  score: 0,
  timer: 0,
  counter: 0,
  questCount: 0,
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
/////////////////////////////////////////////////////////
////////////////Event Listeners//////////////////////////
/////////////////////////////////////////////////////////

// need to access highscores when link in nav is pressed
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
  answerGen(0, qAndA.answers0);
  qAndA.questCount++;
});
// button to clear high scores
clearScoreButton.addEventListener("click", () => {
  scoreList.textContent = "";
  // also needs to clear from localStorage
});

multChoice.addEventListener("click", (event) => {
  if ((event.target.matches = "button")) {
    console.log(event.target.textContent);
    console.log(qAndA.counter);
  }
  // continue to populate questions as answer buttons are chosen
  quest.innerHTML = `${qAndA.questions[qAndA.questCount]}`;
  // generate the correct answer choices for each question
  answerGen(1, qAndA.answers1);
  answerGen(2, qAndA.answers2);
  answerGen(3, qAndA.answers3);
  answerGen(4, qAndA.answers4);
  if (condition) {
  }

  qAndA.questCount++;

  if (event.target.textContent === "Answer 1") {
    corrIncor.textContent = `Correct`;
    qAndA.score++;
  } else {
    corrIncor.textContent = `Incorrect`;
    // subtract time from timer
  }
  // all questions have been answered move to initials div
  if (qAndA.questCount > 5) {
    hideDivs(initDiv, startDiv, questDiv, scoreDiv);
    displayScore.textContent = `Your final score is: ${qAndA.score}`;
    qAndA.score = 0;
    qAndA.questCount = 0;
    corrIncor.textContent = "";
  }
});

initButton.addEventListener("click", () => {
  let newScoreSpot = document.createElement("li");
  newScoreSpot.textContent = initInput.value;
  scoreList.appendChild(newScoreSpot);
  hideDivs(scoreDiv, questDiv, initDiv, startDiv);
  scoreList.style.display = "block";
  // needs to store the score to rank high scores
});
// ------needs to start countdown and display it in nav
// when a wrong answer is entered subtract time
// generate a new question each time an answer is chosen
// ------replace questiols -on should clear scoreList Ul
