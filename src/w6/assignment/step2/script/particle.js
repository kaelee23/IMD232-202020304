class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = random(TWO_PI);
    this.vel = p5.Vector.fromAngle(this.angle);
    this.vel.mult(random(19, 20));
    this.acc = createVector(0, 0);
    this.lifespan = 60;
    this.particleColor = color(random(255), random(255), random(255));
  }
  run() {
    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 1.0;
    this.acc.mult(0);
  }

  display() {
    colorMode(HSB, 360, 100, 100);
    noStroke();
    fill(this.particleColor, 100, 100, this.lifespan);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    colorMode(RGB);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
