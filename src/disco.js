import Particle from "./particles";
import { game } from './index'

export default class Disco {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.particles = [];

    for (let i=0; i <130; i++) {
      if (i %3 === 0) {
      this.particles.push(new Particle(this.ctx, this.dimensions.width/2, this.dimensions.height/2, 5, 'pink'))
      } else if (i%3 === 1) {
      this.particles.push(new Particle(this.ctx, this.dimensions.width/2, this.dimensions.height/2, 5, 'silver'))
      } else {
        this.particles.push(new Particle(this.ctx, this.dimensions.width/2, this.dimensions.height/2, 5, 'purple'))

      }
    }

    this.animate()
    
  }

  animate(){
    const current = game
   
    if (current.game){
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
    // this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
    // this.ctx.arc(this.dimensions.width/2, this.dimensions.height/2, this.dimensions.width/2, 0, Math.PI*2, false)
    // this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'

    // this.ctx.fillStyle = 'black'
    // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height)
    
    this.particles.forEach(particle=>{
      particle.update(current.game.streak);
    })

    this.ctx.beginPath();
    this.ctx.arc(this.dimensions.width/2, this.dimensions.height/2, (this.dimensions.width/2)-3, 0, Math.PI*2, false);
    this.ctx.strokeStyle = 'silver';
    this.ctx.stroke();
    this.ctx.lineWidth ='2';
    this.ctx.closePath();
  }
    requestAnimationFrame(this.animate.bind(this));
  }

  
} 