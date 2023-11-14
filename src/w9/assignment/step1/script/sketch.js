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
  Vertices,
  Common,
} = Matter;

Common.setDecomp(decomp);

let ropeA;
let ropeB;
let ropeC;
let group;

let stack;

let m;
let mc;

const originalWidth = 800;
const originalHeight = 600;

let relesed = false;

// create engine
let engine = Engine.create(),
  world = engine.world;

let runner = Runner.create();

function setup() {
  setCanvasContainer('canvas', originalWidth, originalHeight, true);

  rectMode(CENTER);

  //ropeA 시작!!!!
  group = Body.nextGroup(true);

  const chevronShape = Vertices.fromPath(
    '10.5 3.5 17.5 7 13.5 11.5 15.5 16 5 17.5 8.5 11.5 4.5 5.5'
  );

  ropeA = Composites.stack(100, 50, 9, 1, 10, 10, function (x, y) {
    // chevron 모양의 정점 배열을 사용하여 ropeA를 생성
    return Bodies.fromVertices(x, y, chevronShape, {
      collisionFilter: { group: group },
    });
  });

  ropeA.bodies.forEach((body) => {
    if (body.parts.length > 1) {
      // 오목 다각형이 감지되었을 경우, decompose를 사용하여 처리합니다.
      const decomposed = decomp.decomp(
        body.vertices.map((v) => ({ x: v.x, y: v.y }))
      );

      // 각 볼록 다각형 부분에 대한 새로운 바디를 생성합니다.
      const convexBodies = decomposed.map((vertices) =>
        Bodies.fromVertices(body.position.x, body.position.y, vertices, {
          collisionFilter: { group: group },
        })
      );

      // 원래의 오목 다각형을 새로운 볼록 다각형으로 교체합니다.
      Composite.remove(world, body);
      Composite.add(world, convexBodies);

      // 여기에서 볼록 다각형을 원래의 오목 다각형으로 다시 합칠 수 있는 로직을 추가하세요.
      // 예를 들어, convexBodies 배열을 사용하여 하나의 복합 몸체를 만들 수 있습니다.
      const combinedBody = Body.create({
        parts: convexBodies,
        position: body.position,
        // 다른 원하는 속성들 추가 가능
      });

      // 합쳐진 몸체를 세계에 추가합니다.
      Composite.add(world, combinedBody);
    }
  });

  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  if (ropeA.bodies.length > 0) {
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
  }

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
    { x: 2 * 4, y: 3 * 4 },
    { x: 4.5 * 4, y: 1.5 * 4 },
    { x: 7.5 * 4, y: 3 * 4 },
    { x: 5.5 * 4, y: 5 * 4 },
    { x: 6.5 * 4, y: 7 * 4 },
    { x: 2 * 4, y: 7.5 * 4 },
    { x: 3.5 * 4, y: 5 * 4 },
  ];

  const vertices3 = [
    { x: 4 * 4, y: -4.8 * 4 },
    { x: 7.6 * 4, y: -1.6 * 4 },
    { x: 6.5 * 4, y: 1.8 * 4 },
    { x: -2.7 * 4, y: 2 * 4 },
    { x: -1.2 * 4, y: 4.2 * 4 },
    { x: -3.6 * 4, y: 5 * 4 },
    { x: -1.3 * 4, y: -2.8 * 4 },
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
  Runner.run(runner, engine);
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
