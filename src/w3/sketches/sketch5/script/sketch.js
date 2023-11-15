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
  infiniteEdge();
  display();
}

function reset() {
  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
  mouse = createVector(mouseX, mouseY);
  center = createVector(rad, rad);
}

function update() {
  mouse.set(mouseX, mouseY);

  let randomAcc = p5.Vector.random2D();
  randomAcc.mult(random(2));
  acc = randomAcc;

  vel.add(acc);
  vel.limit(8);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  //원
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 2 * rad);

  //마우스
  stroke(100);
  strokeWeight(2);
  line(pos.x, pos.y, mouse.x, mouse.y);

  //가속도
  stroke('red');
  strokeWeight(2);
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);

  //속도
  stroke('blue');
  strokeWeight(2);
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
