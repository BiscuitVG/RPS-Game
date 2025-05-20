//alert("Lets play!");

const Rock = document.querySelector(".RockBtn");
const Paper = document.querySelector(".PaperBtn");
const Scissor = document.querySelector(".ScissorBtn");
const Reset = document.querySelector(".ResetBtn");
const DisplayScore = document.querySelector(".scoreText");

// let computerHand;
//let playerHand;
//let playerResult;

const pickComputerMove = function () {
  let computerHand;
  const pickRate = Math.random();
  console.log(pickRate);

  if (pickRate >= 0 && pickRate < 1 / 3) {
    computerHand = "Rock";
  } else if (pickRate >= 1 / 3 && pickRate < 2 / 3) {
    computerHand = "Paper";
  } else {
    computerHand = "Scissor";
  }
  return computerHand;
};

let score = JSON.parse(localStorage.getItem("score"))
|| {
  wins: 0,
  losses: 0,
  ties: 0
};

//updateScoreElement();

const playGame = function (playerMove) {
  let computerMove = pickComputerMove();
  let playerResult;
  console.log(computerMove);

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      playerResult = "tie";
    } else if (computerMove === "Paper") {
      playerResult = "lose";
    } else {
      playerResult = "win";
    }

  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      playerResult = "win";
    } else if (computerMove === "Paper") {
      playerResult = "tie";
    } else {
      playerResult = "lose";
    }

  } else {
    if (computerMove === "Rock") {
      playerResult = "lose";
    } else if (computerMove === "Paper") {
      playerResult = "win";
    } else {
      playerResult = "tie";
    }
  }

  //update score
  if (playerResult === "win"){
    score.wins += 1;
  }
  else if (playerResult === "lose"){
    score.losses += 1;
  }
  else {
    score.ties += 1;
  }

  updateScoreElement();

  //local storage
  localStorage.setItem("score", JSON.stringify(score));

  alert(
      `The Player picked ${playerMove}. The Computer picked ${computerMove}, Hence Player ${playerResult}! \nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
};

const updateScoreElement = function(){
  DisplayScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

Rock.onclick = function(){
  playGame("Rock");
};

Paper.onclick = function(){
  playGame("Paper");
};

Scissor.onclick = function(){
  playGame("Scissor");
};

Reset.onclick = function(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  alert(`Score has been reset. Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
};