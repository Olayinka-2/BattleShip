const game = require('./battleScript');

test('the plaseSHip function should return done', () => {
   expect(game.placeShip('A0', 'vertical', 'Carrier')).toBe('done');
});