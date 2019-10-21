import {SVG_NS, KEYS} from "../settings";
import Board from './board';
import Paddle from './Paddle';
import Ball from './ball';
import Score from './score';


export default class Game {
  constructor(element, width, height, gameMessage, restartMessage, form){
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.gameMessage = gameMessage;
    this.restartMessage = restartMessage;
    this.audio = document.getElementById("music");
    this.form = form;
    this.startOfGame = true;

    this.audio.play(); 

     //Boolean that starts the game loop;
    this.gameOn = false;
    
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
      KEYS.a, KEYS.z, "#ff1493",
      KEYS.x
      );

    this.paddle2 = new Paddle(
      this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth,
      this.startingPosition,
      KEYS.k, KEYS.m, "#1ff4ef",
      KEYS.n);

    //Creating the ball
    this.ball = new Ball(this.width, this.height, 5, 'white', 1);

    //Creating the score labels
    this.score1 = new Score(this.width / 2 -50, 30, 30);
    this.score2 = new Score(this.width / 2 +50, 30, 30);

    document.addEventListener('keydown', event =>{
      switch(event.key){
        case KEYS.spaceBar:
          this.gameMessage.innerText = "";
          this.restartMessage.innerText = "";
          this.gameOn = !this.gameOn;
          this.paddle2.speed = 10;
          this.paddle.speed = 10;
          break;
      }

      if(this.startOfGame && event.key === KEYS.spaceBar){
        this.playerOneData = document.getElementById("playerOneInput").value
        this.playerTwoData = document.getElementById("playerTwoInput").value
        console.log(this.playerOneData)
        console.log(this.playerTwoData)
        this.startOfGame = false;

      }

      if(this.gameOver && event.key === KEYS.spaceBar){
        this.gameOver = false;
        this.restartGame();
      }

      if(!this.gameOn && event.key === KEYS.spaceBar){
        this.gameMessage.innerText = "PAUSED";
      }else if(this.gameOn && event.key === KEYS.spaceBar){
        this.gameMessage.innerText = "...";
      }
    })
  }

  restartGame(){
    this.gameOver = false;
    this.gameOn = true;
    this.ball.reset();
    this.gameMessage.innerText = "";
    this.paddle2.lives = 7;
    this.paddle.lives = 7;
  }

  ballSchedular() {
    const num = Math.floor(Math.random() * 4);
    if (num === 3){
      this.ball = new Ball(this.width, this.height, 5, 'red', 1.3, 'danger');
    }else if(num === 0){
      this.ball = new Ball(this.width, this.height, 5, 'cyan', 1.2, 'life');
    }else{
      this.ball = new Ball(this.width, this.height, 5, 'white', 1, 'regular');
    }
  }

  render() {

    if(this.gameOn){
      this.form.style.display = "none";
    }

    if (!this.gameOn){
      this.paddle.speed = 0;
      this.paddle2.speed = 0;
      return;
    }

    if(this.paddle.lives < 0){
      this.gameOver = true;
      this.gameMessage.style.color = "#ff1493";
      this.gameMessage.style.textShadow = "2px 2px #1ff4ef";
      this.gameMessage.innerText = `${this.playerTwoData} wins!`;
      this.restartMessage.style.color = "#1ff4ef";
      this.restartMessage.innerText = "Restart (space)";
       this.restartMessage.style.textShadow = "2px 2px #ff1493"
      return;
    }

    if(this.paddle2.lives < 0){
      this.gameOver = true;
      this.gameMessage.style.color = "#1ff4ef";
      this.gameMessage.style.textShadow = "2px 2px #ff1493"
      this.gameMessage.innerText = `${this.playerOneData} wins!`;
      this.restartMessage.style.color = "#ff1493";
      this.restartMessage.innerText = "Restart (space)";
      this.restartMessage.style.textShadow = "2px 2px #1ff4ef"
      return;
    }

    if(this.ball.restarting){
      this.ballSchedular();
      this.ball.restarting = false;
    }

    if(this.ball.giveDamage && this.ball.currentDirection === -1){
      this.paddle.lives -= 1;
      this.ball.giveDamage = false;
    }else if(this.ball.giveDamage && this.ball.currentDirection === 1){
      this.paddle2.lives -= 1;
      this.ball.giveDamage = false;
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
