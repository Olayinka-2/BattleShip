import { Player, GameBoard } from "./battleScript";
import './style.css';

let player1 = new Player('computer', true);

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

  // ... (rest of the function remains the same)

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

    // ... (rest of the function remains the same)

    if (cell) {
      cell.style.backgroundColor = shipColors[ship.ship.type];
    } 
  }
}



// Function to generate a new coordinate based on direction and offset
// function generateCoordinate(coord, index, direction, offset) {
//   const charCode = coord.charCodeAt(0); // Get char code for the letter
//   const number = parseInt(coord.substring(1)); // Extract the number

//   if (direction === 'y') {
//     return `${String.fromCharCode(charCode)}${number + index}`;
//   } else {
//     return `${String.fromCharCode(charCode + index)}${number}`;
//   }
// }

let player1Cells = document.querySelectorAll('td[id^="P1-"]');

player1Cells.forEach(cell => {
  cell.addEventListener('click', () => {
    let cellId = cell.id.replace('P1-', "");
    player1.board.receiveAttack(cellId);
      if (player1.board.board[cellId[0].charCodeAt(0) - 65][parseInt(cellId.slice(1)) - 1] === 'X') {
        cell.innerText = 'X';  // Mark as miss
        cell.style.color = 'red';
    } else {
        cell.innerText = 'H';  // Mark as hit
        cell.style.color = 'green';
    }
  })
})


// Loop through ships and color them
player1.board.fleetItems.forEach(ship => colorShip(ship, "P1"));

// player1.board.printGameBoard();
const player2 = new Player("huurman", true);

player2.board.fleetItems.forEach(ship => colorShip(ship, "P2"));