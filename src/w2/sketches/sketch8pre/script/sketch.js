function setup() {
  setCanvasContainer('canvas-goes-here', 3, 2, true);
  background('Gray');
}

function draw() {
  background('Gray');
  circle(mouseX, mouseY, width * 0.1, height * 0.1);
}
