export default class Particle {
  constructor(ctx ,x, y, radius, color){
    this.ctx = ctx
    this.x = x;
    this.originalX = x;
    this.originalY = y;
    this.y = y;
    this.radius = this.randomNumberRange(2,7)
    this.color = color
    this.radians = Math.random()*Math.PI*2;
    this.velocity = 0.05;
    this.update = this.update.bind(this)
    this.draw = this.draw.bind(this)
    this.distance = {x: this.randomNumberRange(0, 80), y: this.randomNumberRange(0, 80)}
    this.randomNumberRange = this.randomNumberRange.bind(this)
    this.grow = true;
  }

  randomNumberRange(min, max) {
    return Math.floor(Math.random()*(max-min +1)+min)
  }

  update(strk) {
    if(strk === 0) {
      this.velocity = .04;
    } else if (strk ===1) {
      this.velocity =.05
    } else if (strk ===2) {
      this.velocity =.06
    } else if (strk ===3) {
      this.velocity =.07
    } else if (strk ===-1) {
      this.velocity =.04
    } else if (strk ===-2) {
      this.velocity =.03
    } else if (strk ===-3) {
      this.velocity =.02
    } 

    this.lastPoint = {x: this.x, y: this.y}
    this.radians += this.velocity;
    this.x = this.originalX +Math.cos(this.radians)*this.distance.x;
    this.y = this.originalY + Math.sin(this.radians)*this.distance.y;
    if (this.grow) {
      this.radius +=.2
      if (this.radius >=7) {
        this.grow = false;
      }
    } else {
      this.radius -=.2
      if (this.radius <=2) {
        this.grow = true;
      }
    }
    this.draw();
  } 
  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.radius;
    this.ctx.moveTo(this.lastPoint.x, this.lastPoint.y);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
    // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
    this.ctx.closePath();
  }
}