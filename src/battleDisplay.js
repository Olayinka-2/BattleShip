import { Player, GameBoard } from "./battleScript";
import './style.css';

let gameOver = false;
let currentTurn = "player1";  
let player1, player2, computer, lastPlacedShip, isHorizontal, lastPlacedTableCell;
let orientation;
const draggableDiv = document.querySelectorAll(".ship");

const shipColors = {
  Carrier: 'Cyan',
  BattleShip: 'Blue',
  Cruiser: 'Gray',
  Submarine: 'Purple',
  Destroyer: 'Orange'
};

document.getElementById("btn-1").addEventListener("click", () => startGame("PvP"));
document.getElementById("btn-2").addEventListener("click", () => startGame("PvB"));
document.getElementById("startGame").addEventListener("click", startPlaying);

function startGame(mode) {
  document.querySelector("main").style.display = "block";
  document.querySelector(".welcome-page").style.display = "none";

  player1 = new Player('Player 1', true);
  if (mode === "PvP") {
    player2 = new Player('Player 2', true);
    initializeGame("P1", "P2", attachAttackListenersPvP);
  } else {
    computer = new Player('Computer', true);
    initializeGame("P1", "P2", attachAttackListenersPvB);
  }
}

// Initialize boards and color ships
function initializeGame(playerPrefix1, playerPrefix2, attachListeners) {

  createAndAppendTable('.main-player', playerPrefix1);
  createAndAppendTable('.automated-player', playerPrefix2);

  // if (computer) colorShip(player1.board.fleetItems, playerPrefix1);

  attachListeners();
  // disableAllCells();
}

function startPlaying() {
  enableAllCells();
  document.querySelector("#startGame").style.display = "none";
  document.querySelector("#playerTurn").innerText = "Player 1's turn";
}

function attachAttackListenersPvP() {

  document.querySelectorAll(`td[id^="P2-"]`).forEach(cell => 
    cell.addEventListener('click', () => handlePvPAttack(cell, player2, "player1", "Player 1 wins!"))
  );


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
  addDragAndDrop();
  return table;
}

function isGameOver(player) {
  return player.board.isAllSunk();
}

function addDragAndDrop() {
  const tableCells = document.querySelectorAll("td");
  tableCells.forEach(cell => {
    cell.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
  });
  
  tableCells.forEach(cell => {
    cell.addEventListener('drop', dropShip);
  });

  draggableDiv.forEach(div => {
    div.addEventListener('dragstart', (event) => {
      let targetID = event.target.id;
      let length = event.target.dataset.length;
        event.dataTransfer.setData("text/plain", JSON.stringify({targetID, length}));
    });
  });
  
}

function dropShip(event) {
  event.preventDefault();
  const data = JSON.parse(event.dataTransfer.getData('text/plain'));
  const { targetID, length} = data;

  const targetCell = event.target;
  const targetCellId = targetCell.id;
  const coord = targetCellId.split("-").slice(1).join("");

  orientation = document.querySelector(`#${targetID}`).dataset.orientation;
  isHorizontal = orientation === 'horizontal' ? true : false;
  

  if (!isValidPlacement(coord, isHorizontal, length, targetCellId)) {
    console.log('invalid');
    return; // Prevent invalid placement
  }

  colors(coord, orientation, length, targetID, 'P1');

  lastPlacedShip = document.querySelector(`#${targetID}`);
  lastPlacedTableCell = event.target;
}

function isValidPlacement(coord, isHorizontal, length, targetCellId) {
  const startRow = parseInt(coord.charCodeAt(0) - 65);
  const startCol = parseInt(coord.substring(1)) - 1;

  if(isHorizontal) {
    if(startCol + Number(length) - 1 >= 10) {
      return false;
    } 
  } else {
    if(startRow + Number(length) - 1 >= 10) {
      return false;
    }
  }

  for(let i = 0; i < length; i++) {
    const row = isHorizontal ? startRow : startRow + i;
    const col = isHorizontal ? startCol + 1 : startCol;
    const cellId = `P1-${String.fromCharCode(row + 65) + (col + 1)}`;
    const cell = document.getElementById(cellId);
    if(cell && cell.style.backgroundColor !== "") {
      return false;
    }
  }
  return true;
}

document.getElementById('toggle-orientation').addEventListener("click", () => {
  if(lastPlacedShip) {
    const lastOrientation = lastPlacedShip.dataset.orientation;
    const newOrientation = lastOrientation === "horizontal" ? "vertical" : "horizontal";

    lastPlacedShip.dataset.orientation = newOrientation;
    lastPlacedShip.classList.remove(lastOrientation);
    lastPlacedShip.classList.add(newOrientation);
    orientation = newOrientation;
    repaintShip(lastPlacedShip, lastOrientation);
  }
});

function repaintShip(shipElement, lastOrientation) {
  const shipLength = parseInt(shipElement.dataset.length);
  const newOrientation = shipElement.dataset.orientation;
  const shipId = shipElement.id;
  const lastPlacedTableCellID = lastPlacedTableCell.id;

  // Clear existing ship color
  clearShipColor(lastPlacedTableCell, lastOrientation, shipLength);
  console.log(lastPlacedTableCellID);

  // Recalculate cell coordinates based on new orientation
  const coord = lastPlacedTableCellID.split("-")[1];
  const startRow = coord.charCodeAt(0) - 65;
  const startCol = parseInt(coord.substring(1)) - 1;

  colors(coord, newOrientation, shipLength, shipId.split("-")[0], 'P1'); // Update colors based on orientation
}

function clearShipColor(lastCell, lastOrientation, shipLength) {
  const [row, col] = lastCell.id.split('-').slice(1)[0];
  const startRow = parseInt(row.charCodeAt(0) - 65);
  const startCol = parseInt(col) - 1;

  for (let i = 0; i < shipLength; i++) {
    const row = lastOrientation === 'vertical' ? startRow + i : startRow;
    const col = lastOrientation === 'vertical' ? startCol : startCol + i;
    const cell = document.getElementById(`P1-${String.fromCharCode(row + 65) + (col + 1)}`);
    if (cell) cell.style.backgroundColor = '';
  }
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

function colors(coord, orientation, length, type, playerPrefix) {
  const startRow = coord.charCodeAt(0) - 65;
  const startCol = parseInt(coord.substring(1)) - 1;

  for (let i = 0; i < length; i++) {
    const row = orientation === 'vertical' ? startRow + i : startRow;
    const col = orientation === 'vertical' ? startCol : startCol + i;
    const cell = document.getElementById(`${playerPrefix}-${String.fromCharCode(row + 65) + (col + 1)}`);
    if (cell) cell.style.backgroundColor = shipColors[type];
  }
}