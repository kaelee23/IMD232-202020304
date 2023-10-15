const bodies = [];
const bodyNum = 100;
const G = 0.4;
let showVector = false;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  reset();
}

function draw() {
  background(255);

  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let force = calculateGravitationalForce(bodies[i], bodies[j]);
        bodies[i].applyForce(force);
      }
    }
    bodies[i].update();
    bodies[i].display();
    if (showVector) {
      bodies[i].displayVectors();
    }
  }
}

function mousePressed() {
  reset();
}

function reset() {
  bodies.length = 0;

  for (let i = 0; i < bodyNum; i++) {
    // More than 100 objects
    let mass = random(16, 100);
    let rad = map(mass, 16, 100, 20, 50);

    let x = random(width);
    let y = random(height);

    let direction = createVector(width / 2, height / 2).sub(x, y);
    direction.normalize();

    let vel = direction.mult(2);

    bodies.push(new Body(x, y, mass, rad, vel));
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    showVector = !showVector;
  }
}

function calculateGravitationalForce(body1, body2) {
  let force = p5.Vector.sub(body2.pos, body1.pos);
  let distance = force.mag();
  let strength = (G * body1.mass * body2.mass) / (distance * distance);
  force.setMag(strength);
  return force;
}
