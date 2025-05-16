alert("Lets play!");

const Rock = document.querySelector(".RockBtn");
const Paper = document.querySelector(".PaperBtn");
const Scissor = document.querySelector(".ScissorBtn");

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
    alert(
      `The Player picked Rock. The Computer picked ${computerMove}, Hence Player ${playerResult}!`
    );

  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      playerResult = "win";
    } else if (computerMove === "Paper") {
      playerResult = "tie";
    } else {
      playerResult = "lose";
    }
    alert(
      `The Player picked Paper. The Computer picked ${computerMove}, Hence Player ${playerResult}!`
    );

  } else {
    if (computerMove === "Rock") {
      playerResult = "lose";
    } else if (computerMove === "Paper") {
      playerResult = "win";
    } else {
      playerResult = "tie";
    }
    alert(
      `The Player picked Scissor. The Computer picked ${computerMove}, Hence Player ${playerResult}!`
    );
  }
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