alert("Lets play!");

const Rock = document.querySelector(".RockBtn");
const Paper = document.querySelector(".PaperBtn");
const Scissor = document.querySelector(".ScissorBtn");

let computerHand;
let playerHand;
let playerResult;

Rock.onclick = function(){
  const rockValue = Math.random();
  console.log(rockValue);

  playerHand = "Rock";

  if(rockValue >= 0 && rockValue < 1/3){
    computerHand = "Rock";
    playerResult = "draw!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
  else if (rockValue >= 1/3 && rockValue < 2/3) {
    computerHand = "Paper";
    playerResult = "lose!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  } else {
    computerHand = "Scissor";
    playerResult = "win!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
};

Paper.onclick = function(){
  const paperValue = Math.random();
  console.log(paperValue);

  playerHand = "Paper";

  if(paperValue >= 0 && paperValue < 1/3){
    computerHand = "Rock";
    playerResult = "win!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
  else if (paperValue >= 1/3 && paperValue < 2/3) {
    computerHand = "Paper";
    playerResult = "draw!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  } else {
    computerHand = "Scissor";
    playerResult = "lose!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
};

Scissor.onclick = function(){
  const scissorValue = Math.random();
  console.log(scissorValue);

  playerHand = "Scissor";

  if(scissorValue >= 0 && scissorValue < 1/3){
    computerHand = "Rock";
    playerResult = "lose!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
  else if (scissorValue >= 1/3 && scissorValue < 2/3) {
    computerHand = "Paper";
    playerResult = "win!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  } else {
    computerHand = "Scissor";
    playerResult = "draw!";
    alert(`Player selected ${playerHand}, Computer selected ${computerHand}. Hence Player ${playerResult}`);
  }
};

