let center;
let mouse;
let centerToMouse;
//위치
let pos;
//속력
let vel;
//가속도
let acc;
//속도
let spped;

function setup() {
  background(255);
  setCanvasContainer('canvas', 3, 2, true);

  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
  speed = createVector();
  center = createVector(circle / 2);
  centerToMouse = createVector();
  mouse = createVector();
}

function draw() {
  background(255);
  update();
  checkEdges();
  show();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(random());
  vel.add(acc);
  pos.add(vel);
  mouse.set(mouseX, mouseY);
  centerToMouse = p5.Vector.sub(mouse, center);
}

function show() {
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 60);
}

function checkEdges() {
  if (pos.x > width) {
    pos.x = 0;
  } else if (pos.x < 0) {
    pos.x = width;
  }

  if (pos.y > height) {
    pos.y = 0;
  } else if (pos.y < 0) {
    pos.y = height;
  }

  strokeWeight(2);
  stroke(0);
  line(pos.x, pos.y, mouse.x, mouse.y);

  mouse.mult(100);

  stroke('blue');
  strokeWeight(2);
  line(pos.x, pos.y, mouse.x, mouse.y);

  stroke('red');
  strokeWeight(2);
  line(vel.x, vel.y, mouse.x, mouse.y);
}
