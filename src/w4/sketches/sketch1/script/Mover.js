class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }
}
