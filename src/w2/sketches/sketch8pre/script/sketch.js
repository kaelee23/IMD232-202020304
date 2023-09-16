function setup() {
  setCanvasContainer('canvas-goes-here', 3, 2, true);
  background(127);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, width * 0.1, height * 0.1);
}
