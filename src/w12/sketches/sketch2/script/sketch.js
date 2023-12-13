let particles = [];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
}

function draw() {
  background(255);

  if (random(1) < 1) {
    let x = random(width);
    let y = -10;
    let rotationSpeed = random(-0.2, 0.3);
    particles.push(new Particle(x, y, rotationSpeed));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();

    if (particle.isDead()) {
      particles.splice(i, 1);
    }
  }
  console.log(particles.length);
}
