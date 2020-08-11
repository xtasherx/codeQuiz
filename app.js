// TO DO:
// add handles for index.html
const highScoreButton = document.querySelector(".navbar-brand");
const goBackButton = document.querySelector(".go-back");
const clearScoreButton = document.querySelector(".clear-score");
const startBtn = document.querySelector(".start-btn");
const startDiv = document.querySelector(".start-div");
const questDiv = document.querySelector(".question-div");
const initDiv = document.querySelector(".initials-div");
const scoreDiv = document.querySelector(".highscore-div");
const multChoiceOl = document.querySelector(".mult-choice");
const scoreList = document.querySelector(".scoreList")
const scoreLis = document.querySelector(".score");
const corrIncor = document.querySelector(".right-wrong");
let score = 0;
// function to show/hide divs
function hideDivs(div, div1, div2, div3) {
  div.style.display = "block";
  if (div.style.display === "block") {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
  }
}

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
});
// button to clear high scores 
clearScoreButton.addEventListener("click", ()=>{
  scoreLis.textContent = '';
  // also needs to clear from localStorage 
})


multChoiceOl.addEventListener("click",(event)=>{
  if (event.target.matches = "button") {
    console.log(event.target.textContent);
  }
  

  // if (event.target.textContent === answer) {
  //   corrIncor.textContent = `Correct`;
  //   score ++;
  // } else {
  //   corrIncor.textContent = `Incorrect`;
  //   subtract time from timer 
  // }
});


// ------needs to start countdown and display it in nav
// when a wrong answer is entered subtract time
// generate a new question each time an answer is chosen
// ------replace question textContent and button textContent
// event delegation for the ol containing buttons use event.target to find which choice was made
// ------track correct/incorrect answer in a a variable and log it to the page
// after last question create input to add initals
// display high score
// ------ navbar should be set to display none at this point
// ------create li in scoreList ul and add initals and score as text content
// highest score needs to be in the top li position
// clear highscores button should clear scoreList Ul
