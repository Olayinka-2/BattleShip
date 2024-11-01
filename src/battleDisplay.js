import { Player, GameBoard } from "./battleScript";
import './style.css';

let player1 = new Player('computer', true);

const tdElements = document.querySelectorAll('td');
const shipColors = {
  Carrier: 'Red',
  BattleShip: 'Blue',
  Cruiser: 'Green',
  Submarine: 'Purple',
  Destroyer: 'Orange'
};

function colorShip(ship) {
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

    const cellId = String.fromCharCode(row + 65) + (col + 1);
    const cell = document.getElementById(cellId);

    // ... (rest of the function remains the same)

    if (cell) {
      cell.style.backgroundColor = shipColors[ship.ship.type];
    } 
  }
}

// Function to generate a new coordinate based on direction and offset
function generateCoordinate(coord, index, direction, offset) {
  const charCode = coord.charCodeAt(0); // Get char code for the letter
  const number = parseInt(coord.substring(1)); // Extract the number

  if (direction === 'y') {
    return `${String.fromCharCode(charCode)}${number + index}`;
  } else {
    return `${String.fromCharCode(charCode + index)}${number}`;
  }
}


// Loop through ships and color them
player1.board.fleetItems.forEach(colorShip);

player1.board.printGameBoard(); // Optional: uncomment to print board to console
// player1.board.receiveAttack('E4'); // Optional: uncomment for gameplay logic
// console.log(player1.board.fleetItems); // Optional: already logged