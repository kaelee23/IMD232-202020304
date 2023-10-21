class Particle {
  constructor(x, y, rotationSpeed) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0.05);
    this.byeRect = 255.0;
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
    this.byeRect -= 2.0;

    this.rotation += this.rotationSpeed;

    if (this.pos.y > height + 20) {
      this.byeRect < 0;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    noStroke();
    fill(this.color, this.byeRect);
    rect(0, 0, 10, 10);
    pop();
  }

  isDead() {
    return this.byeRect < 0;
  }
}
