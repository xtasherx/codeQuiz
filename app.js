// TO DO:
// add handles for index.html
// create a function for hiding and showing divs -- only one should be visible ever at a time
const highScoreButton = document.querySelector(".navbar-brand");
const goBackButton = document.querySelector(".go-back");
const clearScoreButton = document.querySelector(".clear-score");
const startBtn = document.querySelector(".start-btn");
const startDiv = document.querySelector(".start-div");
const questDiv = document.querySelector(".question-div");
const initDiv = document.querySelector(".initial-div");
const scoreDiv = document.querySelector(".highscore-div");

// need to access highscores when link in nav is pressed
highScoreButton.addEventListener("click", () => {
  startDiv.style.display = "none";
  scoreDiv.style.display = "block";
});
// start button
startBtn.addEventListener("click", () => {
  // ------needs to hide .start-div
  startDiv.style.display = "none";
  // ------needs to display .questions-div
  questDiv.style.display = "block";
});

// ------needs to start countdown and display it in nav
// generate a new question each time an answer is chosen
// ------replace question textContent and button textContent
// event delegation for the ol containing buttons use event.target to find which choice was made
// ------track correct/incorrect answer in a a variable and log it to the page
// after last question create input to add initals
// display high score
// ------ navbar should be set to display none at this point
// ------create li in scoreList ul and add initals and score as text content
// highest score needs to be in the top li position
// go back button should restart quiz
goBackButton.addEventListener("click", () => {
  scoreDiv.style.display = "none";
  startDiv.style.display = "block";
});
// clear highscores button should clear scoreList Ul
