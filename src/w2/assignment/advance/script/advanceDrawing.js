function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background('#ece6cc');

  let kae = height * 0.0016;

  //루프로 인해 적용한 설정이 넘어오는 것을 방지

  //시계
  rectMode(CENTER);
  fill(217, 208, 156);
  ellipse(100 * kae, 100 * kae, 90 * kae);
  fill(255);
  ellipse(100 * kae, 100 * kae, 70 * kae);
  stroke(0);
  strokeWeight(6 * kae);
  line(100 * kae, 100 * kae, 93 * kae, 82 * kae);
  line(100 * kae, 100 * kae, 80 * kae, 114 * kae);
  strokeWeight(3 * kae);
  fill('red');
  ellipse(100 * kae, 100 * kae, 10 * kae);

  //창문
  rectMode(CORNER);
  fill('#aee3fc');
  rect(400 * kae, 30 * kae, 400 * kae, 250 * kae, 20 * kae);
  noStroke();
  fill('#ffc300');
  ellipse(740 * kae, 110 * kae, 100 * kae);
  fill('#35210d');
  stroke(0);
  rect(400 * kae, 262 * kae, 400 * kae, 18 * kae, 20 * kae);
  fill(0);
  rect(350 * kae, 37 * kae, 575 * kae, 10 * kae, 20 * kae);
  ellipse(350 * kae, 42 * kae, 20 * kae, 25 * kae);
  ellipse(930 * kae, 42 * kae, 20 * kae, 25 * kae);

  //책장
  fill('#7c613a');
  rect(110 * kae, 200 * kae, 300 * kae, 290 * kae, 10 * kae);
  fill('#59491d');
  rect(130 * kae, 220 * kae, 260 * kae, 80 * kae, 8 * kae);
  rect(130 * kae, 320 * kae, 260 * kae, 80 * kae, 8 * kae);
  //윗칸
  fill('#9e2a07');
  rect(130 * kae, 240 * kae, 20 * kae, 60 * kae, 5 * kae);
  rect(260 * kae, 240 * kae, 20 * kae, 60 * kae, 5 * kae);
  fill('#fce44d');
  rect(150 * kae, 230 * kae, 20 * kae, 70 * kae, 5 * kae);
  rect(300 * kae, 235 * kae, 20 * kae, 65 * kae, 5 * kae);
  fill('#008080');
  rect(280 * kae, 225 * kae, 20 * kae, 75 * kae, 5 * kae);
  rect(180 * kae, 240 * kae, 20 * kae, 60 * kae, 5 * kae);
  //아래칸
  fill('#9e2a07');
  rect(230 * kae, 340 * kae, 20 * kae, 60 * kae, 5 * kae);
  rect(150 * kae, 330 * kae, 20 * kae, 70 * kae, 5 * kae);
  rect(300 * kae, 340 * kae, 20 * kae, 60 * kae, 5 * kae);
  fill('#fce44d');
  rect(130 * kae, 340 * kae, 20 * kae, 60 * kae, 5 * kae);
  rect(280 * kae, 330 * kae, 20 * kae, 70 * kae, 5 * kae);
  rect(185 * kae, 335 * kae, 20 * kae, 65 * kae, 5 * kae);
  fill('#008080');
  rect(210 * kae, 340 * kae, 20 * kae, 60 * kae, 5 * kae);

  //오브제
  fill(0);
  rect(270 * kae, 185 * kae, 60 * kae, 15 * kae, 30 * kae, 30 * kae, 0, 0);
  fill(255);
  rect(290 * kae, 140 * kae, 20 * kae, 45 * kae, 20 * kae, 20 * kae, 0, 0);
  noStroke();
  fill('#e22900');
  ellipse(300 * kae, 120 * kae, 20 * kae, 30 * kae);
  fill('#fce03f');
  ellipse(300 * kae, 125 * kae, 10 * kae, 15 * kae);

  //커튼
  fill(255, 255, 255, 220);
  rect(370 * kae, 26 * kae, 130 * kae, 350 * kae, 5 * kae);
  rect(780 * kae, 26 * kae, 130 * kae, 350 * kae, 5 * kae);
  fill(228, 228, 228, 220);
  rect(387 * kae, 116 * kae, 15 * kae, 260 * kae, 20 * kae, 20 * kae, 0, 0);
  rect(427 * kae, 156 * kae, 15 * kae, 220 * kae, 20 * kae, 20 * kae, 0, 0);
  rect(467 * kae, 136 * kae, 15 * kae, 240 * kae, 20 * kae, 20 * kae, 0, 0);
  rect(797 * kae, 116 * kae, 15 * kae, 260 * kae, 20 * kae, 20 * kae, 0, 0);
  rect(837 * kae, 156 * kae, 15 * kae, 220 * kae, 20 * kae, 20 * kae, 0, 0);
  rect(877 * kae, 136 * kae, 15 * kae, 240 * kae, 20 * kae, 20 * kae, 0, 0);
  //책상
  stroke(0);
  fill('#59491d');
  rect(450 * kae, 320 * kae, 400 * kae, 20 * kae, 20 * kae);
  fill('#7c613a');
  rect(480 * kae, 380 * kae, 30 * kae, 100 * kae);
  rect(785 * kae, 380 * kae, 30 * kae, 100 * kae);
  rect(465 * kae, 340 * kae, 370 * kae, 40 * kae, 0, 0, 20 * kae, 20 * kae);

  //조명
  strokeWeight(20 * kae);
  line(515 * kae, 300 * kae, 515 * kae, 260 * kae);
  line(520 * kae, 255 * kae, 560 * kae, 230 * kae);
  noStroke();
  fill('#fce03f');
  ellipse(595 * kae, 245 * kae, 45 * kae);
  stroke(0);
  strokeWeight(3 * kae);
  fill(100);
  ellipse(515 * kae, 260 * kae, 25 * kae);
  rect(480 * kae, 300 * kae, 70 * kae, 20 * kae, 50 * kae, 50 * kae, 0, 0);
  rect(
    550 * kae,
    210 * kae,
    90 * kae,
    45 * kae,
    50 * kae,
    50 * kae,
    5 * kae,
    5 * kae
  );
  noStroke();
  fill('#e22900');
  ellipse(500 * kae, 310 * kae, 10 * kae);

  //의자
  stroke(0);
  fill(0);
  rect(635 * kae, 450 * kae, 30 * kae, 50 * kae);
  fill('#9e2a07');
  rect(580 * kae, 327 * kae, 140 * kae, 80 * kae, 20);
  rect(580 * kae, 435 * kae, 140 * kae, 30 * kae, 20);
  fill(100);
  rect(600 * kae, 350 * kae, 100 * kae, 50 * kae, 13);
  strokeWeight(20 * kae);
  line(620 * kae, 440 * kae, 620 * kae, 385 * kae);
  line(680 * kae, 440 * kae, 680 * kae, 385 * kae);
  strokeWeight(10 * kae);
  stroke(50);
  point(612 * kae, 362 * kae);
  point(687 * kae, 362 * kae);

  //침대
  stroke(0);
  strokeWeight(3 * kae);
  fill(255);
  rect(0, 390 * kae, 500 * kae, 120 * kae, 0, 50 * kae, 0, 0);

  fill('#008080');
  rect(150 * kae, 390 * kae, 350 * kae, 120 * kae, 0, 50 * kae, 0, 0);

  fill('#5f9ea0');
  rect(5 * kae, 370 * kae, 100 * kae, 70 * kae, 20 * kae);
}
