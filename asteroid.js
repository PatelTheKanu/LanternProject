"use strict";

class Asteroid {

  constructor() {
  this.width = 50;
  this.height = 50;
  this.speed = 10;
  this.y = Math.floor(Math.random() * (canvas.height- 50) + 50);
  this.x = canvas.width - 50;
  this.canvas = document.getElementById("canvas");

  }

  //Used to move the Asteroid up
  moveUp(){
    if (this.y - this.speed > 0)
      this.y -= this.speed;
    else {
      this.y = 0;
    }
  }

  //Used to move Asteroid down
  moveDown(){
    //have to account for picture height
    if (this.y < this.canvas.height - this.height)
      this.y += this.speed;
    else
      this.y = this.canvas.height-this.height;

  }

  moveRight(){
    if (this.x < this.canvas.width - this.width)
      this.x +=this.speed;
    else
      this.x = this.canvas.width - this.width;
  }

  moveLeft(){
    if(this.x > this.speed)
      this.x -=this.speed
    else
      this.x = 0;
  }

  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }

  getHeight(){
    return this.height;
  }

  getWidth(){
    return this.width;
  }

  getSpeed(){
    return this.speed;
  }
}
