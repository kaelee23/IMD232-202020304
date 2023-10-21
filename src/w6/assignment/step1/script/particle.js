class Particle {
  constructor(x, y, rotationSpeed) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0.05);
    this.lifespan = 255.0;
    this.color = color(random(255), random(255), random(255));
    this.rotation = 0;
    this.rotationSpeed = rotationSpeed;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.vel.add(this.acc);
    this.lifespan -= 2.0;

    this.rotation += this.rotationSpeed;

    if (this.pos.y > height + 20) {
      this.lifespan = 0;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    noStroke();
    fill(this.color, this.lifespan);
    rect(0, 0, 10, 10);
    pop();
  }

  isDead() {
    return this.lifespan <= 0.0;
  }
}
