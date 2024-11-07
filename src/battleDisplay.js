import { Player, GameBoard } from "./battleScript";
import './style.css';

const player1 = new Player('Player 1', true);
const computer = new Player('Computer', true);
let gameOver = false;

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

  setColorBasedOnHit(isHit, cell);

  setTimeout(() => {
    document.querySelector("#playerTurn").innerText = "Your turn";
  }, 1000);
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
      if (gameOver) {
        console.log("Game over. No further moves allowed.");
        return;  // Exit if game is already over
      }

      let cellId = cell.id.replace(`${computerPrefix}`, "");

      if (cell.innerText === "H" || cell.innerText === "X") {
        console.log("Cell already attacked. Please choose another one.");
        return;
      }

      playerAttack(computerPlayer, cellId);
      // document.querySelector("#playerTurn").innerText = "Your turn";

      if (isGameOver(computerPlayer)) {
        console.log(`you win!`);
        gameOver = true;
        disableAllCells();
        return;
      }

      setTimeout(() => {
        document.querySelector("#playerTurn").innerText = "computer turn"
        computerAttack(player1); 
        
        if (isGameOver(player1)) {
          console.log(`${player1.name} lose!`);
          gameOver = true;
          disableAllCells();
        }
      }, 1000);
      
    });
  });
}

function disableAllCells() {
  const allCells = document.querySelectorAll('td');
  allCells.forEach(cell => cell.style.pointerEvents = 'none'); // Disable clicks on all cells
}

function enableAllCells() {
  const allCells = document.querySelectorAll('td');
  allCells.forEach(cell => {
    cell.style.pointerEvents = 'auto';
    cell.classList.remove('disabled');
  });
}

function createTable(playerId) {
  // Define table elements
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create the header row with column numbers
  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('td')); // Empty cell at the top-left
  for (let i = 1; i <= 10; i++) {
      const cell = document.createElement('td');
      cell.textContent = i;
      headerRow.appendChild(cell);
  }
  thead.appendChild(headerRow);

  // Create rows for each letter (A to J)
  const rows = 'ABCDEFGHIJ';
  for (let i = 0; i < rows.length; i++) {
      const row = document.createElement('tr');
      
      // Row header with letter
      const rowHeader = document.createElement('th');
      rowHeader.scope = 'row';
      rowHeader.textContent = rows[i];
      row.appendChild(rowHeader);

      // Cells with IDs
      for (let j = 1; j <= 10; j++) {
          const cell = document.createElement('td');
          cell.id = `${playerId}-${rows[i]}${j}`;
          row.appendChild(cell);
      }
      tbody.appendChild(row);
  }

  // Assemble the table
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

const p2pButton = document.querySelector("#btn-2");
const startGameBtn = document.querySelector("#startGame");

p2pButton.addEventListener('click', startP2PGame);
startGameBtn.addEventListener('click', () => {
  document.querySelector("#playerTurn").innerText = "Your turn";
  enableAllCells();
  startGameBtn.style.display = "none";
});

function startP2PGame() {
  const mainElement = document.querySelector("main");
  const welcomePage = document.querySelector(".welcome-page");

  mainElement.style.display = "block";
  welcomePage.style.display = "none";

  disableAllCells();
}

// Assuming you have elements with classes "main-player" and "automated-player"
document.querySelector('.main-player').appendChild(createTable('P1'));
document.querySelector('.automated-player').appendChild(createTable('P2'));


attachAttackListeners(player1, computer, "P1-", "P2-");

player1.board.fleetItems.forEach(ship => colorShip(ship, "P1"));


computer.board.fleetItems.forEach(ship => colorShip(ship, "P2"));