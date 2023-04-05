
let tileCount;
let tileWidth;
let tileHeight;

function setup() {
  noLoop();
  createCanvas(400, 400);
  tileCount = 5;
  tileSize = width / tileCount;
  flowerTypeColor = [
    "hsla(55,100%,75%,.75)",
    "hsla(40,80%,65%,.7)",
    "hsla(340,80%,65%,.4)",
    "hsla(225,80%,65%,.4)",
    "hsla(85,80%,65%,.55)",
  ];

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
    type: "hsla(75,80%,65%,.7)",
  };
  flower3 = {
    x: 80,
    y: 175,
    size: 1,
    petals: 44,
    type: "hsla(75,80%,65%,.6)",
  };
  flower4 = {
    x: 350,
    y: 35,
    size: 0.35,
    petals: 33,
    type: "hsla(75,80%,65%,.7)",
  };
  flower5 = {
    x: 150,
    y: 300,
    size: 0.75,
    petals: 11,
    type: "hsla(75,80%,65%,.7)",
  };
  flower6 = {
    x: 100,
    y: 30,
    size: 0.7,
    petals: 22,
    type: "hsla(75,80%,65%,.7)",
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
      flower1.type = random(flowerTypeColor);
      flower2.type = random(flowerTypeColor);
      flower4.type = random(flowerTypeColor);
      flower5.type = random(flowerTypeColor);
      flower6.type = random(flowerTypeColor);

        //only flower that always stays green
      flower3.size = random(0.2, 1);
      
      flower1.x = random(width);
      flower1.y = random(height);
      flower2.x = random(width);
      flower2.y = random(height);
      flower3.x = random(width);
      flower3.y = random(height);
      flower4.x = random(width);
      flower4.y = random(height);
      flower5.x = random(width);
      flower5.y = random(height);
      flower6.x = random(width);
      flower6.y = random(height);
      
      

      addFlower(flower1);
      addFlower(flower2);
      addFlower(flower3);
      addFlower(flower4);
      addFlower(flower5);
      addFlower(flower6);
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

