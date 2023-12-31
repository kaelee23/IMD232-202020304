let particles = [];

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  rectMode(CENTER);
}

function draw() {
  background(0);
  stroke(0);
  strokeWeight(2);
  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('마우스를 이동해 비를 피해보자', width / 2, height - 20);
  circle(mouseX, mouseY, 50);

  if (random(1) < 1) {
    let x = random(width);
    let y = -10;
    let rotationSpeed = random(-0.2, 0.5);
    particles.push(new Particle(x, y, rotationSpeed));
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();

    if (particle.isDead()) {
      particles.splice(i, 1);
    }

    // Check if the mouse is near the particle and apply a parabolic force
    let mouseDist = dist(mouseX, mouseY, particle.pos.x, particle.pos.y);
    if (mouseDist < 50) {
      let force = createVector(
        mouseX - particle.pos.x,
        mouseY - particle.pos.y
      );
      force.normalize();
      force.mult(0.1); // Adjust the strength of the force as needed
      particle.applyForce(force);
    }
  }
}
