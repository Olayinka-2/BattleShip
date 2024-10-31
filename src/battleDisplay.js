import { Player, GameBoard } from "./battleScript";
import './style.css';


const tdElements = document.querySelectorAll('td');

tdElements.forEach(cell => {
   
});

let player1 = new Player('computer', true);

player1.board.printGameBoard();
player1.board.receiveAttack('E4');
console.log('man');
