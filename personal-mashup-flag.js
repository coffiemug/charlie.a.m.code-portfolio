// Congo democratic republic flag + Mongolia flag
// I chose the mongolia flag first because of the yin yang type symbol, which is very similar to the pisces symbol which is my star sign (my birthday is 2/28!) 
// after this I knew I wanted a star symbol and another color, like a different shade of blue, so I chose Congo

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();

  //SKY BLUE
  fill("dodgerblue");
  rect(0, 0, 600, 140);

  //CALLING CUSTOM FUNCTIONS
  horizon(0, 140);
  star(130, 0);
  star(500, -200);
  pisces(300, 150, 1.7);
  crescentMoon(450, 50, 0.8);

  //WATER BLUE
  fill("hsl(220,80%,40%)");
  rect(0, 220, 600, 190);

  //WAVE HIGHLIGHT
  fill("hsla(55,90%,55%,1)");
  triangle(150, 290, 200, 285, 260, 290);
  triangle(250, 250, 315, 245, 360, 250);
  triangle(350, 260, 410, 257, 450, 260);
  fill("hsla(10,100%,55%,1)");
  triangle(50, 370, 180, 365, 330, 370);
  triangle(400, 320, 450, 312, 550, 320);
}


function horizon(x, y) {
  push();
  translate(x, y);
  fill("hsla(55,90%,55%,1)");
  rect(0, -10, 600, 90);

  fill("hsla(355,100%,50%,.75)");
  rect(0, 0, 722, 75);
  pop();
}

function star(x, y) {
  push();
  fill("hsla(60,100%,70%,1)");
  rotate(35);
  translate(x, y);
  triangle(-15, 0, 0, 40, 15, 0);
  rotate(72);
  triangle(-15, 0, 0, 40, 15, 0);
  rotate(72);
  triangle(-15, 0, 0, 40, 15, 0);
  rotate(72);
  triangle(-15, 0, 0, 40, 15, 0);
  rotate(72);
  triangle(-15, 0, 0, 40, 15, 0);
  pop();
}

function pisces(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("hsla(10,100%,50%,1)");
  ellipse(0, 0, 110);

  noStroke();
  fill("hsla(55,90%,55%,1)");
  ellipse(0, 0, 100);

  fill("hsla(10,100%,50%,1)");
  stroke("hsla(10,100%,50%,1)");
  strokeWeight(4);
  noFill();
  arc(-6, -26, 60, 53, 280, 80);
  arc(6, 26, 60, 53, 90, 250);

  noStroke();
  fill("hsla(355,100%,50%,.75)");
  ellipse(0, 26, 17);
  ellipse(0, -26, 17);
  pop();
}

function crescentMoon(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("hsla(55,90%,55%,1)");
  ellipse(0, 0, 95);
  fill("dodgerblue");
  ellipse(-11, -8, 95);
  pop();
}
