let emitters = []; // emitters 배열을 선언

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
}

function draw() {
  background(255);

  for (let i = emitters.length - 1; i >= 0; i--) {
    emitters[i].run();
    if (emitters[i].particles.length === 0) {
      emitters.splice(i, 1);
    }
  }
}

function mousePressed() {
  let emitter = new Emitter(mouseX, mouseY);
  for (let i = 0; i < 100; i++) {
    emitter.addParticle();
  }
  emitters.push(emitter); // emitters 배열에 새 Emitter 추가
}
