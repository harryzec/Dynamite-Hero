import Button from './button'
import Note from './note'
import Afternoon from './afternoon'
import Instructions from './instructions'

export default class FerrellHero {
  constructor(canvas) {
    
    this.ctx = canvas.getContext("2d");
    this.drawBackground = this.drawBackground.bind(this)
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.drawBackground(this.ctx);
    this.button = new Button('A', {x: (90), y: (330)}, this.ctx)
    this.button2 = new Button('S', {x: (90), y: (390)}, this.ctx)
    this.button3 = new Button('D', {x: (90), y: (450)}, this.ctx)
    this.button4 = new Button('F', {x: (90), y: (510)}, this.ctx)
    this.button5 = new Button('G', {x: (90), y: (570)}, this.ctx)
    this.player = false;
    this.flash = false;
    this.flashcount = 0;
    this.instruction = []
 
    this.animate = this.animate.bind(this)
    this.animate();
    this.score = 0;
    this.click = this.click.bind(this);
    this.unclick = this.unclick.bind(this)
    this.startGame = this.startGame.bind(this);

    
    
    this.registerEvents();
  }

  registerEvents() {
    document.addEventListener("keydown", this.click, false);
    document.addEventListener("keyup", this.unclick, false);
    document.addEventListener('mousedown', this.startGame)
  }

  startGame(e) {
    
    if (!this.player && e.x >= document.getElementById('ferrell-hero').getBoundingClientRect().x + 990 && e.x <= document.getElementById('ferrell-hero').getBoundingClientRect().x + 1090 && e.y >= document.getElementById('ferrell-hero').getBoundingClientRect().y + 50 && e.y  <= document.getElementById('ferrell-hero').getBoundingClientRect().y + 100) {

      this.player = true;
      this.video = document.getElementById('Napolean');
      this.video.style.display = "block"
      this.video.play()


      this.game = new Afternoon(this.ctx, this.dimensions, this.button, this.button2, this.button3, this.button4, this.button5, 'Easy');

      this.instruction.push(new Instructions(this.ctx, 'A', -20, 354));
      this.instruction.push(new Instructions(this.ctx, 'S', -20, 414));
      this.instruction.push(new Instructions(this.ctx, 'D', -20, 474));
      this.instruction.push(new Instructions(this.ctx, 'F', -20, 534));
      this.instruction.push(new Instructions(this.ctx, 'G', -20, 594));
    } else if (!this.player && e.x >= document.getElementById('ferrell-hero').getBoundingClientRect().x + 990 && e.x <= document.getElementById('ferrell-hero').getBoundingClientRect().x + 1090 && e.y >= document.getElementById('ferrell-hero').getBoundingClientRect().y + 130 && e.y  <= document.getElementById('ferrell-hero').getBoundingClientRect().y + 180) {
      this.video = document.getElementById('Napolean');
      this.video.style.display = "block"
      this.video.play()
      
      this.player = true;
      this.game = new Afternoon(this.ctx, this.dimensions, this.button, this.button2, this.button3, this.button4, this.button5, 'Medium');

      this.instruction.push(new Instructions(this.ctx, 'A', -20, 354));
      this.instruction.push(new Instructions(this.ctx, 'S', -20, 414));
      this.instruction.push(new Instructions(this.ctx, 'D', -20, 474));
      this.instruction.push(new Instructions(this.ctx, 'F', -20, 534));
      this.instruction.push(new Instructions(this.ctx, 'G', -20, 594));
    } else if (!this.player && e.x >= document.getElementById('ferrell-hero').getBoundingClientRect().x + 990 && e.x <= document.getElementById('ferrell-hero').getBoundingClientRect().x + 1090 && e.y >= document.getElementById('ferrell-hero').getBoundingClientRect().y + 210 && e.y  <= document.getElementById('ferrell-hero').getBoundingClientRect().y + 260) {
      this.video = document.getElementById('Napolean');
      this.video.style.display = "block"
      this.video.play()

      this.player = true;
      this.game = new Afternoon(this.ctx, this.dimensions, this.button, this.button2, this.button3, this.button4, this.button5, 'Hard');

      this.instruction.push(new Instructions(this.ctx, 'A', -20, 354));
      this.instruction.push(new Instructions(this.ctx, 'S', -20, 414));
      this.instruction.push(new Instructions(this.ctx, 'D', -20, 474));
      this.instruction.push(new Instructions(this.ctx, 'F', -20, 534));
      this.instruction.push(new Instructions(this.ctx, 'G', -20, 594));
    }
  }


  unclick(e) {
    if (e.code ==='KeyA') {
      this.button.pressed = false;
    }
    if (e.code ==='KeyS') {
      this.button2.pressed = false;
    } if (e.code === 'KeyD') {
      this.button3.pressed = false;
    } if (e.code === 'KeyF') {
      this.button4.pressed = false;
    } if (e.code === 'KeyG') {
      this.button5.pressed = false;
    }
    
  }

  click(e) {
 
 
    if (e.code ==='KeyA') {
      this.button.pressed = true
    } else if (e.code ==='KeyS') {
      this.button2.pressed = true;
    } else if (e.code === 'KeyD') {
      this.button3.pressed = true;
    } else if (e.code === 'KeyF') {
      this.button4.pressed = true;
    } else if (e.code === 'KeyG') {
      this.button5.pressed = true;
    }
    
  
  }





  drawBackground(ctx){
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      ctx.beginPath();
      ctx.moveTo(0, 300);
      ctx.lineTo(700, 300);
      ctx.lineWidth ='8';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      ctx.beginPath();
      ctx.lineWidth ='8';
      ctx.moveTo(700, 300);
      ctx.bezierCurveTo(40, 37, 70, 25, 300, 0);
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      
      ctx.beginPath();
      ctx.moveTo(0, 636);
      ctx.lineTo(1300, 636);
      ctx.lineWidth ='8';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      ctx.beginPath();
      ctx.moveTo(110, 342);
      ctx.lineTo(1300, 342);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(110, 348);
      ctx.lineTo(1300, 348);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      ctx.beginPath();
      ctx.moveTo(110, 402);
      ctx.lineTo(1300, 402);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(110, 408);
      ctx.lineTo(1300, 408);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      ctx.beginPath();
      ctx.moveTo(110, 462);
      ctx.lineTo(1300, 462);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(110, 468);
      ctx.lineTo(1300, 468);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      ctx.beginPath();
      ctx.moveTo(110, 522);
      ctx.lineTo(1300, 522);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(110, 528);
      ctx.lineTo(1300, 528);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()


      ctx.beginPath();
      ctx.moveTo(110, 582);
      ctx.lineTo(1300, 582);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(110, 588);
      ctx.lineTo(1300, 588);
      ctx.lineWidth ='1';
      ctx.strokeStyle= '#FFFF00'
      ctx.stroke()

      if (!this.player) {

      ctx.beginPath();
      ctx.rect(990, 50, 100, 50);
      ctx.strokeStyle ='violet';
      ctx.lineWidth ='2';
      ctx.font = '25px Snell Roundhand'; 
      ctx.fillStyle = 'yellow';
      ctx.fillText('Easy', 1015, 83);
      ctx.stroke()


      ctx.beginPath();
      ctx.rect(990, 130, 100, 50);
      ctx.strokeStyle ='violet';
      ctx.lineWidth ='2';
      ctx.font = '25px Snell Roundhand'; 
      ctx.fillStyle = 'yellow';
      ctx.fillText('Medium', 1000, 163);
      // ctx.strokeStyle= 'violet';
      // ctx.fillStyle = 'violet';

      ctx.stroke()

      ctx.beginPath();
      ctx.rect(990, 210, 100, 50);
      ctx.strokeStyle ='violet';
      ctx.lineWidth ='2';
      ctx.font = '25px Snell Roundhand'; 
      ctx.fillStyle = 'yellow';
      ctx.fillText('Hard', 1010, 243);
      ctx.stroke()
    }
    
    // ctx.clearRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 60)
    // ctx.fillStyle = "black";
    // ctx.fillRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 70)
    // ctx.font = "20pt Century Gothic";
    // ctx.fillStyle = 'silver';
    // ctx.fillText('Score:', 320, 280);
    // ctx.fillText('Easy', 400, 280)
    // ctx.strokeStyle = "black";
    // ctx.strokeStyle= 'violet'
    // ctx.stroke()
    
    
  }

  animate() {
    
    this.drawBackground(this.ctx)

    if (this.video) {
      if (this.video.currentTime === this.video.duration && this.player === true) {
        this.video.style.display ='none';
        this.player = false;
        this.flash = true;
        setTimeout(() => {
          debugger
          this.flash = false;
          this.flashcount = 0;
        }, 8000)
      }
    }  
    this.button.animate(this.ctx)
    this.button2.animate(this.ctx)
    this.button3.animate(this.ctx)
    this.button4.animate(this.ctx)
    this.button5.animate(this.ctx)
   

    if (this.instruction !== []) {
      this.instruction.forEach(letter => {
        if(letter.x <=45) {
          letter.draw(.5);
        } else if (!letter.timer) {
          letter.setTimer()
          letter.draw();
        } else if (!letter.moveback) {
          letter.draw();
        } else if (letter.moveback) {
          if (letter.x <= -5) {
            debugger
            this.instruction = [];
          }
          letter.draw(.5)
          
        }
      })
    }
    
    
    if (this.game !== undefined) {
      this.score = this.game.score
    }

    this.drawScore()

  
    requestAnimationFrame(this.animate);
  }

  drawScore() {
    
    //loc will be the location 
    if (this.score !== undefined && !this.flash) {
      this.ctx.clearRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 60)
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 70)
      const loc = {x: this.dimensions.width / 2, y: this.dimensions.height / 4}
      this.ctx.font = "20pt Century Gothic";
      this.ctx.fillStyle = 'silver';
      this.ctx.fillText('Score:', 320, 280);
      this.ctx.fillText(this.score, 400, 280)
      this.ctx.strokeStyle = "black";
      // this.ctx.lineWidth = 2;
      // this.ctx.strokeText(this.score, loc.x, loc.y);
    } else if (this.score !== undefined && this.flash) {
      debugger
      if (this.flashcount < 10 || (this.flashcount> 40 && this.flashcount < 70) || (this.flashcount> 100 && this.flashcount < 130) || (this.flashcount> 160 && this.flashcount < 190) || (this.flashcount> 220 && this.flashcount < 250) || (this.flashcount> 280 && this.flashcount < 310) || (this.flashcount> 340 && this.flashcount < 370) ||(this.flashcount> 400 && this.flashcount < 430) ||(this.flashcount> 460 && this.flashcount < 490)) {
        this.ctx.clearRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 60)
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 70)
        const loc = {x: this.dimensions.width / 2, y: this.dimensions.height / 4}
        this.ctx.font = "20pt Century Gothic";
        this.ctx.fillStyle = 'silver';
        this.ctx.fillText('Score:', 320, 280);
        this.ctx.fillText(this.score, 400, 280)
        this.ctx.strokeStyle = "black";
        this.flashcount +=1
      } else {
        this.ctx.clearRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 60)
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(this.dimensions.width/2, this.dimensions.height / 6, 60, 70)
        const loc = {x: this.dimensions.width / 2, y: this.dimensions.height / 4}
        this.ctx.font = "20pt Century Gothic";
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('Score:', 320, 280);
        this.ctx.fillText(this.score, 400, 280)
        this.ctx.strokeStyle = "black";
        this.flashcount +=1
      }
    }
  }

 
}