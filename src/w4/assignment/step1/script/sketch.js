let bodies = [];
let G = 1;
let bodyNum = 30;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
  background(255);
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let forceForJ = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(forceForJ);
      }
    }
    bodies[i].update();
    bodies[i].display();
  }
}

function mousePressed() {
  if (isMouseInsideCanvas()) {
    reset();
  }
}

function reset() {
  bodies.length = 0;
  for (let i = 0; i < bodyNum; i++) {
    let mass = random(16, 100);
    let rad = random(mass, 16, 100, 20, 50);
    bodies[i] = new Body(random(width), random(height), mass, rad);
  }
}
