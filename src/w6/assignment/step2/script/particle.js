class Particle {
  constructor(x, y, velocity) {
    this.pos = createVector(x, y);
    this.vel = velocity;
    this.acc = createVector(0, 0);
    this.lifespan = 60;
    this.particleColor = color(random(255), random(255), random(255));
  }

  run() {
    let gravity = createVector(0, 0.05);
    this.applyForce(gravity);
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 1; // 매 프레임마다 1씩 감소
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
    return this.lifespan <= 0; // lifespan이 0 이하이면 파티클이 죽었다고 판단
  }
}
