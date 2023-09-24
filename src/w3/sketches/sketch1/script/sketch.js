//let x;
//let y;
let pos;

//let xAdd = 5;
//let yAdd = 3;
let vel;

let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');

  //초기값 할당
  // x = width / 2;
  // y = height / 2;
  pos = createVector(width / 2, height / 2);
  //vel=createrVector(5,3)

  //임의의 방향으로 백터1만큼 뻗게하기
  //vel = createVector(0, 1);
  //TAU=PI*2
  //vel.lotate(random(TAU));
  vel = p5.Vector.random2D();

  //vel.mult(5);
  vel.mult(0);

  acc = createVector(0, 0.01);
}

function draw() {
  background('white');

  update();
  infiniteEdge();
  display();

  //위치 업데이트
  //x += xAdd;
  //y += yAdd;
  //vel.add(acc);
  //vel.limit(20);

  //pos.x +=vel.x; pos.y+=vel.y;
  //pos.add(vel);

  ////화면 밖으로 나가면 안으로 오는 코드
  //if (x < 0) {
  //  x += width;
  //} else if (x >= width) {
  //  x -= width;
  //}
  //if (y < 0) {
  //  y += height;
  //} else if (y >= height) {
  //  y -= height;
  //}

  //if (pos.x < 0) {
  //  pos.x += width;
  //} else if (pos.x >= width) {
  //  pos.x -= width;
  //}
  //if (pos.y < 0) {
  //  pos.y += height;
  //} else if (pos.y >= height) {
  //  pos.y -= height;
  //}

  //ellipse(x, y, 2 * radius);
  //ellipse(pos.x, pos.y, 2 * radius);
}

function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function display() {
  ellipse(pos.x, pos.y, 2 * radius);
}
