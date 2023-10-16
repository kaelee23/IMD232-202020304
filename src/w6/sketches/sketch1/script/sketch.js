let particle = [];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  particle = new Ball(width / 2, 0, 1, 0, 50);

  background('white');
}
function draw() {}
