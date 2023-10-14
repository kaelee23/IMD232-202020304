let mover;
let gravity;
let mVec;
let pMVec;
let isDragging = false;
let initialPos;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2, 40);
  gravity = createVector(0, 0.2);
  mVec = createVector();
  pMVec = createVector();
  initialPos = createVector(mover.pos.x, mover.pos.y);
}

function draw() {
  background(255);

  if (!isDragging) {
    const force = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(force);
    mover.update();
    mover.edgeBounce();
    mover.display();
  } else {
    const direction = createVector(mouseX - mover.pos.x, mouseY - mover.pos.y);
    const dragForce = direction.copy().normalize().mult(0.2);

    mover.applyForce(dragForce);
    mover.update();
    mover.display();
  }
}

function mousePressed() {
  if (mover.isHover) {
    isDragging = true;
    initialPos.set(mover.pos.x, mover.pos.y);
  }
}

function mouseDragged() {
  if (isDragging) {
    mover.pos.set(mouseX, mouseY);
  }
}

function mouseReleased() {
  if (isDragging) {
    isDragging = false;
  }
}
