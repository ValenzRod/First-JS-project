function computerPlay() {
  let comResult = " ";
  let num = Math.floor(Math.random()*3);
  if (num === 0) {
    comResult = "Rock"
  } else if (num === 1) {
    comResult = "Paper"
  } else {
    comResult = "Scissors"
  }
 //console.log(comResult);
return comResult;
}

function playRound(playerSelection,computerSelection) {
  let results = " ";
  playerSelection = prompt("Enter Rock, Paper or Scissors")
  computerSelection = computerPlay();
//console.log(computerSelection);
  if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
      results = "It is a tie!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
      results = "You lose! Paper beats Rock!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
      results = "You win! Rock beats scissors";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
      results = "You win! Paper beats rock!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
      results = "It is a tie!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
      results = "You lose! Scissors beat paper!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
      results = "You lose! Rock beats scissors!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
      results = "You win! Scissors beats paper!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
      results = "It is a tie!";
    alert('Your selected '+playerSelection+' and the computer selected '+computerSelection+". This means: "+results)
  }

}

function game(amount) {
for (let i = 0; i < 5; i++) {
  let gameNumber = i+1;    
  alert("Game #"+gameNumber);
  playRound();
}
}