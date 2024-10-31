const { Player, GameBoard } = require('./battleScript');

test('GameBoard correctly identifies when all ships are sunk', () => {
   const player = new Player('Player 1', false); // Disable auto-placing the fleet
   const gameBoard = player.board;

   // Manually place ships on the board at known locations
   gameBoard.placeFleet([
      { coordinates: 'A0', orientation: 'horizontal', type: 'Carrier' },
      { coordinates: 'B0', orientation: 'horizontal', type: 'BattleShip' },
      { coordinates: 'C0', orientation: 'horizontal', type: 'Cruiser' },
      { coordinates: 'D0', orientation: 'horizontal', type: 'Submarine' },
      { coordinates: 'E0', orientation: 'horizontal', type: 'Destroyer' },
   ]);

   // Attack all the ship coordinates to ensure they sink
   const shipCoordinates = [
      'A0', 'A1', 'A2', 'A3', 'A4', // Carrier
      'B0', 'B1', 'B2', 'B3',       // Battleship
      'C0', 'C1', 'C2',             // Cruiser
      'D0', 'D1', 'D2',             // Submarine
      'E0', 'E1'                    // Destroyer
   ];

   for (const coordinate of shipCoordinates) {
      gameBoard.receiveAttack(coordinate);
   }

   expect(gameBoard.isAllSunk()).toBe(true);
});
