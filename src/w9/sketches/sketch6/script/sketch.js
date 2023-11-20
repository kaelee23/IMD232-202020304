const {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Vertices,
  Common,
} = Matter;

Common.setDecomp(decomp);

let ropeA;
let ropeB;
let ropeC;

let m;
let mc;

const originalWidth = 800;
const originalHeight = 600;

let engine = Engine.create(),
  world = engine.world;

let runner = Runner.create();

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  // ropeA 시작!!!!
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 1, 10, 10, 10, function (x, y) {
    const starVertices = Vertices.fromPath(
      '124 5 130 13 135 30 120 30 117 26 117 20 120 70'
    );

    const concaveBodies = Common.choose([starVertices]);

    const concaveBody = Bodies.fromVertices(x, y, concaveBodies, {
      collisionFilter: { group: group },
    });

    return concaveBody;
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: {
        x: ropeA.bodies[0].position.x,
        y: ropeA.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  const ropeA = Composite.create({ bodies: ropeA.bodies });

  // ropeB 시작!!!!
  group = Body.nextGroup(true);

  const ropeBBodies = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    const circleBody = Bodies.circle(x, y, 20, {
      collisionFilter: { group: group },
    });
    return circleBody;
  });

  Composites.chain(ropeBBodies, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeBBodies,
    Constraint.create({
      bodyB: ropeBBodies.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: {
        x: ropeBBodies.bodies[0].position.x,
        y: ropeBBodies.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  const ropeB = Composite.create({ bodies: ropeBBodies.bodies });

  // ropeC 시작!!!!
  group = Body.nextGroup(true);

  const vertices1 = [
    // Define your vertices for ropeC
  ];

  const vertices2 = [
    // Define your vertices for ropeC
  ];

  const vertices3 = [
    // Define your vertices for ropeC
  ];

  const ropeCBodies = Composites.stack(
    600,
    50,
    10,
    1,
    10,
    10,
    function (x, y, index) {
      let vertices;
      if (index % 3 === 0) {
        vertices = vertices1;
      } else if (index % 3 === 1) {
        vertices = vertices2;
      } else {
        vertices = vertices3;
      }

      const concaveBody = Bodies.fromVertices(x, y, vertices, {
        collisionFilter: { group: group },
      });

      return concaveBody;
    }
  );

  Composites.chain(ropeCBodies, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeCBodies,
    Constraint.create({
      bodyB: ropeCBodies.bodies[0],
      pointB: { x: -15, y: 0 },
      pointA: {
        x: ropeCBodies.bodies[0].position.x,
        y: ropeCBodies.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );

  const ropeC = Composite.create({ bodies: ropeCBodies.bodies });

  // 만든 바디를 세계에 추가
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  m = Mouse.create(document.querySelector('.p5Canvas'));
  m.pixelRatio = pixelDensity();
  mc = MouseConstraint.create(engine, {
    mouse: m,
  });

  Composite.add(engine.world, mc);

  background(255);
  Runner.run(runner, engine);
}

function draw() {
  background(255);
  noStroke();

  fill(243, 176, 195);
  drawRope(ropeA);

  fill(136, 133, 164);
  drawRope(ropeB);

  fill(122, 154, 130);
  drawRope(ropeC);
}

function drawRope(rope) {
  rope.bodies.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });
}
