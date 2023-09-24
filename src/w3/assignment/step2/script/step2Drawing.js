let pos;
let vel;
let acc;
let mouse;
let center;
let rad = 30;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  reset();
}

function draw() {
  background('white');
  update();
  display();
}

function reset() {
  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
  center = createVector(rad.x, rad.y);
}

function update() {
  mouse = createVector(mouseX, mouseY);
  let mouseTopos = p5.Vector.sub(mouse, pos);
  mouseTopos.add(2);
  let posToVel = p5.Vector.sub(mouseTopos, vel);
  posToVel.limit(0.1);
  acc.add(posToVel);

  vel.add(acc);
  vel.limit(8);
  pos.add(vel);
  acc.mult(0);

  pos.x = constrain(pos.x, rad, width - rad);
  pos.y = constrain(pos.y, rad, height - rad);
}

function display() {
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 2 * rad);

  stroke(100);
  strokeWeight(2);
  line(pos.x, pos.y, mouseX, mouseY);
}
