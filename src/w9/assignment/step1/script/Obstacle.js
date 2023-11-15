class Obstacle {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
  }

  intersects(pos) {
    return this.pos.dist(pos) < this.r;
  }

  normalVec(pos) {
    const normalVec = pos.copy();
    normalVec.sub(this.pos);
    const m = normalVec.mag();
    normalVec.setMag(this.r - m);
    return normalVec;
  }

  render() {
    noStroke();
    fill(243, 176, 195);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}
