// create variables
let ropes = [];

function setup() {
  createCanvas(800, 600);

  // add ropes
  ropes.push(createRope(100, 50, 8, 50, 20, 25, 0.5, 0, -25, 0.8));
  ropes.push(createRope(350, 50, 10, 20, 20, 20, 0.5, 0, -20, 0.8));
  ropes.push(createRope(600, 50, 13, 50, 20, 5, 0.3, 0, -20, 1));

  // add ground
  createGround(400, 600, 1200, 50.5);

  // add mouse control
  let options = {
    stiffness: 0.2,
    render: { visible: false },
  };
  let mouseConstraint = Matter.Constraint.create({
    pointA: { x: mouseX, y: mouseY },
    bodyB: ropes[0][0],
    pointB: { x: -25, y: 0 },
    stiffness: 0.5,
  });

  World.add(world, mouseConstraint);

  // fit the render viewport to the scene
  let minBounds = createVector(0, 0);
  let maxBounds = createVector(700, 600);
  setBounds(minBounds, maxBounds);
}

function draw() {
  background(255);

  // Update physics engine
  updatePhysics();

  // Draw ropes
  for (let i = 0; i < ropes.length; i++) {
    drawRope(ropes[i]);
  }
}

function createRope(
  x,
  y,
  segments,
  width,
  height,
  chamfer,
  chainX,
  chainY,
  chainStiffness,
  chainLength
) {
  let rope = [];

  for (let i = 0; i < segments; i++) {
    let xPos = x + i * (width + 10);
    let body;

    if (chamfer > 0) {
      body = createRoundedRectangle(xPos, y, width, height, chamfer);
    } else {
      body = createRectangle(xPos, y, width, height);
    }

    rope.push(body);
  }

  for (let i = 0; i < segments - 1; i++) {
    let constraint = Constraint.create({
      bodyA: rope[i],
      pointA: { x: chainX, y: chainY },
      bodyB: rope[i + 1],
      pointB: { x: -width / 2, y: 0 },
      stiffness: chainStiffness,
      length: chainLength,
    });
    World.add(world, constraint);
  }

  return rope;
}

function createRectangle(x, y, width, height) {
  let options = {
    friction: 0.8,
    restitution: 0.3,
  };
  let body = Bodies.rectangle(x, y, width, height, options);
  World.add(world, body);
  return body;
}

function createRoundedRectangle(x, y, width, height, chamfer) {
  let options = {
    friction: 0.8,
    restitution: 0.3,
    chamfer: { radius: chamfer },
  };
  let body = Bodies.rectangle(x, y, width, height, options);
  World.add(world, body);
  return body;
}

function createGround(x, y, width, height) {
  let options = {
    isStatic: true,
  };
  let ground = Bodies.rectangle(x, y, width, height, options);
  World.add(world, ground);
}

function drawRope(rope) {
  for (let i = 0; i < rope.length; i++) {
    drawBody(rope[i]);
  }
}

function drawBody(body) {
  let pos = body.position;
  let angle = body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill(127);
  stroke(0);
  strokeWeight(2);
  if (body.vertices) {
    beginShape();
    for (let i = 0; i < body.vertices.length; i++) {
      let vertexPos = body.vertices[i];
      vertex(vertexPos.x, vertexPos.y);
    }
    endShape(CLOSE);
  } else {
    rect(0, 0, body.width, body.height);
  }
  pop();
}

function updatePhysics() {
  Engine.update(engine);
}

function setBounds(min, max) {
  let renderOptions = {
    bounds: {
      min: min,
      max: max,
    },
  };
  render.options(renderOptions);
}
