let pos;
let vel;
let acc;
let rad = 50;
let centerToMouse;
let mouse;
let center;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  reset();
}

function draw() {
  background('white');
  update();
  infiniteEdge();
  display();
}

function reset() {
  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
  mouse = createVector(mouseX, mouseY);
  center = createVector(rad.x, rad.y);
  centerToMouse = createVector();
  //centerToVel = createVector();
  //centerToAcc = createVector();
}

function update() {
  acc.mult(1 / 100);
  vel.mult(1 / 10);
  acc = p5.Vector.random2D();
  acc.mult(random);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
  mouse.set(mouseX, mouseY);
  //centerToVel.limit(2);
  //centerToAcc.limit(2);
  centerToMouse = p5.Vector.sub(mouse, center);
  centerToAcc = p5.Vector.sub(acc, center);
  centerToVel = p5.Vector.sub(vel, center);

  //mouse.sub(center);
  //vel.sub(center);
  //acc.sub(center);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  //원
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 2 * rad);

  //마우스선
  translate(rad.x, rad.y);
  stroke(200);
  strokeWeight(2);
  line(pos.x, pos.y, mouse.x, mouse.y);

  //가속도(acc)선
  acc.mult(100);

  translate(rad.x, rad.y);
  stroke('red');
  strokeWeight(2);
  line(pos.x, pos.y, acc.x, acc.y);

  //속도(vel)선
  vel.mult(10);

  translate(rad.x, rad.y);
  stroke('blue');
  strokeWeight(2);
  line(pos.x, pos.y, vel.x, vel.y);
}
