let {
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
} = Matter;

let ropeA;
let ropeB;
let ropeC;
let group;

let m;
let mc;

const originalWidth = 800;
const originalHeight = 600;

let relesed = false;

// create engine
let engine = Engine.create(),
  world = engine.world;

let runner = Runner.create();
Runner.run(runner, engine);

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  rectMode(CENTER);

  //ropeA 시작!!!!
  group = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: group },
    });
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
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //ropeB 시작!!!!

  group = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //ropeC 시작!!!!
  group = Body.nextGroup(true);

  const vertices1 = [
    { x: 5.5 * 4, y: -4.8 * 4 },
    { x: 7.6 * 4, y: -1.6 * 4 },
    { x: 6.5 * 4, y: 1.8 * 4 },
    { x: 2.7 * 4, y: 4.5 * 4 },
    { x: -1.2 * 4, y: 4.2 * 4 },
    { x: -3.6 * 4, y: 1.9 * 4 },
    { x: -1.3 * 4, y: -2.8 * 4 },
  ];

  const vertices2 = [
    { x: 4 * 4, y: -4.8 * 4 },
    { x: 7.6 * 4, y: -1.6 * 4 },
    { x: 6.5 * 4, y: 1.8 * 4 },
    { x: -2.7 * 4, y: 2 * 4 },
    { x: -1.2 * 4, y: 4.2 * 4 },
    { x: -3.6 * 4, y: 5 * 4 },
    { x: -1.3 * 4, y: -2.8 * 4 },
  ];
  const vertices3 = [
    { x: 2 * 4, y: 3 * 4 },
    { x: 4.5 * 4, y: 1.5 * 4 },
    { x: 7.5 * 4, y: 3 * 4 },
    { x: 5.5 * 4, y: 5 * 4 },
    { x: 6.5 * 4, y: 7 * 4 },
    { x: 2 * 4, y: 7.5 * 4 },
    { x: 3.5 * 4, y: 5 * 4 },
  ];

  ropeC = Composites.stack(600, 50, 10, 1, 10, 10, function (x, y, index) {
    let vertices;
    if (index % 3 === 0) {
      vertices = vertices1;
    } else if (index % 3 === 1) {
      vertices = vertices2;
    } else {
      vertices = vertices3;
    }
    return Bodies.fromVertices(x, y, vertices, {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeC, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -15, y: 0 },
      pointA: {
        x: ropeC.bodies[0].position.x,
        y: ropeC.bodies[0].position.y,
      },
      stiffness: 0.5,
    })
  );
  //만든바디를세계에 추가
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
}

function draw() {
  background(255);
  noStroke();
  fill(243, 176, 195);
  ropeA.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  fill(136, 133, 164);
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((each) => {
      vertex(
        (each.x / originalWidth) * width,
        (each.y / originalHeight) * height
      );
    });
    endShape(CLOSE);
  });

  fill(122, 154, 130);
  ropeC.bodies.forEach((eachBody) => {
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

//   // fit the render viewport to the scene
//   Render.lookAt(render, {
//     min: { x: 0, y: 0 },
//     max: { x: 700, y: 600 },
//   });
// }
//Render.run(render);

//// create runner
//let runner = Runner.create();
//Runner.run(runner, engine);

// add bodies

// add mouse control
//let mouse = Mouse.create(render.canvas),
//  mouseConstraint = MouseConstraint.create(engine, {
//    mouse: mouse,
//    constraint: {
//      stiffness: 0.2,
//      render: {
//        visible: false,
//      },
//    },
//  });
//
//Composite.add(world, mouseConstraint);
//
//// keep the mouse in sync with rendering
//render.mouse = mouse;
//
//// fit the render viewport to the scene
//Render.lookAt(render, {
//  min: { x: 0, y: 0 },
//  max: { x: 700, y: 600 },
//});
