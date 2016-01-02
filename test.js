/**
* Created by Yash Patel on 12/18/15
*/
//import character.js;

//getting canvas
var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");


//all legitcolors are located inside types
var types = [ "red", "orange", "yellow", "green",
"blue", "purple", "pink"];

var name = prompt("What is your name?");
var legitColor = false;

while (!legitColor){//checks whether legitcolor is entered
  var type = prompt("What color ring do you hold?");
  for (var i = 0; i < types.length; i++){
    if (type == types[i])
      legitColor = true;
  }
  if (!legitColor)
    alert("Incorrect ring color, try again");
}
var color = new Image();
color.src = type + "Lantern.png";//format of color png

var player = new Character(name, color);



// Move the character
addEventListener("keydown", function(e) {
  //87 = w; 38 = up arrow key
  if (e.keyCode == 87 || e.keyCode == 38)
    player.moveUp();

  //83 = s; 40 = down arrow key
  else if (e.keyCode == 83 || e.keyCode == 40)
    player.moveDown();
  });



//allows automatic resizing of canvas based on window size
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          /**
           * Your drawings need to be inside this function otherwise they will be reset when
           * you resize the browser window and the canvas goes will be cleared.
           */
          //ctx.fillStyle="black";
          //ctx.fillRect(0, 0, canvas.width, canvas.height);
          //drawCharacter();
          //drawAsteroid();
}
//resizeCanvas();

// Cross-browser support for requestAnimationFrame
var w = window;

requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var oldX = player.getX();
var oldY = player.getY();
function drawCharacter(){
    //initial x position is 50
      ctx.clearRect(oldX, oldY, player.getWidth(), player.getHeight());
      ctx.drawImage(color,player.getX(),player.getY(), player.getWidth(), player.getHeight());
      oldX = player.getX();
      oldY = player.getY();
  }

// Used to create asteroids
var asteroid = new Image();

function drawAsteroid(width, height, speed)
{
  asteroid.src = "asteroid" + Math.floor((Math.random() * 3) + 1) + ".png"; //format of asteroid pngs
  // speed is measured in pixels per second

  var ypos =  Math.random() * canvas.height;
  // moves the asteroid to the left depending on the speed
  var before = Date.now();
  var after = Date.now();
  var xpos = canvas.width - width - speed * (after - before)/1000;
  //ctx.drawImage(asteroid, xpos, ypos, width, height);
  while(xpos > 0){
    after = Date.now();
    ctx.clearRect(xpos, ypos,width, height);
    console.log(xpos);
    xpos -= speed * (after - before);
    ctx.drawImage(asteroid, xpos, ypos, width, height);
    before = Date.now();
  }
}

function setUpBoard(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var asteroid = new Image();
  var xpos;
  var ypos;
  var xposes = new Array(10);
  var yposes = new Array(10);
  //for(var i = 0; i < 10; i++){
    asteroid.src = "asteroid" + Math.floor((Math.random() * 3) + 1) + ".png";
    ypos =  Math.floor(Math.random() * canvas.height);
    xpos =  Math.floor(Math.random() * canvas.width);
    for (var j = 0; j < 10; j++){
      if (Math.abs(xpos - xposes[i]) <= 200 && Math.abs(ypos - yposes[i]) <= 200){
        ypos =  Math.floor(Math.random() * canvas.height);
        xpos =  Math.floor(Math.random() * canvas.width);
      }
    }
    xposes[i] = xpos;
    yposes[i] = ypos;
    //console.log("X,Y = " + xpos + ","+ ypos);
    //console.log("canvas width,height: " + canvas.width + "," + canvas.height)
    ctx.drawImage(asteroid, xpos, ypos, 50, 50);
  //}
}
  //requestAnimationFrame(function() {
   //drawAsteroid(width, height, speed)});


function animate()
{
  resizeCanvas();
  drawCharacter();



  requestAnimationFrame(animate);
}
animate();

var aWidth = player.getWidth() - 10; // asteroid width
var aHeight = player.getHeight() - 25; // asteroid height
var aSpeed = 10;            // speed of asteroid
var newAsteroidEvery = 10000; // measured in milliseconds
drawAsteroid(aWidth, aHeight, aSpeed);
// Starting the game
function main()
{
  //resizeCanvas(); // Correct size of canvas
  //drawCharacter(); // Draw the character
  var level = 1;
  var score = 0;

  // Level difficulty logic
  var aWidth = player.getWidth() - 10; // asteroid width
  var aHeight = player.getHeight() - 25; // asteroid height
  var aSpeed = 1000;            // speed of asteroid
  var newAsteroidEvery = 1000; // measured in milliseconds
  //animate(aWidth, aHeight, aSpeed);
  //drawAsteroid(aWidth, aHeight, aSpeed);
  // Level one: asteroids every second, fixed small size.
  if (level == 1)
  {
      while (score < 100)
        setTimeout(drawAsteroid(aWidth, aHeight, aSpeed), newAsteroidEvery);
        score += 50;
      level  = 2;
  }
  if (level == 2)
  {
    while (score < 500)
    {
      // aHeight randomly between player.getWidth/2 - player.getWidth
      aWidth = player.getWidth() - Math.random() * player.getWidth();
      if (aWidth < player.getWidth()/2)
        aWidth += player.getWidth()/2;

      // aHeight randomly between player.getHeight/2 - player.getHeight
      aHeight = player.getHeight() - Math.random() * player.getHeight();
      if (aHeight < player.getHeight()/2)
        aHeight += player.getHeight()/2;

      // aSpeed between 500 p/s inclusive - 2000 p/s exclusive
      aSpeed = Math.floor((Math.random() * 1500) + 500);

      // newAsteroidEvery between 500 ms  inclusive to 1000 ms exclusive
      newAsteroidEvery = Math.random() * 1000;
      if (newAsteroidEvery < 500)
        newAsteroidEvery += 500;

      setTimeout(drawAsteroid(aWidth, aHeight, aSpeed), newAsteroidEvery);
      score += 50;
    }
    level = 3;
  }
  if (level == 3)
  {
    while (score < 1000)
    {
      // aHeight randomly between player.getWidth/2 -  2 * player.getWidth
      aWidth = player.getWidth() * 2 - Math.random() * player.getWidth();
      if (aWidth < player.getWidth()/2)
        aWidth += player.getWidth()/2;

      // aHeight randomly between player.getHeight/2 - 2 * player.getHeight
      aHeight = player.getHeight() * 2 - Math.random() * player.getHeight();
      if (aHeight < player.getHeight()/2)
        aHeight += player.getHeight()/2;

      // aSpeed between 500 p/s inclusive - 3000 p/s exclusive
      aSpeed = Math.floor((Math.random() * 2500) + 500);

      // newAsteroidEvery between 250 ms  inclusive to 1000 ms exclusive
      newAsteroidEvery = Math.random() * 1000;
      if (newAsteroidEvery < 250)
        newAsteroidEvery += 250;

      setTimeout(drawAsteroid(aWidth, aHeight, aSpeed), newAsteroidEvery);
      score += 50;
    }
  }
}
//main();
