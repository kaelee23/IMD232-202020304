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

const originalWidth = 800;
const originalHeight = 600;

// create engine
let engine = Engine.create(),
  world = engine.world;

let runner = Runner.create();
Runner.run(runner, engine);

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  //rectMode(CENTER);

  // 옵션과정 1: 물체 만들기
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

  group = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x - 20, y, 50, 20, {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
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

  background(255);
}

function draw() {
  background(255);
  fill('orange');
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

  fill('blue');
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

  fill('green');
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

function mouseRelesed() {
  // add mouse control
  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 700, y: 600 },
  });
}

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
