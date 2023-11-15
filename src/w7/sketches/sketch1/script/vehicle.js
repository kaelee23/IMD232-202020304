class Vehicle {
  constructor(x, y, rad, speedMx, forceMx, color) {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMx = speedMx;
    this.forceMx = forceMx;
    this.color = color;
  }
  seek(target) {
    let desired = p5Vector.sub(target, this.pos);
    desired.setMag(this.speedMx);
    let steering = p5.vectoe.sub(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this.pos.y);
      noFill();
      stroke(127);
      line(0, 0, desired.x * 10, desired.y * 10);
      stroke(255);
      line(0, 0, steering.x * 10, steering.y * 10);
      pop();
    }
    steering.limit(this.forceMx);
    this.applyForce(steering);
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
    let angle = i;
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
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
