# Pong-Rivals Miami

Basic Pong project using SVGs and Javascript Partials.

![](ponggif.gif)

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## How to play 

Start / Pause = SPACE

### Player one:

UP = A <br>
DOWN = Z <br>

### Player two:

UP = K <br>
DOWN = M <br>

### Rules

![Score Board](scoreboard.png)<br>
Players will start with 7 lives each<br>

A ball will be thrown into the arena, the properties of the ball will be a randomly selected from 3 ball types.<br>

![White Ball](whiteball.png) : let it past you you will lose a life.<br>
![Blue Ball](blueball.png) : get it past your oponent you will gain a life.<br>
![Danger Ball](redball.png) : if anyone touches the danger ball they will lose a life.<br>

The speed of each ball increases over time, of the current round.<br>

## Personal Learnings

### SVG's(scalable vector graphics)
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



