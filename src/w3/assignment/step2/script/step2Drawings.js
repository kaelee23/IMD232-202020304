let pos;
let vel;
let acc;
let mouse;
let center;
let centerToMouse;
let centerToVel;
let centerToAcc;
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
  mouse = createVector(mouseX, mouseY);
  center = createVector(rad.x, rad.y);
  centerToMouse = createVector();
  centerToVel = createVector();
  centerToAcc = createVector();
}

function update() {
  mouse = p5.Vector.random2D();
  mouse.mult(random * -10);
  vel.add(mouse);
  vel.limit(8);
  pos.add(mouse);
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
  centerToAcc = p5.Vector.sub(acc, center);
  centerToVel = p5.Vector.sub(vel, center);
}

function display() {
  //원
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 2 * rad);

  //마우스선
  translate(rad.x, rad.y);
  stroke(100);
  strokeWeight(2);
  line(pos.x, pos.y, centerToMouse.x, centerToMouse.y);

  //속도(vel)선
  //translate(rad.x, rad.y);
  //centerToVel.normalize();
  //centerToVel.mult(10);
  //stroke('blue');
  //strokeWeight(2);
  //line(pos.x, pos.y, centerToVel.x, centerToVel.y);
}
