import {SVG_NS} from '../settings'

export default class Paddle{
    constructor(boardHeight, width, height, x, y, up, down, color){
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.lives = 0;
        this.color = color;
        this.movingUp = false;
        this.movingDown = false;
        
        // document.addEventListener("keydown", event => {
        //     console.log(event);
        //     switch (event.key) {
        //         case up:
        //             this.moveUp();
        //             break;
        //         case down:
        //             this.moveDown();
        //             break;
        //     }
        // });

        document.addEventListener("keydown", event => {
            console.log(event);
            switch (event.key) {
                case up:
                    this.movingUp = true;
                    break;
                case down:
                    this.movingDown = true;
                    break;
            }
        });
        document.addEventListener("keyup", event => {
            console.log(event);
            switch (event.key) {
                case up:
                    this.movingUp = false;
                    break;
                case down:
                    this.movingDown = false;
                    break;
            }
        });
    }

    render(svg){
        // Creating a paddle element;
        this.drawPaddle(svg);

        if(this.movingUp){
            this.y = Math.max(0, this.y - this.speed);
        }
        if(this.movingDown){
            this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
        }
    }

    drawPaddle(svg) {
        let paddleRect = document.createElementNS(SVG_NS, "rect");
        paddleRect.setAttributeNS(null, "x", this.x);
        paddleRect.setAttributeNS(null, "y", this.y);
        paddleRect.setAttributeNS(null, 'width', this.width);
        paddleRect.setAttributeNS(null, 'height', this.height);
        paddleRect.setAttributeNS(null, "stroke", "black");
        paddleRect.setAttributeNS(null, "fill", `${this.color}`);
        paddleRect.setAttributeNS(null, "stroke-width", "2");
        svg.appendChild(paddleRect);
    }


    // moveUp(){
    //     this.y = Math.max(0, this.y - this.speed);
    // }

    // moveDown(){
    //     this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
    // }

    coordinates(x, y, width, height){
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return[leftX, rightX, topY, bottomY]
    }
}   
