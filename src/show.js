export default class Show {
  constructor(canvas) {
    debugger
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    

    this.ctx.rotate(20*Math.PI / 180);
    // this.ctx.translate(this.dimensions.width, this.dimensions.height);
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    

     const loc = {x: 50, y: 100}
     this.ctx.font = "bold 40pt Snell Roundhand";
     this.ctx.fillStyle = '#FFFF00';
     this.ctx.fillText('Dynamite Hero', loc.x, loc.y);
     debugger
    
     
  }
}