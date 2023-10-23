let Strach;

let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  Strach = new Strach();

  //colorMode(RGB, 255, 255, 255);
  background(0, 100, 100);
}

function draw() {
  background(255);
  strach.run();
}

function mouseDragged() {
  strach.addVehicle(mouseX, mouseY);
}
