class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 1);
    this.acc = createVector(0, 0.05);
    this.byeRect = 255.0;

    const grayValue = random(0, 255);
    this.color = color(grayValue, grayValue, grayValue);

    this.rotation = 0;
    this.rotationSpeed = 0;
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
    line(0, -5, 0, 5); // Change this line to draw a vertical line instead of a horizontal line
    pop();
  }

  isDead() {
    return this.byeRect < 0;
  }
}
