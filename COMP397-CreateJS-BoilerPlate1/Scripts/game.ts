/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    {   id: "Button", src: "assets/images/button.png" },
    { id: "diceone", src: "assets/images/Dice1.JPG" },
    { id: "dicetwo", src: "assets/images/dice2.JPG" },
    { id: "dicethree", src: "assets/images/dice3.JPG" },
    { id: "dicefour", src: "assets/images/dice4.JPG" },
    { id: "dicefive", src: "assets/images/dice5.JPG" },
    { id: "dicesix", src: "assets/images/dice6.JPG" }, 
    { id: "clicked", src: "assets/audio/clicked.wav" }
];


// Game Variables
var helloLabel: createjs.Text; // create a reference
var helloLabel2: createjs.Text;
//create A refrence
var Button: objects.Button;

// variables for a roller dice
var one: objects.Button;
var two: objects.Button;
var three: objects.Button;
var four: objects.Button;
var five: objects.Button;
var six: objects.Button;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update();

    stats.end(); // end measuring
}

// Callback function that allows me to respond to button click events
function pinkButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");

    var first = Math.floor(Math.random() * 6 + 1);
    var second = Math.floor(Math.random() * 6 + 1);
    console.log(first);
    console.log(second);
    if (first == 1) {
        one = new objects.Button(assets.getResult("one"), 80, 190);
        stage.addChild(one);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (first == 2) {
        two = new objects.Button(assets.getResult("two"), 80, 190);
        stage.addChild(two);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (first == 3) {
        three = new objects.Button(assets.getResult("three"), 80, 190);
        stage.addChild(three);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (first == 4) {
        four = new objects.Button(assets.getResult("four"), 80, 190);
        stage.addChild(four);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    }
    if (first == 5) {
        five = new objects.Button(assets.getResult("five"), 80, 190);
        stage.addChild(five);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);

    } if (first == 6) {
        six = new objects.Button(assets.getResult("six"), 80, 190);
        stage.addChild(six);
        stage.removeChild(helloLabel);
        helloLabel = new createjs.Text(first.toString(), "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 80;
        helloLabel.y = 270;
        stage.addChild(helloLabel);
    }

    if (second == 1) {
        one = new objects.Button(assets.getResult("one"), 180, 190);
        stage.addChild(one);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);

    } if (second == 2) {
        two = new objects.Button(assets.getResult("two"), 180, 190);
        stage.addChild(two);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);

    } if (second == 3) {
        three = new objects.Button(assets.getResult("three"), 180, 190);
        stage.addChild(three);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);

    } if (second == 4) {
        four = new objects.Button(assets.getResult("four"), 180, 190);
        stage.addChild(four);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);

    }
    if (second == 5) {
        five = new objects.Button(assets.getResult("five"), 180, 190);
        stage.addChild(five);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);

    } if (second == 6) {
        six = new objects.Button(assets.getResult("six"), 180, 190);
        stage.addChild(six);
        stage.removeChild(helloLabel2);
        helloLabel2 = new createjs.Text(second.toString(), "20px Consolas", "#000000");
        helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel2.x = 180;
        helloLabel2.y = 270;
        stage.addChild(helloLabel2);
    }



}


// Callback functions that change the alpha transparency of the button

// Mouseover event
function pinkButtonOver() {
    Button.alpha = 0.8;
}

// Mouseout event
function pinkButtonOut() {
    Button.alpha = 1.0;
}

// Our Main Game Function
function main() {
    console.log("Game is Running");
   
    Button = new objects.Button(assets.getResult("Button"), 140, 370);
    stage.addChild(Button);
    Button.on("click", pinkButtonClicked);



    //sides of dice to display when game starts
    one = new objects.Button(assets.getResult("one"), 80, 190);
    stage.addChild(one);
    stage.removeChild(helloLabel);
    helloLabel = new createjs.Text("1", "20px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 80;
    helloLabel.y = 270;
    stage.addChild(helloLabel);


    two = new objects.Button(assets.getResult("two"), 180, 190);
    stage.addChild(two);

    stage.removeChild(helloLabel2);
    helloLabel2 = new createjs.Text("2", "20px Consolas", "#000000");
    helloLabel2.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel2.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel2.x = 180;
    helloLabel2.y = 270;
    stage.addChild(helloLabel2);

}
