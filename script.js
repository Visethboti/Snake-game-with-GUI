var edge = "<div class='edge'></div>";
var empty = "<div class='empty'></div>";
var snakeHead = "<div class='snakeHead'></div>";
var snakeBody = "<div class='snakeBody'></div>";
var food = "<div class='food'></div>";

var width = 50;
var height = 50;

var gameMap = document.querySelector('#map');
var gameStatus = document.querySelector('#status');
var mapData = "";
var statusData = "";

var foodX = 1;
var foodY = 1;
var foodLoc = "x:"+foodX+"|y:"+foodY;

var snakeX;
var snakeY;
var snakeBodyLoc;

var gameOver;
var score;
var size;

//////////////// Functions //////////////////////////

function setup(){
  foodX = Math.floor(Math.random() * (width-2)) + 1;
  foodY = Math.floor(Math.random() * (height-2)) + 1;

  snakeX = width/2;
  snakeY = height/2;

  snakeBodyLoc = [];

  gameOver = false;
  score = 0;
  size = 0;
}

function drawMap(){
  mapData = "";
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      if(x==0 || x == width-1 || y == 0 || y == height-1)
        mapData += edge;
      else if (x == snakeX && y == snakeY)
        mapData += snakeHead;
      else if (x == foodX && y == foodY)
        mapData += food;
      else if (size > 0){
        var exist = false;
        snakeBodyLoc.forEach((item, i) => {
          if(x == item[0] && y == item[1])
            exist = true;
        });
        if(exist)
          mapData += snakeBody;
        else
          mapData += empty;
      }
      else
        mapData += empty;
    }
  }

  gameMap.innerHTML = mapData;
}

function check(){
  if(snakeX == foodX && snakeY == foodY){
    do{
      foodX = Math.floor(Math.random() * (width-2)) + 1;
      foodY = Math.floor(Math.random() * (height-2)) + 1;
    }while(snakeX == foodX && snakeY == foodY);

    size++;
    score++;
    snakeBodyLoc.push([0,0]);
  }
}

function snakeBodyFun(){
  if(size>0){
    if(size > 1){
      for(var i = size-1; i > 0; i--){
        snakeBodyLoc[i][0] = snakeBodyLoc[i-1][0];
        snakeBodyLoc[i][1] = snakeBodyLoc[i-1][1];
      }
    }

    snakeBodyLoc[0][0] = snakeX;
    snakeBodyLoc[0][1] = snakeY;
  }
}

function printStatus(){
  statusData = "|Status| score: "+score+" size: "+size;
  statusData += "<br/>snakeX:"+snakeX+" snakeY:"+snakeY+"<br/>";
  if(size>0){
    snakeBodyLoc.forEach(function(item, index){
      statusData += "|x:"+item[0]+"y:"+item[1]+"|";
    });
  }

  gameStatus.innerHTML = statusData;
}

//////////////////////////////////////////////////////

// onload
function game(){
  setup();
  drawMap();
  printStatus();
}

// on keyclick
window.onkeydown = function(event){
  if(!gameOver){
    snakeBodyFun();

    var key = String.fromCharCode(event.keyCode);
    switch (key) {
      case 'W':
        snakeY -= 1;
        break;
      case 'S':
        snakeY += 1;
        break;
      case 'A':
        snakeX -= 1;
        break;
      case 'D':
        snakeX += 1;
        break;
      default:
        alert(snakeBodyLoc[0][0]+" "+snakeBodyLoc[0][1]);;
        break;
    }

    check();
    drawMap();
    printStatus();
  }
}
