var edge = "<div class='edge'></div>";
var empty = "<div class='empty'></div>";
var snakeHead = "<div class='snakeHead'></div>";
var snakeBody = "<div class='snakeBody'></div>";
var food = "<div class='food'></div>";

var width = 50;
var height = 50;

var gameMap = document.querySelector('#map');
var status = document.querySelector('#status');
var mapData = ""

var foodX = 1;
var foodY = 1;
var foodLoc = "x:"+foodX+"|y:"+foodY;

var snakeX;
var snakeY;
var snakeBodyLoc;

var gameOver;

//////////////// Functions //////////////////////////

function setup(){
  foodX = Math.floor(Math.random() * (width-2)) + 1;
  foodY = Math.floor(Math.random() * (height-2)) + 1;

  snakeX = width/2;
  snakeY = height/2;

  gameOver = false;
}

function drawMap(){
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      if(x==0 || x == width-1 || y == 0 || y == height-1)
        mapData += edge;
      else if (x == snakeX && y == snakeY)
        mapData += snakeHead;
      else if (x == foodX && y == foodY)
        mapData += food;
      else
        mapData += empty;
    }
  }

  gameMap.innerHTML = mapData;
  status.innterHTML = foodLoc;
}

function move(){

}

function check(){

}

//////////////////////////////////////////////////////

function game(){
  setup();
  drawMap();
}
