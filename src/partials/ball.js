import { SVG_NS } from '../settings'
import Game from'./Game'


export default class Ball{
    constructor(boardWidth, boardHeight, r, color, speed, type){
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.r = r;
        this.direction = 1;
        this.speed = speed
        this.color = color;
        this.type = type;
        this.restarting = false;

        this.reset();
    }

    wallCollision(){
        const hitLeft = this.x - this.r <= 0;
        const hitRight = this.x + this.r >= this.boardWidth;
        const hitTop = this.y - this.r <= 0;
        const hitBottom = this.y + this.r >= this.boardHeight;

        if(hitRight || hitLeft){
            this.vx = -this.vx;
        }else if (hitTop || hitBottom){
            this.vy = -this.vy;
        }
    }

    paddleCollision(paddle, paddle2){
        if(this.vx > 0){
            let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
            let [leftX, rightX, topY, bottomY] = paddle;
            if(
                (this.x + this.r >= leftX)
                && (this.x + this.r <= rightX)
                && (this.y >= topY && this.y <= bottomY)
            ){
                this.vx = -this.vx;
            }
        }else{
            let paddle2 = paddle.coordinates(paddle.x, paddle.y, paddle.width, paddle.height)
            let [leftX, rightX, topY, bottomY] = paddle2;
            if(
                (this.x - this.r <= rightX)
                && (this.x - this.r >= leftX)
                &&(this.y >= topY && this.y <= bottomY)
            ){
                this.vx = -this.vx;
            }
        }
    }

    reset(){
        this.restarting = true;
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
        this.vy = 0;

        while(this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        this.vx = this.direction * (6- Math.abs(this.vy));
    }

    goal(player, type){
        if(type === "regular"){
            player.lives--;
            this.reset();

        }else if(type === "danger"){
            this.reset();

        }else if (type === "life"){
            this.reset();
        }
    }

    render(svg, paddle, paddle2){

        this.mover();
        this.wallCollision();
        this.paddleCollision(paddle, paddle2);

        let circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttributeNS(null, "cx", this.x)
        circle.setAttributeNS(null, "cy", this.y)
        circle.setAttributeNS(null, "r", this.r);
        circle.setAttributeNS(null, "stroke", "black");
        circle.setAttributeNS(null, "fill", `${this.color}`);
        svg.appendChild(circle);

        const rightGoal = this.x + this.r >= this.boardWidth;
        const leftGoal = this.x - this.r <= 0;

        // REGULAR BALL BEHAVIOUR ON GOAL
        if(rightGoal && this.type === "regular"){
            this.goal(paddle, "regular");
            this.direction = 1;
        }
        else if(leftGoal && this.type === "regular"){
            this.goal(paddle2, "regular");
            this.direction = -1;
        }

        //DANGER BALL BEHAVIOUR 
        else if(rightGoal && this.type === "danger"){
            this.goal(paddle, "danger")
            this.direction = 1;

        }else if(leftGoal && this.type === "danger"){
            this.goal(paddle2, "danger")
            this.direction = -1;
        }

        //LIFE BALL BEHAVIOUR
        else if (rightGoal && this.type === "life"){
            this.goal(paddle, "life")
            this.direction = 1;

        }else if (leftGoal && this.type === "life"){
            this.goal(paddle2, "life")
            this.direction = -1;
        }
        
    }

    mover() {
        this.x += this.vx * this.speed;
        this.y += this.vy * this.speed;
    }
}