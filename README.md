# Pong-Rivals Miami

Basic Pong project using SVGs and Javascript Partials.

![](ponggif.gif)

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Download the project

Navigate to the project directory

`yarn start` in your terminal or powershell

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Technologies used
* HTML5
* CSS3
* Javascript ES6
* Node.js
* yarn
* parcel


## How to play 

Start / Pause = SPACE

### Player one:

UP = a <br>
DOWN = a <br>

### Player two:

UP = k <br>
DOWN = m <br>

### Rules

Players will start with 7 lives each<br>

A ball will be thrown into the arena, the properties of the ball will be a randomly selected from 3 ball types.<br>

![White Ball](whiteball.png)<br>
let it past you and you will lose a life.<br>

![Blue Ball](blueball.png)<br>
get it past your oponent you will gain a life.<br>

![Danger Ball](redball.png)<br>
if anyone touches this they will lose a life.<br>

The speed of each ball increases over time, of the current round.<br>

## Personal Learnings

### SVG (scalable vector graphics)
This was the first time I was introdiced to SVG in HTML. I leanred how to create images with multiple SVG elements.

### Partials / OOP Vanilla JS
Having used OOP in other languages I found that transfering my knowledge over to JS Partials was interesting and challenging.
This has helped me to precisely identify the similarities and differences between various languages using Object Oriented Programming style. 

## Bug Fix
The base game we started with had a bug in which only one player could press a button at 1 given time.
Accompanied by laggy paddle movement.

My approach to solving this issue was to first isolate the source of the bug in the source code.
It turned out that the paddles were not getting rendered in their ```render()``` method, meaning their call was once every second, not 60 times per second.
My simple yet effective fix was to move the paddles into their own ```render()``` method and have them called on an ```addEventListener("keydown", )``` and ```addEventListener("keyup", )``` that would return a boolean to identify if the key was ```true``` (on press) and ```false``` (on release);

Then using these boolean values along with their direction controls:

```javascript
if(this.movingUp){
    this.y = Math.max(0, this.y - this.speed);
}
if(this.movingDown){
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
}
```

Not only did this solve the issue where the players couldn't press at the same time, but also it gave the paddles super-smooth motion, greatly increasing the players experience.

## Added functionality
* Player name boxes for a more personal experience
* Slow acceleration on ball in each round
* Ball type behaviour, life loss, life gain.

## Environment
* macOS Mojave: 10.14.6
* VS Code: 1.39.1

## Contributing
Please feel free to clone this project, feedback and improvements welcome.

## Authors
* **Bruce Pouncey** - *Initial work* - [BPouncey](https://github.com/BPouncey)

## License
N/A

## Acknowledgments

[RED Academy](https://github.com/redacademy)



