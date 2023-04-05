function setup() {
  createCanvas(400, 400);
  ellipseMode(CORNER);
}

function draw() {
  background("tomato");
  helloSkeleton(75, 10, 1);
  if (mouseIsPressed) {
    ha();
  }
}

function helloSkeleton(x, y, size) {
  fill("lightyellow");
  noStroke();

  translate(x, y);
  scale(size);

  ellipse(0, 0, 250);
  rect(50, 150, 150);
  fill("hsl(220,10%,30%)");
  ellipse(140, 110, 65, 60);
  ellipse(40, 110, 65, 60);

  triangle(120, 190, 125, 160, 130, 190);
  stroke("hsl(220,10%,30%)");
  line(50, 250, 200, 250);
  line(50, 251, 200, 251);
  line(50, 252, 200, 252);

  line(80, 230, 80, 300);
  line(110, 230, 110, 300);
  line(140, 230, 140, 300);
  line(170, 230, 170, 300);

  noStroke();
  fill("beige");
  rect(100, 300, 50, 20);
  rect(100, 330, 50, 30);
  rect(100, 370, 50, 25);

  fill("hsl(220,10%,30%)");
  rect(110, 320, 30, 10);
  rect(110, 360, 30, 10);
  rect(110, 395, 30, 5);

  fill("lightyellow");
  ellipse(-70, 350, 150, 30);
  ellipse(170, 350, 150, 30);
}

function ha() {
  fill("hsl(220,10%,30%)");
  rect(50, 243, 150, 40);
  ellipse(140, 105, 65, 70);
  ellipse(40, 105, 65, 70);
}
