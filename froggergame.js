let logArray = [];
let frong;
let hopLengthX;
let hopLengthY;
function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  frong = new Frog(width / 2, 375);
  hopLengthX = 15;
  hopLengthY = 45;
  let logRowArray = [40, 85, 130, 220, 265, 310];
  for (let logDown = 0; logDown < 10; logDown++) {
    logArray.push(
      new Log(
        random(width - 60),
        random(logRowArray),
        random(30, 60),
        random(1, 4)
      )
    );
  }
}

function draw() {
  background("yellowgreen");
  noStroke();
  fill("lightblue");
  rect(0, 40, width, 135);
  rect(0, 220, width, 135);
  frong.show();
  if (frong.y < 40) {
    fill("gold");
    stroke("rebeccapurple");
    textSize(32);
    text("ribbit, you win!", width - 290, height / 2);
  }

  for (let logsFloating = 0; logsFloating < logArray.length; logsFloating++) {
    logArray[logsFloating].show();
    logArray[logsFloating].move();
  }
}

class Log {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }
  move() {
    this.x = this.x + this.speed;
    if (this.x + this.size > width || this.x < 0) {
      this.speed = -this.speed;
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    stroke("peru");
    strokeWeight(3);
    fill("hsl(35,80%,30%)");
    rect(0, 0, this.size, 45);
    pop();
  }
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("olivedrab");
    //BODY
    ellipse(0, 0, 35);
    stroke("yellowgreen");
    //EYES
    ellipse(-13, -10, 15);
    ellipse(13, -10, 15);
    //feet
    triangle(-30, 17, -25, 7, -5, 24);
    triangle(30, 17, 25, 7, 5, 24);
    //LEGS
    push();
    rotate(-35);
    ellipse(-18, 0, 10, 30);
    pop();
    push();
    rotate(35);
    ellipse(18, 0, 10, 30);
    pop();
    noStroke();
    fill("lemonchiffon");
    ellipse(-13, -15, 10, 5);
    ellipse(13, -15, 10, 5);
    fill("rebeccapurple");
    ellipse(-12, -16, 4, 3);
    ellipse(12, -16, 4, 3);
    pop();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    frong.x = frong.x - hopLengthX;
  } else if (keyCode === RIGHT_ARROW) {
    frong.x = frong.x + hopLengthX;
  } else if (keyCode === UP_ARROW) {
    frong.y = frong.y - hopLengthY;
  } else if (keyCode === DOWN_ARROW) {
    frong.y = frong.y + hopLengthY;
  }
}
