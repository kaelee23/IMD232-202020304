function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background('#ece6cc');
  //루프로 인해 적용한 설정이 넘어오는 것을 방지
  strokeWeight(3);

  //시계
  rectMode(CENTER);
  fill(217, 208, 156);
  ellipse(100, 100, 90, 90);
  fill(255);
  ellipse(100, 100, 70);
  stroke(0);
  strokeWeight(6);
  line(100, 100, 93, 82);
  line(100, 100, 80, 114);
  strokeWeight(3);
  fill('red');
  ellipse(100, 100, 10);

  //창문
  rectMode(CORNER);
  fill('#aee3fc');
  rect(400, 30, 400, 300, 20);

  //커튼
  fill(255);
  noStroke();
  rect(370, 26, 130, 350, 5);
  rect(780, 26, 130, 350, 5);

  //책상
  stroke(0);
  fill('#59491d');
  rect(450, 320, 400, 20, 20);
  fill('#7c613a');
  rect(465, 340, 370, 40, 0, 0, 20, 20);
  rect(480, 380, 30, 150);
  rect(785, 380, 30, 150);

  //의자
  rect(785, 380, 30, 150);

  //침대
  fill(255);
  rect(0, 390, 500, 120, 0, 50, 0, 0);

  fill('#008080');
  rect(150, 390, 350, 120, 0, 50, 0, 0);

  fill('#5f9ea0');
  rect(5, 370, 100, 70, 20);
}
