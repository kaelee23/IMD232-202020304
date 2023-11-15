let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('mySketchGoseHere', 3, 2, true);

  background(255);
  //값이 있진 않지만 벡터를 쓸 수 있는 상태라도 만들기 위해()를 비워라도 쓰긴해야함but채우면좋음
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector();
  //중앙을 보여주고 싶을때
  //계산을 ellipse보다 먼저하면 중앙에 있을떄가 보이지 않으므로
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  //벡터로 만들어서 벡터서 정의한 add 사용 ok
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  pos.add(vel);

  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }

  //if (pos.x < 0) {
  //  vel.x *= -1;
  //} else if (pos.x > width) {
  //  vel.x *= -1;
  //}
  if (pos.x - radius < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y - radius < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipse(pos.x, pos.y, 2 * radius);
}
