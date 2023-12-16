class Particle {
  constructor(x, y, rotationSpeed) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.05);
    this.byeRect = 255.0;

    const grayValue = random(0, 255);
    this.color = color(grayValue, grayValue, grayValue);

    this.rotation = 0;
    this.rotationSpeed = rotationSpeed;
    this.lineLength = random(0.2, 1);
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

    if (this.pos.y > height + 20) {
      this.byeRect = 0;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    stroke(
      this.color.levels[0],
      this.color.levels[1],
      this.color.levels[2],
      this.byeRect
    );
    strokeWeight(2);

    // Adjust line length based on the random value
    let lineEnd = this.lineLength * 10;
    line(0, -lineEnd, 0, lineEnd);

    pop();
  }
  applyForce(force) {
    // Calculate the distance from the particle to the mouse
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);

    // Check if the particle is inside the circular region created by the mouse
    if (d < 50) {
      // Calculate a force that creates a parabolic trajectory
      let parabolicForce = createVector(
        this.pos.x - mouseX,
        this.pos.y - mouseY
      ).normalize();

      // Adjust the strength of the parabolic force based on the distance
      let strength = map(d, 0, 50, 0.5, 0);
      parabolicForce.mult(strength);

      // Apply the parabolic force to the particle
      this.vel.add(parabolicForce);
    }

    // Apply a parabolic force to create a bouncing effect
    this.vel.x += force.x;
    this.vel.y += force.y;
  }
  isDead() {
    return this.byeRect < 0;
  }
}
