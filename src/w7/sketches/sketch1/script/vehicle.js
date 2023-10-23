class Vehicle {
  constructor(x, y, rad) {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.color = color;
  }

  applyForce(force) {
    force.div(this.mass);
    let calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(force);
    this.acc.mult(0);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    fill(this.color);
    beginshape();
    vertex(this.rad, 0);
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    vertex(0, 0);
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    endShape(CLOSE);
    pop();
  }
}
