import {SVG_NS, KEYS} from "../settings";
import Board from './board';
import Paddle from './Paddle';
import Ball from './ball';
import Score from './score';


export default class Game {
  constructor(element, width, height, gameMessage, restartMessage){
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.gameMessage = gameMessage;
    this.restartMessage = restartMessage;
    
    // creating and instance of the board
    this.board = new Board(this.width, this.height);

    //Creating the paddle values
    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;
    this.startingPosition = this.height / 2 - this.paddleHeight / 2;

    //Creating a new paddle
    this.paddle = new Paddle(
      this.height, this.paddleWidth, this.paddleHeight, this.boardGap, this.startingPosition,
      KEYS.a,
      KEYS.z);

    this.paddle2 = new Paddle(
      this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth,
      this.startingPosition,
      KEYS.k,
      KEYS.m);

    //Creating the ball
    this.ball = new Ball(this.width, this.height, 5, 'white', 1);

    // this.dangerBall = new Ball(this.width, this.height, 5, 'red');

    //Creating the score labels
    this.score1 = new Score(this.width / 2 -50, 30, 30);
    this.score2 = new Score(this.width / 2 +50, 30, 30);

    //Boolean that starts the game loop;
    this.gameOn = false;

    document.addEventListener('keydown', event =>{
      switch(event.key){
        case KEYS.spaceBar:
          this.gameMessage.innerText = "";
          this.restartMessage.innerText = "";
          this.gameOn = !this.gameOn;
          this.paddle2.speed = 10;
          this.paddle.speed = 10;
          break;

        case KEYS.r:
          console.log("clicked");
          this.ball = new Ball(this.width, this.height, 5, 'red', 1.3);
          break;

        case KEYS.w:
          this.ball = new Ball(this.width, this.height, 5, 'white', 1);
          break
          

        // case KEYS.r:
        //   this.gameMessage.innerText = "";
        //   this.restartMessage.innerText = "";
        //   this.ball.reset();

        // case KEYS.spaceBar && !this.gameOn:
        //   this.restartMessage.innerText = "";
        //   this.ball.reset();
        //   this.gameOn = true;
        //   break;
      }
    })
  }

  render() {
    if (!this.gameOn){
      this.paddle.speed = 0;
      this.paddle2.speed = 0;
      return;
    } 

    if(this.paddle.lives < 0){
      this.gameMessage.innerText = "Player 2 Wins!";
      this.restartMessage.innerText = "Restart (space)";
      return;
    }

    if(this.paddle2.lives < 0){
      this.gameMessage.innerText = "Player 1 Wins!";
      this.restartMessage.innerText = "Restart (space)";
      return;
    }

    //Creating the initial svg tag
    let svg = document.createElementNS(SVG_NS, "svg");

    //This method will stop the board flying off the screen 
    this.gameElement.innerHTML = "";

    //Creating new attributes inside our SVG
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);

    //Appending the SVG we created to the game element 
    this.gameElement.appendChild(svg);

    //Rendering the board to the screen we imported and created.
    this.board.render(svg);

    //Rendering the paddle
    this.paddle.render(svg);
    this.paddle2.render(svg);

    //Renderin the ball
    this.ball.render(svg, this.paddle, this.paddle2);

    //rendering score
    this.score1.render(svg, this.paddle2.lives);
    this.score2.render(svg, this.paddle.lives);

  }
  
}
