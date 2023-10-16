let emitter;
let particle = [];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100);
  particle = new Ball(width / 2, 0, 1, 0, 50);
  emitter = new Emitter(width / 2, 0);

  g = createVector(0, 0.1);

  background('white');
}
function draw() {
  background('white');
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyForce();
  particle.update();
  particle.display();
}
