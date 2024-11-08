import { Player, GameBoard } from "./battleScript";
import './style.css';

// Global variables
let gameOver = false;
let currentTurn = "player1";  
let player1, player2, computer;

// Ship color mapping
const shipColors = {
  Carrier: 'Cyan',
  BattleShip: 'Blue',
  Cruiser: 'Gray',
  Submarine: 'Purple',
  Destroyer: 'Orange'
};

// Event Listeners
document.getElementById("btn-1").addEventListener("click", () => startGame("PvP"));
document.getElementById("btn-2").addEventListener("click", () => startGame("PvB"));
document.getElementById("startGame").addEventListener("click", startPlaying);

// Main game start function
function startGame(mode) {
  document.querySelector("main").style.display = "block";
  document.querySelector(".welcome-page").style.display = "none";

  player1 = new Player('Player 1', false);
  if (mode === "PvP") {
    player2 = new Player('Player 2', true);
    initializeGame("P1", "P2", attachAttackListenersPvP);
  } else {
    computer = new Player('Computer', true);
    initializeGame("P1", "computer", attachAttackListenersPvB);
    enableDragAndDropForPlayer1();
  }
  console.log(player1.board.ships)
}

// Initialize boards and color ships
function initializeGame(playerPrefix1, playerPrefix2, attachListeners) {

  createAndAppendTable('.main-player', playerPrefix1);
  createAndAppendTable('.automated-player', playerPrefix2);

  if (computer) colorShip(player1.board.fleetItems, playerPrefix1);

  attachListeners();
  disableAllCells();
}

// Start playing and enable cells
function startPlaying() {
  if (player1.board.ships.length < 5) {
    alert('Place all your ships before starting the game!');
    return;
  }

  enableAllCells();
  document.querySelector("#startGame").style.display = "none";
  document.querySelector("#playerTurn").innerText = "Player 1's turn";
}


// Color ships on the board
function colorShip(fleetItems, playerPrefix) {
  fleetItems.forEach(ship => {
    const { coord, orientation, ship: { length, type } } = ship;
    const startRow = coord.charCodeAt(0) - 65;
    const startCol = parseInt(coord.substring(1)) - 1;

    for (let i = 0; i < length; i++) {
      const row = orientation === 'vertical' ? startRow + i : startRow;
      const col = orientation === 'vertical' ? startCol : startCol + i;
      const cell = document.getElementById(`${playerPrefix}-${String.fromCharCode(row + 65) + (col + 1)}`);
      if (cell) cell.style.backgroundColor = shipColors[type];
    }
  });
}

function attachAttackListenersPvP() {
  // Add event listeners for Player 2's board
  document.querySelectorAll(`td[id^="P2-"]`).forEach(cell => 
    cell.addEventListener('click', () => handlePvPAttack(cell, player2, "player1", "Player 1 wins!"))
  );

  // Add event listeners for Player 1's board
  document.querySelectorAll(`td[id^="P1-"]`).forEach(cell => 
    cell.addEventListener('click', () => handlePvPAttack(cell, player1, "player2", "Player 2 wins!"))
  );
}

// PvP Mode attack listeners
function handlePvPAttack(cell, defender, turn, winText) {
  if (gameOver || currentTurn !== turn) return; // If the game is over or it's not the player's turn, do nothing
  if (cell.innerText === "H" || cell.innerText === "X") return; // Prevent attacking already hit cells

  // Perform attack
  playerAttack(defender, cell.id.split("-")[1], cell);

  // Switch turns: from "player1" to "player2" and vice versa
  currentTurn = currentTurn === "player1" ? "player2" : "player1";
  
  // Update the turn status and check if the game is over
  updateTurnStatus(defender, winText);
}
// PvB Mode attack listeners
function attachAttackListenersPvB() {
  document.querySelectorAll(`td[id^="P2-"]`).forEach(cell => 
    cell.addEventListener('click', () => {
      if (cell.innerText === "H" || cell.innerText === "X") return;

      playerAttack(computer, cell.id.replace("P2-", ""), cell);
      if (!isGameOver(computer)) {
        currentTurn = "computer";
        document.querySelector("#playerTurn").innerText = "Computer's turn";
        setTimeout(() => computerAttack(player1), 1000);
      }
    })
  );
}

// Attack logic for both modes
function playerAttack(opponent, cellId, cell) {
  opponent.board.receiveAttack(cellId);
  const isHit = opponent.board.board[cellId[0].charCodeAt(0) - 65][parseInt(cellId.slice(1)) - 1] === "H";
  cell.innerText = isHit ? "H" : "X";
  cell.style.color = isHit ? "green" : "red";
}

function computerAttack(player) {
  if (gameOver || currentTurn !== "computer") return;

  let cellId, cell;
  do {
    cellId = getRandomCoordinates();
    cell = document.getElementById(`P1-${cellId}`);
  } while (cell && (cell.innerText === "H" || cell.innerText === "X"));

  playerAttack(player, cellId, cell);
  updateTurnStatus(player, "Computer wins!");
}

// Utility functions
function getRandomCoordinates() { 
  const row = String.fromCharCode(65 + Math.floor(Math.random() * 10));
  const col = Math.floor(Math.random() * 10) + 1;
  return `${row}${col}`;
}

function updateTurnStatus(defender, winText) {
  if (isGameOver(defender)) {
    gameOver = true;
    document.querySelector("#playerTurn").innerText = winText;
    disableAllCells();
  } else {
    if(currentTurn == "computer") {
      document.querySelector("#playerTurn").innerText = "Player 1's turn";
      return;
    }
    document.querySelector("#playerTurn").innerText = `${currentTurn === "player1" ? "Player 1" : "Player 2"}'s turn`;
  }
}


function disableAllCells() {
  document.querySelectorAll('td').forEach(cell => cell.style.pointerEvents = 'none');
}

function enableAllCells() {
  document.querySelectorAll('td').forEach(cell => cell.style.pointerEvents = 'auto');
}

function createAndAppendTable(parentSelector, playerId) {
  document.querySelector(parentSelector).appendChild(createTable(playerId));
}

function createTable(playerId) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  headerRow.appendChild(document.createElement('td'));
  for (let i = 1; i <= 10; i++) {
    const cell = document.createElement('td');
    cell.textContent = i;
    headerRow.appendChild(cell);
  }
  table.appendChild(headerRow);

  const rows = 'ABCDEFGHIJ';
  rows.split('').forEach((row, i) => {
    const rowElement = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.scope = 'row';
    rowHeader.textContent = row;
    rowElement.appendChild(rowHeader);

    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement('td');
      cell.id = `${playerId}-${row}${j}`;
      rowElement.appendChild(cell);
    }
    tbody.appendChild(rowElement);
  });

  table.appendChild(tbody);
  return table;
}

function isGameOver(player) {
  return player.board.isAllSunk();
}

const draggableShips = [
  { type: 'Carrier', length: 5 },
  { type: 'BattleShip', length: 4 },
  { type: 'Cruiser', length: 3 },
  { type: 'Submarine', length: 3 },
  { type: 'Destroyer', length: 2 }
];

function isValidShipType(shipType) {
  const matchingShips = draggableShips.find(ship => ship.type.toLowerCase() === shipType.toLowerCase());
  return !!matchingShips;
}


function dragStart(event) {
  if(isValidShipType(event.target.innerText)) {
    const matchingShip = draggableShips.find(ship => ship.type.toLowerCase() === event.target.innerText.toLowerCase());
    const shipId = event.target.id;
    const length = matchingShip.length;
    event.dataTransfer.setData('text/plain', JSON.stringify({ shipId, length }));
  }
}


// Allow dropping on game board cells
document.querySelectorAll('td[id^="P1-"]').forEach(cell => {
  cell.addEventListener('dragover', e => allowDrop(e));
  cell.addEventListener('drop', e => dropShip(e));
});

function allowDrop(event) {
  event.preventDefault();
  event.target.classList.add('drag-over');
}

function dragLeave(event) {
  event.target.classList.remove('drag-over');
}

function dropShip(event) {
  event.preventDefault();
  event.target.classList.remove('drag-over');

  const data = JSON.parse(event.dataTransfer.getData('text/plain'));
  const { shipId, length } = data;
  const targetCellId = event.target.id.split('-')[1];

  // Get orientation based on key press (default to horizontal)
  const orientation = event.shiftKey ? 'vertical' : 'horizontal';

  // Attempt to place the ship
  const isPlaced = player1.board.placeShip(targetCellId, orientation, shipId, parseInt(length));
  
  if (isPlaced) {
      // Color the ship on the board
      colorShip([{ 
          coord: targetCellId, 
          orientation: orientation, 
          ship: { length, type: shipId } 
      }], 'P1');

      // Remove the ship from the draggable area
      const shipElement = document.getElementById(shipId);
      if (shipElement) {
          shipElement.remove();
      }

      // Check if all ships are placed
      if (document.querySelectorAll('.ship').length === 0) {
          document.getElementById('startGame').disabled = false;
      }
  } else {
      alert('Invalid placement! Please try another position.');
  }
}

function enableDragAndDropForPlayer1() {
  document.querySelectorAll('td[id^="P1-"]').forEach(cell => {
      cell.addEventListener('dragover', allowDrop);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dropShip);
  });

  document.querySelectorAll('.ship').forEach(ship => {
      ship.addEventListener('dragstart', dragStart);
  });

  // Disable start game button until all ships are placed
  document.getElementById('startGame').disabled = true;
}