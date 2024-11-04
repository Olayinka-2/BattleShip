import { Player, GameBoard } from "./battleScript";
import './style.css';

let player1 = new Player('computer', true);
const player2 = new Player("huurman", true);

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

function attachAttackListeners(player, playerPrefix) {
  const playerCells = document.querySelectorAll(`td[id^="${playerPrefix}"]`);
  
  playerCells.forEach(cell => {
    cell.addEventListener('click', () => {
      let cellId = cell.id.replace(`${playerPrefix}`, "");
      player.board.receiveAttack(cellId);

      // Determine if it's a hit or a miss and style accordingly
      const row = cellId[0].charCodeAt(0) - 65;
      const col = parseInt(cellId.slice(1)) - 1;
      const isHit = player.board.board[row][col] === 'H';
      
      cell.innerText = isHit ? 'H' : 'X';
      cell.style.color = isHit ? 'green' : 'red';
    });
  });
}

// Attach event listeners for each player
attachAttackListeners(player1, "P1-");
attachAttackListeners(player2, "P2-");


// Loop through ships and color them
player1.board.fleetItems.forEach(ship => colorShip(ship, "P1"));

// player1.board.printGameBoard();


player2.board.fleetItems.forEach(ship => colorShip(ship, "P2"));