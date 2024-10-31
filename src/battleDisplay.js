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

// Function to color a ship on the board
function colorShip(ship) {
   const startCoord = ship.coord;
   const shipLength = ship.ship.length;

  // Handle both vertical and horizontal orientations
  const direction = ship.orientation === 'vertical' ? 'y' : 'x';
 // Adjust the offset to 1 for simplicity
const offset = 1;

for (let i = 0; i < shipLength; i++) {
  const currentCoord = generateCoordinate(startCoord, i, direction, offset);
  const cell = document.getElementById(currentCoord);

  if (cell) {
    cell.style.backgroundColor = shipColors[ship.ship.type];
  } else {
    console.warn(`Invalid ship coordinate: ${currentCoord}`);
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

// player1.board.printGameBoard(); // Optional: uncomment to print board to console
// player1.board.receiveAttack('E4'); // Optional: uncomment for gameplay logic
// console.log(player1.board.fleetItems); // Optional: already logged