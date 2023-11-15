//교수님 한번만 가운데 원 눌러주세요
//작동이 되긴해요..물론..가운데만..

let pendulumA;
let pendulumB;
let gravity;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  pendulumA = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25);
  pendulumB = new Pendulum(width / 2, 10, height / 3, (TAU / 360) * 45, 25);

  pendulumA.connect(pendulumB);

  gravity = createVector(0, 0.5);

  background(255);
}

function draw() {
  pendulumA.applyGravity(gravity);
  pendulumB.applyGravity(gravity);
  pendulumA.update();
  pendulumB.update();
  background(255);
  pendulumA.display();
  pendulumB.display();
}

function mouseMoved() {
  pendulumA.mouseMoved(mouseX, mouseY);
  pendulumB.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  pendulumA.mousePressed(mouseX, mouseY);
  pendulumB.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  pendulumA.mouseDragged(mouseX, mouseY);
  pendulumB.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pendulumA.mouseReleased();
  pendulumB.mouseReleased();
}
