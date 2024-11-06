import { Player, GameBoard } from "./battleScript";
import './style.css';

const player1 = new Player('Player 1', true);
const computer = new Player('Computer', true);

const tdElements = document.querySelectorAll('td');
const shipColors = {
  Carrier: 'Cyan',
  BattleShip: 'Blue',
  Cruiser: 'Gray',
  Submarine: 'Purple',
  Destroyer: 'Orange'
};

function colorShip(ship, playerPrefix) {
  const startRow = ship.coord.charCodeAt(0) - 65;
  const startCol = parseInt(ship.coord.substring(1)) - 1;
  const shipLength = ship.ship.length;

  for (let i = 0; i < shipLength; i++) {
    let row, col;
    if (ship.orientation === 'vertical') {
      row = startRow + i;
      col = startCol;
    } else {
      row = startRow;
      col = startCol + i;
    }

    const cellId = `${playerPrefix}-${String.fromCharCode(row + 65) + (col + 1)}`;
    const cell = document.getElementById(cellId);

    if (cell) {
      cell.style.backgroundColor = shipColors[ship.ship.type];
    } 
  }
}

function getRandomCoordinates() {
  const row = String.fromCharCode(65 + Math.floor(Math.random() * 10));
  const col = Math.floor(Math.random() * 10) + 1;
  return `${row}${col}`;
}

function computerAttack(player) {
  let cellId, cell;
  let attempts = 0;
  do {
    cellId = getRandomCoordinates();
    cell = document.getElementById(`P1-${cellId}`);
    attempts++;
  } while(cell && (cell.innerText === "H" || cell.innerText === "X"));

  if(attempts > 10) {
    console.log('COmputer has exhausted attacks');
    return;
  }

  player.board.receiveAttack(cellId);

  const row = cellId[0].charCodeAt(0) - 65;
  const col = parseInt(cellId.slice(1)) - 1;
  const isHit = player.board.board[row][col] === "H";

  setColorBasedOnHit(isHit, cell)
}

function playerAttack(computerPlayer, cellId) {
  const cell = document.getElementById(`P2-${cellId}`);
  if (!cell) { // Handle invalid cell selection by player
    console.error("Invalid cell selected by player!");
    return;
  }

  computerPlayer.board.receiveAttack(cellId);
  const isHit = computerPlayer.board.board[cellId[0].charCodeAt(0) - 65][parseInt(cellId.slice(1)) - 1] === "H";
  setColorBasedOnHit(isHit, cell);
}

function isGameOver(player) {
  return player.board.isAllSunk();
}

function setColorBasedOnHit(isHit, cell) {
  cell.innerText = isHit ? "H" : "X";
  cell.style.color = isHit ? "green" : "red";
}

function attachAttackListeners(player1, computerPlayer, playerPrefix, computerPrefix) {
  const playerCells = document.querySelectorAll(`td[id^="${computerPrefix}"]`);

  playerCells.forEach(cell => {
    cell.addEventListener('click', () => {
      let cellId = cell.id.replace(`${computerPrefix}`, "");

      if (cell.innerText === "H" || cell.innerText === "X") {
        console.log("Cell already attacked. Please choose another one.");
        return;
      }

      playerAttack(computerPlayer, cellId);

      // Check for game over after player's attack
      // if (computerPlayer.board.isAllSunk()) {
      //   console.log("You Win!");
      //   return;  // End the game loop
      // }

      if (isGameOver(computerPlayer)) {
        alert('all');
        console.log(`you lose!`);
        const allCells = document.querySelectorAll('td');
        allCells.forEach(cell => cell.disabled = true);
        return;
      }

      setTimeout(() => {
        computerAttack(player1); // Attack player after a short delay

        // Check for game over after computer's attack
        if (isGameOver(player1)) {
          console.log(`${player1.name} Wins!`);
          const allCells = document.querySelectorAll('td');
          allCells.forEach(cell => cell.disabled = true);
        }
      }, 500);
      
    });
  });
}

// Attach event listeners for each player
attachAttackListeners(player1, computer, "P1-", "P2-");

player1.board.fleetItems.forEach(ship => colorShip(ship, "P1"));


computer.board.fleetItems.forEach(ship => colorShip(ship, "P2"));