let moverA;
let gravity;
let isDragging;
let pmouseX;
let pmouseY;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
  isDragging = false;
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyForce(gravityA);

  // Check if the mouse is pressed and inside the canvas
  if (mouseIsPressed && isMouseInsideCanvas()) {
    if (!isDragging) {
      // Start dragging, store the initial mouse position
      isDragging = true;
      pmouseX = mouseX;
      pmouseY = mouseY;
    }

    // Calculate the drag force based on mouse movement
    const dragForce = createVector(mouseX - pmouseX, mouseY - pmouseY);
    dragForce.mult(0.15);

    moverA.applyForce(dragForce);
  } else {
    isDragging = false;
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();

  // Update the previous mouse position
  pmouseX = mouseX;
  pmouseY = mouseY;
}
