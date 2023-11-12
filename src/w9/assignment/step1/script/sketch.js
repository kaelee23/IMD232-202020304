let {
  Engine,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
} = Matter;

let engine, world, render, runner;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  // 바디 추가
  // 주황색 도형 그룹
  background(255);
}

function draw() {
  Engine.update(engine);
  background(255);

  groupA = Body.nextGroup(true);

  ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: groupA },
      render: { fillStyle: 'orange' },
    });
  });
  // ropeA에 대한 체인과 제약 설정
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

  // 파란색 도형 그룹
  groupB = Body.nextGroup(true);

  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, {
      collisionFilter: { group: groupB },
      render: { fillStyle: 'blue' },
    });
  });
  // ropeB에 대한 체인과 제약 설정
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

  // 초록색 도형 그룹
  groupC = Body.nextGroup(true);

  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.rectangle(x, y, 50, 20, {
      collisionFilter: { group: groupC },
      render: { fillStyle: 'green' },
    });
  });

  // ropeC에 대한 체인과 제약 설정
  Composites.chain(ropeC, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    render: { type: 'line' },
  });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );
  //
  //건들지 않기
  // 월드에 바디 추가
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  // 마우스 컨트롤 추가
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

  // 마우스를 렌더링과 동기화 유지
  render.mouse = mouse;

  // 렌더 뷰포트를 씬에 맞추기
  Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 700, y: 600 },
  });

  //console.log(ground);

  Runner.run(runner, engine);
}
