const CONSTANTS = {
  HEIGHT: 20,
  SPEED: 4,
  RADIUS: 20
}

export default class Note {
  constructor(width, height, ctx, button, tail= 0) {
    this.hit = false;
    this.width = width
    this.tail = tail
    this.button = button;
    this.right = CONSTANTS.RADIUS + width;
    this.drawmissed = this.drawmissed.bind(this)
    this.dec = false;
    this.drawext = this.drawext.bind(this)
    this.lilrad = 3.5;

    this.singlehit = this.singlehit.bind(this)

    this.singlehitter = false;

    
    this.ctx= ctx;


    this.x = width;
    if (button === 'A') {
      this.y = 345;
     
    } else if (button ==='S') {
      this.y = 405;

    } else if (button === 'D') {
      this.y = 465;
  
    } else if (button === 'F') {
      this.y = 525;

    } else if (button === 'G') {
      this.y = 585;

    }


  }

 

  singlehit(ctx) {

    if (this.button ==='S') {
   
    }
   
    ctx.beginPath();
    ctx.strokeStyle = 'gray';
    ctx.arc(this.x, this.y, CONSTANTS.RADIUS, 0, 2*Math.PI, false);
    ctx.lineWidth ='3';
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.lilrad, 0, Math.PI*2, false);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.closePath();

  }

  drawnote(ctx) {
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.lilrad, 0, Math.PI*2, false);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle ='purple';
    ctx.arc(this.x, this.y, CONSTANTS.RADIUS, 0, 2*Math.PI, false);
    ctx.lineWidth ='3';
    ctx.stroke()

    if (this.tail >0) {
      this.drawext(ctx)
    }
  }

  movenote(){
    if (this.dec === true) {
      this.lilrad -= .1;
      if (this.lilrad <= 3.5) {
        this.dec = false;
      }
    } else {
      this.lilrad += .1;
      if (this.lilrad >=10) {
        this.dec = true;
      }
    }
    
    this.right -= CONSTANTS.SPEED;

    this.x -= CONSTANTS.SPEED;
    this.fun -= CONSTANTS.SPEED;
  }

  movenotehit() {
    
    this.tail -= CONSTANTS.SPEED 

  }

  drawnotehit(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = 'gray';
    ctx.arc(this.x, this.y, CONSTANTS.RADIUS, 0, 2*Math.PI, false);
    ctx.lineWidth ='3';
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.lilrad, 0, Math.PI*2, false);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.closePath();
    if (this.tail>0) {
      this.drawext(ctx)
    }
  }

  drawext(ctx) {
    if (this.button === 'A') {
      ctx.beginPath();
      ctx.moveTo(this.x+20, 342);
      ctx.lineTo(this.x+20+this.tail, 342);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(this.x+20, 348);
      ctx.lineTo(this.x+20+this.tail, 348);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='3';
      ctx.moveTo(this.x+20+this.tail, 342);
      ctx.quadraticCurveTo(this.x+20+this.tail+3, 345, this.x+20+this.tail, 348)
      ctx.strokeStyle= 'pink'
      ctx.stroke()
    } else if(this.button === 'S') {
      ctx.beginPath();
      ctx.moveTo(this.x+20, 402);
      ctx.lineTo(this.x+20+this.tail, 402);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(this.x+20, 408);
      ctx.lineTo(this.x+20+this.tail, 408);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='3';
      ctx.moveTo(this.x+20+this.tail, 402);
      ctx.quadraticCurveTo(this.x+20+this.tail+3, 405, this.x+20+this.tail, 408)
      ctx.strokeStyle= 'pink'
      ctx.stroke()
    } else if(this.button === 'D') {
      ctx.beginPath();
      ctx.moveTo(this.x+20, 462);
      ctx.lineTo(this.x+20+this.tail, 462);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(this.x+20, 468);
      ctx.lineTo(this.x+20+this.tail, 468);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='3';
      ctx.moveTo(this.x+20+this.tail, 462);
      ctx.quadraticCurveTo(this.x+20+this.tail+3, 465, this.x+20+this.tail, 468)
      ctx.strokeStyle= 'pink'
      ctx.stroke()
    } else if(this.button === 'F') {
      ctx.beginPath();
      ctx.moveTo(this.x+20, 522);
      ctx.lineTo(this.x+20+this.tail, 522);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(this.x+20, 528);
      ctx.lineTo(this.x+20+this.tail, 528);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='3';
      ctx.moveTo(this.x+20+this.tail, 522);
      ctx.quadraticCurveTo(this.x+20+this.tail+3, 525, this.x+20+this.tail, 528)
      ctx.strokeStyle= 'pink'
      ctx.stroke()
    } else if(this.button === 'G') {
      ctx.beginPath();
      ctx.moveTo(this.x+20, 582);
      ctx.lineTo(this.x+20+this.tail, 582);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(this.x+20, 588);
      ctx.lineTo(this.x+20+this.tail, 588);
      ctx.lineWidth ='3';
      ctx.strokeStyle= 'pink'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='3';
      ctx.moveTo(this.x+20+this.tail, 582);
      ctx.quadraticCurveTo(this.x+20+this.tail+3, 585, this.x+20+this.tail, 588)
      ctx.strokeStyle= 'pink'
      ctx.stroke()
    }
  }

  drawmissed(ctx) {
    ctx.beginPath();
      ctx.strokeStyle = 'gray';
      ctx.arc(this.x, this.y, CONSTANTS.RADIUS, 0, 2*Math.PI, false);
      ctx.lineWidth ='3';
      ctx.stroke()

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.lilrad, 0, Math.PI*2, false);
      ctx.fillStyle = 'gray';
      ctx.fill();
      ctx.closePath();
  }

  animate(ctx) {
    
    if (this.singlehitter === true) {
      
      this.singlehit(ctx)
    }
    else if (this.hit === true) {
      this.movenotehit();
      this.drawnotehit(ctx)
    } else if (this.x < 83) {
      this.movenote();
      this.drawmissed(ctx);
    }
      else {
      this.movenote();
      this.drawnote(ctx)
    }
  
    
  }

  conflict(button) {
    if (this.x < button.right+7 && this.x > button.x-7) {
      return true;
    }
    return false;
  }

  releaseConflict(button) {
    if (this.right < button.right && this.right > button.x) {
      return true;
    }
    return false;
  }
}