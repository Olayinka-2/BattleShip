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
      return;
   }
}

class GameBoard {
   constructor() {
      this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
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
      console.log(ship)

      let rowCoordinate = Number(this.#rowToIndex(coordinates));
      let columnCoordinate = Number(coordinates.charAt(1));

      for(let element of this.board) {
         for(let innerElement of element) {
            if(innerElement !== null) {
               console.log('Occupied already');
               return;
            }
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
game.board[1][1] = 'BA'
game.placeShip('A1', 'vertical', 'Destroyer');
game.board[0][0] = 'CA'

game.printGameBoard();

module.exports = game;