class Body {
  constructor(x, y, mass, rad, vel) {
    this.pos = createVector(x, y);
    this.vel = vel;
    this.acc = createVector();
    this.mass = mass;
    this.rad = rad;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    noStroke();
    fill(0, 127);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }
}
