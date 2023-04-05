//I changed the code from last time by moving the flower objects in the tile function, directly into the nested for() loops in the draw function. this way seemed like what I should have done? but I'm not sure which is technically a better practice or even more efficient.

let tileCount;
let tileWidth;
let tileHeight;

function setup() {
  noLoop();
  createCanvas(400, 400);
  tileCount = 5;
  tileSize = width / tileCount;

  //flower objects
  flower1 = {
    x: 200,
    y: 100,
    size: 0.25,
    petals: 22,
    type: "hsla(75,80%,65%,.7)",
  };
  flower2 = {
    x: 300,
    y: 250,
    size: 0.5,
    petals: 11,
    type: "hsla(75,80%,65%,.5)",
  };
  flower3 = {
    x: 80,
    y: 175,
    size: 0.45,
    petals: 44,
    type: "hsla(75,80%,65%,.5)",
  };
  flower4 = {
    x: 350,
    y: 35,
    size: 0.35,
    petals: 33,
    type: "hsla(85,80%,65%,.5)",
  };
  flower5 = {
    x: 150,
    y: 300,
    size: 0.75,
    petals: 11,
    type: "hsla(105,80%,65%,.5)",
  };
  flower6 = {
    x: 100,
    y: 30,
    size: 0.7,
    petals: 22,
    type: "hsla(65,80%,65%,.45)",
  };
}

function draw() {
  background("hsla(60,90%,65%,1)");
  push();
  
  for (let rowCount = 0; rowCount < 5; rowCount++) {
    push();
    for (let tileCount = 0; tileCount < 5; tileCount++) {
    //formerly called
      //flowerTile(0, 0, 0.2);
      push();
  //translate(x, y);
  scale(0.2);
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
  addFlower(flower4);
  addFlower(flower5);
  addFlower(flower6);
  push();
  translate(18, 30);
  scale(0.3);
  addFlower(flower1);
  pop();
  translate(-10, -150);
  scale(0.18);
  addFlower(flower2);

  pop();
      translate(tileSize, 0);
    }
    pop();
    translate(0, tileSize);
  }
  pop();
}

function addFlower(flower) {
  push();
  noStroke();
  translate(flower.x, flower.y);
  scale(flower.size);
  //rotate(flower.angle)
  push();
  for (let petalsDrawn = 0; petalsDrawn < flower.petals; petalsDrawn++) {
    fill(flower.type);
    arc(0, 0, 90, 320, 80, 290);
    translate(40, 25);
    rotate(20);
  }
  pop();
  pop();
}

/*
//initially I made a single tile that covered the whole canvas, and then called it in the draw function, in the nested for()loops to make a grid of this one tile. 
function flowerTile(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
  addFlower(flower4);
  addFlower(flower5);
  addFlower(flower6);
  push();
  translate(18, 30);
  scale(1.5);
  addFlower(flower1);
  pop();
  translate(-10, -150);
  scale(0.9);
  addFlower(flower2);

  pop();
}
*/
