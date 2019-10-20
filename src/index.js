import './styles/game.css';
import Game from './partials/Game';

const gameMessage = document.getElementById("gameMessage");
const restartMessage = document.getElementById("restartMessage");

// create a game instance
const game = new Game('game', 512, 256, gameMessage, restartMessage);

//This is the loop that run sthe game at 60 frames per-second 
(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
