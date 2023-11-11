let ropes = [];

function setup() {
  createCanvas(800, 600);

  // Add ropes
  ropes.push(new Rope(100, 50, 8, 50, 20, color(255, 165, 0))); // Orange
  ropes.push(new Rope(350, 50, 10, 20, 20, color(0, 0, 255))); // Blue
  ropes.push(new Rope(600, 50, 13, 50, 20, color(0, 128, 0))); // Green
}

function draw() {
  background(255);

  // Update and display ropes
  for (let rope of ropes) {
    rope.update();
    rope.display();
  }
}

class Rope {
  constructor(x, y, segments, segmentWidth, segmentHeight, ropeColor) {
    this.segments = [];
    this.ropeColor = ropeColor;

    // Create segments
    for (let i = 0; i < segments; i++) {
      let segment = createSprite(
        x + i * segmentWidth,
        y,
        segmentWidth,
        segmentHeight
      );
      segment.shapeColor = ropeColor;
      this.segments.push(segment);
    }

    // Connect segments with constraints
    for (let i = 1; i < this.segments.length; i++) {
      let constraint = createConstraint(this.segments[i - 1], this.segments[i]);
      this.segments.push(constraint);
    }
  }

  update() {
    // Apply forces or update properties if needed
  }

  display() {
    drawSprites();
  }
}

function createConstraint(bodyA, bodyB) {
  let constraint = createSprite(
    (bodyA.position.x + bodyB.position.x) / 2,
    (bodyA.position.y + bodyB.position.y) / 2
  );
  constraint.visible = false;
  constraint.immovable = true;
  constraint.displace(bodyA);
  constraint.displace(bodyB);
  return constraint;
}
