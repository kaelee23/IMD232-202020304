let pos;
let vel;
let acc;
let mouse;
let center;
let rad = 25;
let posToMouse;
let velTopos;
let mouseIsPressed;

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
  mouse = createVector();
}

function update() {
  mouse.set(mouseX, mouseY);
  posToMouse = p5.Vector.sub(mouse, pos);

  if (mouseIsPressed) {
    posToMouse.mult(-1);
  }

  posToMouse.add(2);
  velTopos = p5.Vector.sub(posToMouse, vel);
  velTopos.limit(0.1);
  acc.add(velTopos);

  vel.add(acc);
  vel.limit(8);
  pos.add(vel);
  acc.mult(0);
}

function display() {
  noStroke();
  fill('red');
  circle(mouseX, mouseY, 20);

  //원
  noStroke();
  fill(0);
  circle(pos.x, pos.y, 2 * rad);

  //마우스
  stroke(100);
  strokeWeight(2);
  line(pos.x, pos.y, mouseX, mouseY);

  //속도
  stroke('blue');
  strokeWeight(2);
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
