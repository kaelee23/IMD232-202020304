let vehicle;
function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  vehicle = new Vehicle(width / 2, height / 2, 16, color(330, 100, 50));

  colorMode(RGB, 255, 255, 255);
  background(255);
}

function draw() {
  vehicle.update();
  background(255);
  vehicle.display();
}
