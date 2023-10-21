let emitters = []; // emitters 배열을 선언

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
}

function draw() {
  background(255);

  for (let i = emitters.length - 1; i >= 0; i--) {
    emitters[i].addParticle();
    emitters[i].run();
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}
