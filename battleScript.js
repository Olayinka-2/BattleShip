class Player {
   constructor(name, autoCreateFleet) {
      this.name = name;
      this.board = new GameBoard(autoCreateFleet); // Pass 'this' to the GameBoard constructor
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
      return this.sunk;
   }
}

class GameBoard {
   constructor(autoCreateFleet = false) {
      this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
      this.ships = [];

      if (autoCreateFleet) this.createFleet();
   }

   createFleet() {
      const fleet = [
         { type: 'Carrier', length: 5 },
         { type: 'BattleShip', length: 4 },
         { type: 'Cruiser', length: 3 },
         { type: 'Submarine', length: 3 },
         { type: 'Destroyer', length: 2 }
      ];

      for (let ship of fleet) {
         let placed = false;
         while (!placed) {
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            placed = this.placeShip(`${String.fromCharCode(65 + row)}${col}`, orientation, ship.type);
            
         }
      }
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

   // #rowToIndex(coordinates) {
   //       return coordinates.toUpperCase().charCodeAt(0) - 65;
   // }

   #parseCoordinates(coordinates) {
      return {
         row: coordinates.toUpperCase().charCodeAt(0) - 65,
         col: parseInt(coordinates.charAt(1), 10)
      };
   }

   placeShip(coordinates, orientation, shipType) {
      let ship =this.#getShipType(shipType);
      this.ships.push(ship);

      let {rowCoordinate, columnCoordinate} = this.#parseCoordinates(coordinates);

      // let rowCoordinate = Number(this.#rowToIndex(coordinates));
      // let columnCoordinate = Number(coordinates.charAt(1));

      let targetArray = this.board[rowCoordinate];

      for(let i = columnCoordinate; i <= ship.length; i++) {
         if(targetArray[i] !== null) {
            console.log('Space occupied already');
            return false;
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
         return true;
      }
      return false;
   }

   receiveAttack(coordinates) {
      // let rowCoordinate = Number(this.#rowToIndex(coordinates));
      // let columnCoordinate = Number(coordinates.charAt(1));

      let {rowCoordinate, columnCoordinate} = this.#parseCoordinates(coordinates);
      let targetBox = this.board[rowCoordinate][columnCoordinate];

      let targetShip = this.ships.find(ship => ship.name.slice(0,2) == targetBox);

      if(targetShip) {
         targetShip.hit();
         console.log('hit');
         if(targetShip.isSunk()) {
            console.log(`${targetShip.name} is sunk!`);
         }
      } else {
         this.board[rowCoordinate][columnCoordinate] = 'X';
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

// let game = new GameBoard();
let player1 = new Player('computer', true);
// player1.board;
player1.board.printGameBoard();
// game.placeShip('C1', 'vertical', 'Destroyer');
// game.placeShip('G4', 'horizontal', 'Submarine');
// game.receiveAttack('E1');

// game.printGameBoard();

// module.exports = game;