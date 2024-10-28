class Player {
   constructor(name) {
      this.name = name;
      this.board = new GameBoard(); // Pass 'this' to the GameBoard constructor
   }
 }


class Ship {
   constructor(length, shipType) {
      this.name = shipType;
      this.length = length;
      this.timesHit = 0;
      this.sunk = false;
   }

   hit() {
      this.timesHit++;
   }

   isSunk() {
      if(this.length === this.timesHit) {
         this.sunk = true;
      }
      return false;
   }
}

class GameBoard {
   constructor(player) {
      this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
      this.ships = [];
      this.missedAttacks = [];
   }

   #getShipType(shipType) {
      switch (shipType) {
         case 'Carrier':
            return new Ship(5, 'Carrier');
         case 'BattleShip':
            return new Ship(4, 'BattleShip');
         case 'Cruiser':
            return new Ship(3, 'Cruiser');
         case 'Submarine':
            return new Ship(3, 'Submarine');
         case 'Destroyer':
            return new Ship(2, 'Destroyer');
         default:
            console.log('Enter the game ship name');
            return null;
      }
   }

   #rowToIndex(coordinates) {
         return coordinates.toUpperCase().charCodeAt(0) - 65;
   }

   placeShip(coordinates, orientation, shipType) {
      let ship =this.#getShipType(shipType);
      this.ships.push(ship);

      let rowCoordinate = Number(this.#rowToIndex(coordinates));
      let columnCoordinate = Number(coordinates.charAt(1));

      let targetArray = this.board[rowCoordinate];

      for(let i = columnCoordinate; i <= ship.length; i++) {
         if(targetArray[i] !== null) {
            console.log('Space occupied already');
            return;
         }
      }

      if(ship !== null && rowCoordinate + ship.length < 10 && columnCoordinate + ship.length < 10) {
         for(let i = 0; i < ship.length; i++) {
            if(orientation == 'horizontal') {
               this.board[rowCoordinate][columnCoordinate + i] = ship.name.slice(0, 2);
            } else if(orientation == 'vertical') {
               this.board[rowCoordinate + i][columnCoordinate] = ship.name.slice(0, 2);
            }
         }
      }
   }

   receiveAttack(coordinates) {
      let rowCoordinate = Number(this.#rowToIndex(coordinates));
      let columnCoordinate = Number(coordinates.charAt(1));
      let targetBox = this.board[rowCoordinate][columnCoordinate];

      let targetShip = this.ships.find(ship => ship.name.slice(0,2) == targetBox);

      if(targetShip) {
         targetShip.hit();
         console.log('hit');
         if(targetShip.isSunk()) {
            console.log(`${targetShip.name} is sunk!`);
         }
      } else {
         targetBox = 'X';
         console.log('Target missed');
         return;
      }
   }

    // Pretty print function
   printGameBoard() {
      const rows = 'ABCDEFGHIJ';  // Rows labeled A-J
      const columns = Array.from({ length: 10 }, (_, i) => i); // Columns labeled 0-9

      // Create header row
      let boardString = '   ' + columns.map(col => col.toString().padStart(2, ' ')).join(' ') + '\n';

      // Loop through each row to build the board display
      for (let i = 0; i < rows.length; i++) {
         const rowLabel = rows[i];
         let rowString = rowLabel + ' |';  // Row label

         for (let j = 0; j < columns.length; j++) {
            const cell = this.board[i][j];
            rowString += ` ${cell ? cell : '.'} |`;  // Show ship or empty cell
         }
         boardString += rowString + '\n';  // Add row to the board string
      }

      console.log(boardString);  // Print the board to the console
   }
}

let game = new GameBoard();
let player1 = new Player();
game.placeShip('C1', 'vertical', 'Destroyer');
game.receiveAttack('E1');

game.printGameBoard();

module.exports = game;