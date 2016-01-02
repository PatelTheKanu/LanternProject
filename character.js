"use strict";

class Character {

  constructor(name, color) {
  this.name = name;
  this.color = color;
  this.width = 50;
  this.height = 90;
  this.y = 100;
  this.x = 100;
  this.canvas = document.getElementById("canvas");

  }

  //Used to move the Character up
  moveUp(){
    if (this.y - 10 > 0)
      this.y -= 10;
    else {
      this.y = 0;
    }
  }

  //Used to move character down
  moveDown(){
    //have to account for picture height
    if (this.y < this.canvas.height - this.height)
      this.y += 10;
    else
      this.y = this.canvas.height-this.height;

  }

  moveRight(){
    if (this.x < this.canvas.width - this.width)
      this.x +=10;
    else
      this.x = this.canvas.width - this.width;
  }

  moveLeft(){
    if(this.x > 10)
      this.x -=10
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
}
