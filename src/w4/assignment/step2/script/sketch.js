let moverA;
let gravity;
let drag;
let pmouseX;
let pmouseY;
let 

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.1);
  mVec=createVector(pmouseX, pmouseY);
  pMVec=createVector(mouseX - pmouseX, mouseY - pmouseY);
  drag = false;
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    if (!drag) {
      drag = true;
      pmouseX = mouseX;
      pmouseY = mouseY;
    }

    const dragForce = createVector(mouseX - pmouseX, mouseY - pmouseY);
    dargForce = p5.Vector.sub(mVec, pMVec);
    dragForce.mult(0.2);

    moverA.applyForce(dragForce);
  } else {
    drag = false;
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
}
