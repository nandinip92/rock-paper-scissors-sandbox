const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

//Solution-1 -My Initial solution
//For this solution to work properly <p class=outcome id="winner"></p>
//ie., line29 must be uncommented

/*
const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory
  imageForMoveOne = `images/${moveOne}.png`;
  imageForMoveTwo = `images/${moveTwo}.png`;

  document.getElementById("player-one-move__img").src = imageForMoveOne;
  document.getElementById("player-one-move__name").textContent = moveOne;

  document.getElementById("player-two-move__img").src = imageForMoveTwo;
  document.getElementById("player-two-move__name").textContent = moveTwo;

  document.getElementById("winner").textContent = outcome;
};
*/

//Solution-2
const updateDOM = (moveOne, moveTwo, outcome) => {
  // Getting elements from the DOM
  // const playerOneMoveName = document.querySelectorAll(
  //   "#player-one-move__name"
  // )[0];
  const playerOneMoveName = document.getElementById("player-one-move__name");
  const playerOneMoveImgContainer = document.getElementById(
    "player-one-move__img"
  );
  const playerTwoMoveName = document.getElementById("player-two-move__name");
  const playerTwoMoveImgContainer = document.getElementById(
    "player-two-move__img"
  );

  // Update elements - set attribute and update text content
  playerOneMoveName.textContent = moveOne;
  playerOneMoveImgContainer.setAttribute("src", `./images/${moveOne}.png`);
  playerTwoMoveName.textContent = moveTwo;
  playerTwoMoveImgContainer.setAttribute("src", `./images/${moveTwo}.png`);

  // Creating new elements
  const outcomeCopy = document.createElement("p");
  outcomeCopy.textContent = outcome;
  outcomeCopy.setAttribute("id", "outcome");
  outcomeCopy.classList.add("outcome");
  document.body.appendChild(outcomeCopy);
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
