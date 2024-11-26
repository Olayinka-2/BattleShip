class Player {
   constructor(name, autoCreateFleet) {
      this.name = name;
      this.board = new GameBoard(autoCreateFleet); 
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
      console.log(`${this.name} hit count: ${this.timesHit}/${this.length}`);
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
      this.fleetItems = [];

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
            const row = Math.floor(Math.random() * 10) + 1;
            const col = Math.floor(Math.random() * 10) + 1;
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            const alphabeticRow = String.fromCharCode(65 + row);
            placed = this.placeShip(`${alphabeticRow}${col}`, orientation, ship.type);
            if(placed) {
               this.fleetItems.push({"coord":`${alphabeticRow}${col}`, orientation, ship});
            }
            
         }
      }
      return this.fleetItems;
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

   #parseCoordinates(coordinates) {
      return {
         row: coordinates.toUpperCase().charCodeAt(0) - 65,
         col: parseInt(coordinates.substring(1), 10) - 1,
      };
   }

   placeShip(coordinates, orientation, shipType) {
      const ship = this.#getShipType(shipType);
      if (!ship) return false;
  
      const { row, col } = this.#parseCoordinates(coordinates);
      if (orientation === 'horizontal' && col + ship.length - 1 >= 10) {
          return false;
      }
      if (orientation === 'vertical' && row + ship.length - 1 >= 10) {
          return false;
      }

      if (row < 0 || row >= this.board.length || col < 0 || col >= this.board[0].length) {
         // alert("Invalid coordinates provided. Ship placement out of bounds.");
         return false;
       }
  
      // Check for overlaps with existing ships
      for (let i = 0; i < ship.length; i++) {
          const targetRow = orientation === 'horizontal' ? row : row + i;
          const targetCol = orientation === 'horizontal' ? col + i : col;
  
          if (this.board[targetRow][targetCol] !== null) {
              return false; // Overlaps with another ship
          }
      }
  
      // Place the ship on the board
      for (let i = 0; i < ship.length; i++) {
          const targetRow = orientation === 'horizontal' ? row : row + i;
          const targetCol = orientation === 'horizontal' ? col + i : col;
          this.board[targetRow][targetCol] = ship.name.slice(0, 2);
      }
  
      this.ships.push(ship);
      return true;
  }

   isAllSunk() {
      const allSunk = this.ships.every(ship => ship.isSunk());
      return allSunk;
   }
   

   receiveAttack(coordinates) {

      let {row, col} = this.#parseCoordinates(coordinates);
      let targetBox = this.board[row][col] ;

      if (targetBox === 'H' || targetBox === 'X') {
         return;
      }

      if (targetBox === null) {
         this.board[row][col] = 'X';
         return;
      }

      let targetShip = this.ships.find(ship => ship.name.slice(0,2) == targetBox);

         if(targetShip) {
            targetShip.hit();
            this.board[row][col] = 'H';
         } else {
            return;
         }
   }

   printGameBoard() {
      const rows = 'ABCDEFGHIJ'; // Rows labeled A-J
      const columns = Array.from({ length: 10 }, (_, i) => i + 1); // Columns labeled 1-10
  
      // Create header with column numbers outside the board
      let boardString = '     ' + columns.map(col => col.toString().padStart(2, ' ')).join(' ') + '\n';
  
      // Loop through each row to build the board display
      for (let i = 0; i < rows.length; i++) {
          const rowLabel = rows[i]; // Row label (e.g., A, B, C...)
          let rowString = `${rowLabel}   `; // Align row label outside the board
  
          for (let j = 0; j < columns.length; j++) {
              const cell = this.board[i][j];
              rowString += ` ${cell ? cell : '.'} `; // Add cell content (ships or empty cells)
          }
  
          boardString += rowString + '\n'; // Add the row to the board string
      }
  
      console.log(boardString);
  }
}

export {Player, GameBoard};