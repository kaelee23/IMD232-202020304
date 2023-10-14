class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = mass;
    this.isHover = false;
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  edgeBounce() {
    const bounce = -0.7;
    if (this.pos.x < this.rad) {
      this.pos.x = this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x = width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y = height - 1 - this.rad;
      this.vel.y *= bounce;
    } else if (this.pos.y < this.rad) {
      const returnForce = createVector(
        initialPos.x - this.pos.x,
        initialPos.y - this.pos.y
      ).mult(0.05);
      this.applyForce(returnForce);
    }
  }

  display() {
    this.isHover =
      (this.pos.x - mouseX) ** 2 + (this.pos.y - mouseY) ** 2 <= this.rad ** 2;

    noStroke();
    fill(this.isHover ? color(255, 0, 0) : color(0));
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}
