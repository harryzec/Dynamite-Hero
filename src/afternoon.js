import Note from './note'

export default class Afternoon {
  constructor(ctx, dimensions, b1, b2, b3, b4, b5) {
    this.score = 0;
    this.button = b1;
    this.button2 = b2;
    this.button3 = b3;
    this.button4 = b4;
    this.button5 = b5;
    this.clickA = null;
    this.clickS = null;
    this.clickD = null;
    this.clickF = null;
    this.clickG = null;
    this.dimensions = dimensions 
    this.streak = 0;
    this.ctx = ctx
    this.unclick = this.unclick.bind(this)
    this.click = this.click.bind(this);
    this.notesInfo = [ {key: 'A', seconds: 6.1, tail: 30}, {key: 'S', seconds: 6.6, tail: 0}, {key: 'D', seconds: 6.8, tail: 0},
    {key: 'F', seconds: 7.0, tail: 0}, {key: 'G', seconds: 7.2, tail: 50}, {key: 'A', seconds: 8.0, tail: 30}, {key: 'S', seconds: 8.5, tail: 0},
    {key: 'A', seconds: 8.7, tail: 0}, {key: 'S', seconds: 8.9, tail: 0}, {key: 'D', seconds: 9.1, tail: 0}, {key: 'F', seconds: 9.3, tail: 0},
    {key: 'A', seconds: 9.9, tail: 30}, {key: 'S', seconds: 10.3, tail: 0}, {key: 'D', seconds: 10.5, tail: 0},
    {key: 'F', seconds: 10.7, tail: 0}, {key: 'G', seconds: 10.9, tail: 50},
    {key: 'A', seconds: 11.6, tail: 30}, {key: 'S', seconds: 12, tail: 0},
    {key: 'A', seconds: 12.2, tail: 0}, {key: 'S', seconds: 12.4, tail: 0}, {key: 'D', seconds: 12.6, tail: 0}, {key: 'F', seconds: 12.8, tail: 0},
    {key: 'G', seconds: 13, tail: 0}, {key: 'F', seconds: 13.2, tail: 20}, {key: 'D', seconds: 13.6, tail: 0}, {key: 'S', seconds: 13.9, tail: 30},
    {key: 'S', seconds: 14.3, tail: 30}, {key: 'D', seconds: 14.8, tail: 0}, {key: 'A', seconds: 15.3, tail: 50}, {key: 'S', seconds: 15.8, tail: 50},
    {key: 'D', seconds: 16.2, tail: 50}, {key: 'F', seconds: 16.7, tail: 30}, {key: 'A', seconds: 17.0, tail: 0}, {key: 'S', seconds: 17.2, tail: 470},
    {key: 'D', seconds: 21, tail: 0},  {key: 'D', seconds: 21.2, tail: 0}, {key: 'D', seconds: 21.4, tail: 0}, {key: 'S', seconds: 21.6, tail: 0},
    {key: 'D', seconds: 21.8, tail: 0}, {key: 'S', seconds: 22, tail: 0}, {key: 'D', seconds: 22.2, tail: 0}, {key: 'S', seconds: 22.4, tail: 0}, {key: 'D', seconds: 22.6, tail: 0},
    {key: 'G', seconds: 23.5, tail: 30}, {key: 'D', seconds: 23.5, tail: 30}, {key: 'G', seconds: 23.8, tail: 0}, {key: 'D', seconds: 23.8, tail: 0}, 
    {key: 'S', seconds: 24.1, tail: 50}, {key: 'F', seconds: 24.1, tail: 50}, {key: 'D', seconds: 24.7, tail: 0}, {key: 'S', seconds: 24.9, tail: 0}, {key: 'D', seconds: 25.1, tail: 0}, {key: 'A', seconds: 25.3, tail: 0}, 
    {key: 'D', seconds: 25.5, tail: 0}, {key: 'S', seconds: 25.7, tail: 0},{key: 'D', seconds: 25.9, tail: 20},{key: 'A', seconds: 26.2, tail: 0}, {key: 'D', seconds: 26.4, tail: 50}, {key: 'A', seconds: 27, tail: 50},
    {key: 'D', seconds: 27, tail: 50},  {key: 'S', seconds: 27.5, tail: 0}, {key: 'F', seconds: 27.5, tail: 0}, {key: 'D', seconds: 27.7, tail: 50}, {key: 'G', seconds: 27.7, tail: 50},  {key: 'F', seconds: 28.2, tail: 0}, {key: 'F', seconds: 28.4, tail: 0}, 
    {key: 'F', seconds: 28.6, tail: 0}, {key: 'F', seconds: 29.1, tail: 0}, {key: 'F', seconds: 29.3, tail: 0}, {key: 'F', seconds: 29.5, tail: 0}, {key: 'A', seconds: 29.7, tail: 50},{key: 'S', seconds: 29.9, tail: 50}, {key: 'G', seconds: 30.6, tail: 50},
    {key: 'D', seconds: 30.6, tail: 50}, {key: 'F', seconds: 31.1, tail: 0}, {key: 'S', seconds: 31.1, tail: 0}, {key: 'D', seconds: 31.3, tail: 50}, {key: 'A', seconds: 31.3, tail: 50}, {key: 'F', seconds: 31.9, tail: 0}, {key: 'F', seconds: 32.1, tail: 0},
    {key: 'D', seconds: 32.3, tail: 0},{key: 'F', seconds: 32.5, tail: 0}, {key: 'D', seconds: 32.7, tail: 0}, {key: 'F', seconds: 33, tail: 0}, {key: 'A', seconds: 33.3, tail: 50}, {key: 'S', seconds: 33.8, tail: 50}, {key: 'D', seconds: 34.2, tail: 50},
    {key: 'S', seconds: 34.6, tail: 0}, {key: 'S', seconds: 35.4, tail: 0}, {key: 'S', seconds: 35.6, tail: 0}, {key: 'D', seconds: 35.8, tail: 0}, {key: 'A', seconds: 36, tail: 0}, {key: 'S', seconds: 36.2, tail: 0}, {key: 'S', seconds: 36.4, tail: 0}, {key: 'D', seconds: 36.6, tail: 0},
    {key: 'A', seconds: 36.8, tail: 0}, {key: 'S', seconds: 37, tail: 0}, {key: 'A', seconds: 37.9, tail: 40}, {key: 'S', seconds: 38.2, tail: 40}, {key: 'D', seconds: 38.5, tail: 40}, {key: 'D', seconds: 38.9, tail: 0}, {key: 'D', seconds: 39.1, tail: 0}, 
    {key: 'F', seconds: 39.3, tail: 0}, {key: 'D', seconds: 39.5, tail: 0}, {key: 'D', seconds: 39.7, tail: 0}, {key: 'F', seconds: 39.9, tail: 0}, {key: 'D', seconds: 40.1, tail: 0},  {key: 'F', seconds: 40.4, tail: 0}, {key: 'D', seconds: 40.6, tail: 0},  , 
    
  ]
    
    this.notes = [];

    

    this.lane = {A: [], S: [], D: [], F: [], G: []}
    
 
    this.notesInfo.forEach(note => {
      setTimeout(
        ()=>{      
          let newnote = new Note(this.dimensions.width, this.dimensions.height, this.ctx, note.key, note.tail)
          this.notes.push(newnote)
          this.lane[note.key].push(newnote)}, 
        (note.seconds*1000))
    })

    


    this.animate = this.animate.bind(this)
    this.registerEvents();
    this.animate(this.ctx)
  }

  // createNote(){
  //   
  //   this.note = new Note({x: (this.dimensions.width), y: (this.dimensions.height/2)}, this.ctx, 'A')
  // }

  registerEvents() {
    document.addEventListener("keydown", this.click, false);
    document.addEventListener("keyup", this.unclick, false);
  }

  unclick(e) {
  
    if (e.code === 'KeyA' && this.clickA !== null) {

        let idx = this.notes.indexOf(this.clickA);
        let idx2 = this.lane['A'].indexOf(this.clickA);
        this.lane['A'] = [].concat(this.lane['A'].slice(0, idx2), this.lane['A'].slice(idx2 +1))
        this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
        this.clickA = null;
        this.score+=1;

        if (this.streak <= 3) {
          this.streak += 1;
        }
        
     } else if (e.code === 'KeyS' && this.clickS !== null) {
    
         let idx = this.notes.indexOf(this.clickS);
         let idx2 = this.lane['S'].indexOf(this.clickS)
         this.lane['S'] = [].concat(this.lane['S'].slice(0, idx2), this.lane['S'].slice(idx2 +1))
         this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
         this.clickS = null;
         this.score+=1;

         if (this.streak <= 3) {
          this.streak += 1;
        }
     } else if (e.code === 'KeyD' && this.clickD !== null) {

         let idx = this.notes.indexOf(this.clickD);
         let idx2 = this.lane['D'].indexOf(this.clickD)
         this.lane['D'] = [].concat(this.lane['D'].slice(0, idx2), this.lane['D'].slice(idx2 +1))
         this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
         this.clickD = null;
         this.score+=1;

         if (this.streak <= 3) {
          this.streak += 1;
        }
     } else if (e.code === 'KeyF' && this.clickF !== null) {
         let idx = this.notes.indexOf(this.clickF);
         let idx2 = this.lane['F'].indexOf(this.clickF)
         this.lane['F'] = [].concat(this.lane['F'].slice(0, idx2), this.lane['F'].slice(idx2 +1))
         this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
         this.clickF = null;
         this.score+=1;

         if (this.streak <= 3) {
          this.streak += 1;
        }
     } else if (e.code === 'KeyG' && this.clickG !== null) {
         let idx = this.notes.indexOf(this.clickG);
         let idx2 = this.lane['G'].indexOf(this.clickG)
         this.lane['G'] = [].concat(this.lane['G'].slice(0, idx2), this.lane['G'].slice(idx2 +1))
         this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
         this.clickG = null;  
         this.score+=1;

         if (this.streak <= 3) {
          this.streak += 1;
        }
     }
  }

  click(e) {
    if (e.code ==='KeyA') {
      this.lane['A'].forEach(note => {
        if (note.hit === false && note.singlehitter === false) {
          if (note.conflict(this.button)) {
            if(note.tail === 0) {
              note.singlehitter = true
              note.singlehit(this.ctx)
              this.score+=1;
              
              
              if (this.streak <= 3) {
                this.streak += 1;
              }

              setTimeout(()=>{
                let idx = this.notes.indexOf(note);
                let idx2 = this.lane['A'].indexOf(note);
                this.lane['A'] = [].concat(this.lane['A'].slice(0, idx2), this.lane['A'].slice(idx2 +1))
                this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
              }, 200)
            } else {
              this.clickA = note
              note.hit = true;
            }
            
          }
        
        }
      })
    }
    if (e.code ==='KeyS') {
      this.lane['S'].forEach(note => {
        if (note.hit === false && note.singlehitter === false ) {
          if (note.conflict(this.button2)) {
            if(note.tail === 0) {
              
              note.singlehitter = true
              note.singlehit(this.ctx)
              this.score+=1;

              

              if (this.streak <= 3) {
                this.streak += 1;
              }

              setTimeout(()=>{
                let idx = this.notes.indexOf(note);
                let idx2 = this.lane['S'].indexOf(note);
                this.lane['S'] = [].concat(this.lane['S'].slice(0, idx2), this.lane['S'].slice(idx2 +1))
                this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
              }, 200)
              
            } else {
              this.clickS = note
              note.hit = true;
            }
            
          }
        
        }
      })
    }
    if (e.code ==='KeyD') {
      this.lane['D'].forEach(note => {
        if (note.hit === false && note.singlehitter === false) {
          if (note.conflict(this.button3)) {
            if(note.tail === 0) {

              
              
              note.singlehitter = true
              note.singlehit(this.ctx)
              this.score+=1;

              if (this.streak <= 3) {
                this.streak += 1;
              }
             

              setTimeout(()=>{
                
              
                let idx = this.notes.indexOf(note);
                let idx2 = this.lane['D'].indexOf(note);
                this.lane['D'] = [].concat(this.lane['D'].slice(0, idx2), this.lane['D'].slice(idx2 +1))
                this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
              }, 200)
              
            } else {
              this.clickD = note
              note.hit = true;
            }
            
          }
        
        }
      })
    }

    if (e.code ==='KeyF') {
      this.lane['F'].forEach(note => {
        if (note.hit === false && note.singlehitter === false) {
          if (note.conflict(this.button4)) {
            if(note.tail === 0) {
              note.singlehitter = true
              note.singlehit(this.ctx)
              this.score+=1;

              if (this.streak <= 3) {
                this.streak += 1;
              }

              setTimeout(()=>{
                let idx = this.notes.indexOf(note);
                let idx2 = this.lane['F'].indexOf(note);
                this.lane['F'] = [].concat(this.lane['F'].slice(0, idx2), this.lane['F'].slice(idx2 +1))
                this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
              }, 200)
              
            } else {
              this.clickF = note
              note.hit = true;
            }
            
          }
        
        }
      })
    }
    if (e.code ==='KeyG') {
      this.lane['G'].forEach(note => {
        if (note.hit === false && note.singlehitter === false) {
          if (note.conflict(this.button5)) {
            if(note.tail === 0) {
              note.singlehitter = true
              note.singlehit(this.ctx)
              this.score+=1;

              if (this.streak <= 3) {
                this.streak += 1;
              }

              setTimeout(()=>{
                let idx = this.notes.indexOf(note);
                let idx2 = this.lane['G'].indexOf(note);
                this.lane['G'] = [].concat(this.lane['G'].slice(0, idx2), this.lane['G'].slice(idx2 +1))
                this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
              }, 200)
  
            } else {
              this.clickG = note
              note.hit = true;
            }
            
          }
        
        }
      })
    }
  }

  organizeNotes() {
    
    if (this.notes.length > 0) {
      
      if (this.notes[0].right <= 0) {
     
        let but = this.notes[0].button
        this.notes.shift();
        this.lane[but].shift()
        if (this.streak >= -3) {
          this.streak -= 1;
        };
      }
    }
  }



  animate() {
  

    this.organizeNotes()
 
    if (this.notes.length > 0) {
      this.notes.forEach(note => {
        if (note.singlehitter) {
          note.animate(this.ctx)
        }
        else if (note.tail <= 0 && note.hit) {
          
          this.score +=2

          if (this.streak <= 3) {
            this.streak += 1;
          }

          let idx = this.notes.indexOf(note);

          this.notes = [].concat(this.notes.slice(0, idx), this.notes.slice(idx+1));
            if (note.button ==='A') {
              let idx2 = this.lane['A'].indexOf(note);
              this.lane['A'] = [].concat(this.lane['A'].slice(0, idx2), this.lane['A'].slice(idx2 +1))
              this.clickA = null;
            } else if(note.button ==='S') {
              let idx2 = this.lane['S'].indexOf(note);
              this.lane['S'] = [].concat(this.lane['S'].slice(0, idx2), this.lane['S'].slice(idx2 +1))
              this.clickS = null;
            } else if(note.button ==='D') {
              let idx2 = this.lane['D'].indexOf(note);
              this.lane['D'] = [].concat(this.lane['D'].slice(0, idx2), this.lane['D'].slice(idx2 +1))
              this.clickD = null;
            } else if(note.button ==='F') {
              let idx2 = this.lane['F'].indexOf(note);
              this.lane['F'] = [].concat(this.lane['F'].slice(0, idx2), this.lane['F'].slice(idx2 +1))
              this.clickF = null;
            } else if(note.button ==='G') {
              let idx2 = this.lane['G'].indexOf(note);
              this.lane['G'] = [].concat(this.lane['G'].slice(0, idx2), this.lane['G'].slice(idx2 +1))
              this.clickG = null;
            }
          
        } else {
          note.animate(this.ctx)
        }
        
      })
    }
    

    
    requestAnimationFrame(this.animate);
  }
}