// // document.getElementsById('map').innerHTML = "<p>hello world</p>"
// alert("hello");
// document.getElementsById("map").innerHTML = "hello world";
// alert("hello2");
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

var foodX = Math.floor(Math.random() * (width-2)) + 1;
var foodY = Math.floor(Math.random() * (height-2)) + 1;
var foodLoc = "x:"+foodX+"|y:"+foodY;

function drawMap(){
  //gameMap.innerHTML = edge;
  for(var y = 0; y < height; y++){
    for(var x = 0; x < width; x++){
      if(x==0 || x == width-1 || y == 0 || y == height-1)
        mapData += edge;
      else if (x == foodX && y == foodY)
        mapData += food;
      else
        mapData += empty;
    }
    mapData += "<br>";
  }

  gameMap.innerHTML = mapData;
  status.innterHTML = foodLoc;
}
