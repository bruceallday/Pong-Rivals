import './styles/game.css';
import Game from './partials/Game';

const gameMessage = document.getElementById("gameMessage");
const restartMessage = document.getElementById("restartMessage");
const form = document.getElementById("playerForm");

const game = new Game('game', 512, 256, gameMessage, restartMessage, form);

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
