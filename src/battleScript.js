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
      let ship =this.#getShipType(shipType);
      if(!ship) return false;
      this.ships.push(ship);

      let {row, col} = this.#parseCoordinates(coordinates);

      if(
         (orientation === 'horizontal' && col + ship.length > 10) ||
         (orientation === 'vertical' && row + ship.length > 10)
      ) {
         return false;
      }

      // let targetArray = this.board[row];

      for(let i = 0; i < ship.length; i++) {
         let targetRow = orientation === 'horizontal' ? row : row + i;
         let targetCol = orientation === 'horizontal' ? col + i : col;
         if(this.board[targetRow] && this.board[targetRow][targetCol] !== null) {
            console.log('Space occupied already');
            return false;
         }
      }
   

      if(ship !== null && row + ship.length <= 10 && col + ship.length <= 10) {
         for(let i = 0; i < ship.length; i++) {
            if(orientation == 'horizontal') {
               this.board[row][col + i] = ship.name.slice(0, 2);
            } else if(orientation == 'vertical') {
               this.board[row + i][col] = ship.name.slice(0, 2);
            }
         }  
         return true;
      }
      return false;
   }

   isAllSunk() {
      return this.ships.every(ship => ship.isSunk());
   }

   receiveAttack(coordinates) {

      let {row, col} = this.#parseCoordinates(coordinates);
      let targetBox = this.board[row][col];

      let targetShip = this.ships.find(ship => ship.name.slice(0,2) == targetBox);

      if(targetBox !== 'H' && targetBox !== 'X') {
            if(targetShip) {
               targetShip.hit();
               console.log('hit');
               this.board[row][col] = 'H';
            if(targetShip.isSunk()) {
               console.log(`${targetShip.name} is sunk!`);
            }
            if(this.isAllSunk()) {
               console.log("All the ship is sunk");
               return 'All sunk';
            }
            } else {
            this.board[row][col] = 'X';
            console.log('Target missed');
            console.log(this.board[row][col]);
            return;
         }
      }
   }

    // Pretty print function
   printGameBoard() {
      const rows = 'ABCDEFGHIJ';  // Rows labeled A-J
      const columns = Array.from({ length: 10 }, (_, i) => i + 1); // Columns labeled 0-9

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


// let player1 = new Player('computer', true);
// console.log(player1.board.board);
// player1.board.receiveAttack('A2');
// player1.board.printGameBoard();

export {Player, GameBoard};