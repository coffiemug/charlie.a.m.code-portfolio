let groundLevel;
let puppyHeight;
let textOffset;
let puppyX;

let boneX;
let boneY;
let boneThrowSpeed;
let boneAngle;

let boneThrown;
let boneIsCaught;

function setup() {
  angleMode(DEGREES);

  //sprite related variables
  groundLevel = 325;
  puppyHeight = 60;
  puppyX = 170;
  textOffset = 30;
  textPosition = random(0, 11);

  //bone variables
  boneX = random(5, 396);
  boneY = -40;
  boneThrowSpeed = random(3, 9);
  boneAngle = random(-20, 75);

  boneThrown = false;
  boneIsCaught = false;

  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background("skyblue");
  noStroke();
  fill("hsl(85,60%,50%)");
  rect(0, groundLevel, width, 100);

  puppy(puppyX, groundLevel, 0.75);
  bone(boneX, boneY, 1, boneAngle);

  push();
  if (boneThrown == true) {
    boneY = boneY + boneThrowSpeed;
    puppyX = mouseX;
  }
  pop();

  push();

  if (boneY >= groundLevel) {
    boneIsCaught = false;
  }
  if (
    boneY >= groundLevel &&
    boneY <= 400 &&
    boneX >= mouseX - 15 &&
    boneX <= mouseX + 40
  ) {
    boneIsCaught = true;
  }
  if (boneIsCaught == true) {
    woof(random(0, 2), random(0, 4), 1);

    boneX = random(5, 396);
    boneY = -40;
    boneThrowSpeed = random(3, 9);
    boneAngle = random(-20, 75);

    boneThrown = false;
    boneIsCaught = false;
  }
  if (boneIsCaught == false) {
    boneY = boneY;
  }
  if (boneIsCaught == false && boneY >= 400) {
    boneX = random(5, 396);
    boneY = -40;
    boneThrowSpeed = random(3, 9);
    boneAngle = random(-20, 75);

    boneThrown = false;
    boneIsCaught = false;
  }

  pop();
}

//sprite functions, catcher
function puppy(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("peru");
  ellipse(0, 0, 60, 40);
  rect(0, 10, 75, 40);

  ellipse(5, 55, 10, 35);
  ellipse(25, 55, 10, 50);
  ellipse(50, 55, 10, 35);
  ellipse(70, 55, 10, 50);

  ellipse(2, 67, 13);
  ellipse(22, 74, 13);
  ellipse(47, 67, 13);
  ellipse(67, 74, 13);

  ellipse(75, 10, 10, 20);
  ellipse(25, -15, 20, 10);
  ellipse(-20, -20, 20, 10);

  fill("hsl(65,40%,20%)");
  ellipse(-15, 5, 10);
  ellipse(-20, -2, 7);
  ellipse(5, 0, 7);
  pop();
}

//change to catcher, signalling that a bone was caught
function woof(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noFill();
  stroke("hsl(355,70%,60%)");
  strokeWeight(6);
  beginShape();
  vertex(mouseX - 30, groundLevel - puppyHeight);
  vertex(mouseX - 22, groundLevel - puppyHeight + 13);
  vertex(mouseX - 20, groundLevel - puppyHeight + 2);
  vertex(mouseX - 13, groundLevel - puppyHeight + 10);
  vertex(mouseX - 10, groundLevel - puppyHeight - 2);
  endShape();

  ellipse(mouseX + 4, groundLevel - puppyHeight + 6, 17);
  ellipse(mouseX + 27, groundLevel - puppyHeight + 8, 17);

  beginShape();
  vertex(mouseX + 42, groundLevel - puppyHeight + 15);
  vertex(mouseX + 42, groundLevel - puppyHeight);
  vertex(mouseX + 48, groundLevel - puppyHeight - 1);
  endShape();
  line(
    mouseX + 42,
    groundLevel - puppyHeight + 10,
    mouseX + 46,
    groundLevel - puppyHeight + 10
  );

  line(
    mouseX + 58,
    groundLevel - puppyHeight + 10,
    mouseX + 59,
    groundLevel - puppyHeight
  );
  point(mouseX + 58, groundLevel - puppyHeight + 20);
  pop();
}

//falling object function
function bone(x, y, size, angle) {
  push();
  translate(x, y);
  scale(size);
  rotate(angle);
  noStroke();
  fill("lightyellow");
  ellipse(0, 0, 10);
  ellipse(-5, 5, 10);
  quad(1, 0, 21, 30, 15, 35, -6, 5);
  ellipse(16, 35, 10);
  ellipse(20, 30, 10);
  pop();
}

function mousePressed() {
  boneThrown = true;
  boneIsCaught = false;
}
