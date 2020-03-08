const CONSTANTS = { 
  WIDTH: 28,
  HEIGHT: 30
}

export default class Button {
  constructor(letter, position, ctx) {
    this.ctx= ctx
    this.x = position.x;
    this.y = position.y;
    this.letter = letter;
    this.pressed = false;
    this.right = this.x + CONSTANTS.WIDTH
  }

  animate(ctx) {
    if (!this.pressed){
      ctx.fillStyle ='silver';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='#FFFF00';
      ctx.lineWidth ='2';
      ctx.stroke()

      // if (this.letter ==='A'){
      //   this.ctx.font = "bold 10pt Snell Roundhand";
      //   this.ctx.fillStyle = '#FFFF00';
      //   this.ctx.fillText('A', this.x, this.y);
      // }
      
    } else if (this.pressed && this.letter === 'A') {
      ctx.fillStyle ='green';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='purple';
      ctx.lineWidth ='1';
      ctx.stroke()
    } else if (this.pressed && this.letter === 'S') {
      ctx.fillStyle ='red';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='purple';
      ctx.lineWidth ='1';
      ctx.stroke()
    } else if (this.pressed && this.letter === 'D') {
      ctx.fillStyle ='yellow';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='purple';
      ctx.lineWidth ='1';
      ctx.stroke()
    } else if (this.pressed && this.letter === 'F') {
      ctx.fillStyle ='blue';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='purple';
      ctx.lineWidth ='1';
      ctx.stroke()
    } else if (this.pressed && this.letter === 'G') {
      ctx.fillStyle ='orange';
      ctx.fillRect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);

      ctx.beginPath();
      ctx.rect(this.x, this.y, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
      ctx.strokeStyle ='purple';
      ctx.lineWidth ='1';
      ctx.stroke()
    }
  }


}