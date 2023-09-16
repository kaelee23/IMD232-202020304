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
  rect(400, 30, 400, 250, 20);
  noStroke();
  fill('#ffc300');
  ellipse(740, 110, 100);
  fill('#35210d');
  stroke(0);
  rect(400, 262, 400, 18, 20);
  fill(0);
  rect(350, 37, 575, 10, 20);

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

  //조명
  strokeWeight(20);
  line(515, 300, 515, 260);
  line(520, 255, 560, 230);
  noStroke();
  fill('#fce03f');
  ellipse(595, 245, 45);
  stroke(0);
  strokeWeight(3);
  fill(100);
  ellipse(515, 260, 25);
  rect(480, 300, 70, 20, 50, 50, 0, 0);
  rect(550, 210, 90, 45, 50, 50, 5, 5);
  noStroke();
  fill('#e22900');
  ellipse(500, 310, 10);

  //의자
  stroke(0);
  fill(0);
  rect(635, 450, 30, 50, 13);
  fill('#9e2a07');
  rect(580, 327, 140, 80, 20);
  rect(580, 435, 140, 30, 20);
  fill(100);
  rect(600, 350, 100, 50, 13);
  strokeWeight(20);
  line(620, 440, 620, 385);
  line(680, 440, 680, 385);
  strokeWeight(10);
  stroke(50);
  point(612, 362);
  point(687, 362);

  //침대
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(0, 390, 500, 120, 0, 50, 0, 0);

  fill('#008080');
  rect(150, 390, 350, 120, 0, 50, 0, 0);

  fill('#5f9ea0');
  rect(5, 370, 100, 70, 20);
}
