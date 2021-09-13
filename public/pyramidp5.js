 console.log('wheres my js?')

function setup() {
    this.oscillator = new oscillator()
    this.b = 0;
    createCanvas(600, 600);
    background(0);
  }
  
  function draw() {
    // background(220);
    // clear()
    translate(300, 300)
    // fill(0, Math.random()*255, 0)
    for (let i = 1; i < 200; i+= 0.1){
     // if (Math.floor(10*Math.random())%9==0){
      
       circle(this.oscillator.x*5*i, this.oscillator.y*5*i/2 ,i%0.6*10);
       
      //}
       this.b = 0;
    }
    
   
    this.oscillator.oscillate()
  }
  
  class oscillator {
    constructor() {
      this.limit = 20;
      this.x = 0;
      this.y = 0;
      this.a = 360
      
    }
    
    oscillate() {
      this.a += 0.005;
      this.x = sin(this.a)
      this.y = cos(this.a)+abs(tan(this.a))
    }
  }
  