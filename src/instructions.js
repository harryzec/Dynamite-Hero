export default class Instructions {
  constructor(ctx, letter, x, y) {
    this.ctx = ctx;
    this.letter = letter;
    this.draw = this.draw.bind(this)
    this.x = x;
    this.y = y;
    this.timer = false;
    this.moveback = false;
    this.setTimer = this.setTimer.bind(this);
  }

  draw(move= 0) {
    this.ctx.font = "20pt Century Gothic";
    if (!this.moveback) {
      this.x += move;
    } else if (this.moveback) {
      this.x -= move;
    }
    
    this.ctx.fillStyle = 'purple';
    this.ctx.fillText(this.letter,this.x, this.y);
  }

  setTimer() {
    this.timer = true; 
    setTimeout( ()=>{this.moveback = true}, 3000)
  }

 
}