
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
    x: 235,
    y: 125,
    size: 0.25,
    petals: 22,
    type: "hsla(340,80%,65%,.4)",
  };
  flower2 = {
    x: 300,
    y: 250,
    size: 0.5,
    petals: 11,
    type: "hsla(95,80%,65%,.55)",
  };
  flower3 = {
    x: 50,
    y: 175,
    size: 0.55,
    petals: 44,
    type: "hsla(75,80%,65%,.6)",
  };
  flower4 = {
    x: 350,
    y: 35,
    size: 0.45,
    petals: 33,
    type:"hsla(40,80%,65%,.7)",
  };
  flower5 = {
    x: 170,
    y: 300,
    size: 0.75,
    petals: 11,
    type:"hsla(225,80%,65%,.4)",

  };
  flower6 = {
    x: 130,
    y: 30,
    size: 0.7,
    petals: 22,
    type: "hsla(55,100%,75%,.55)",
  };
}

function draw() {
  background("hsla(60,90%,65%,1)");
  push();
  
  for (let rowCount = 0; rowCount < 5; rowCount++) {
    push();
    for (let tileCount = 0; tileCount < 5; tileCount++) {
    
    push();
    scale(0.2);
    addFlower(flower1);
    addFlower(flower2);
    addFlower(flower3);
    addFlower(flower4);
    addFlower(flower5);
    addFlower(flower6);
      
    //just some extra flowers i had previously filled in
 /* push();
  translate(18, 30);
  scale(0.3);
  addFlower(flower1);
  pop();
  translate(-10, -150);
  scale(0.18);
  addFlower(flower2);
*/
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

