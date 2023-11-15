const rNum = 8;
const cNum = 8;
let gridC;
let gridR;
let angleBeginVel;
let angleBegin = 0;
let angleStep;

function setup() {
  c;
  bcolorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(255);

  for (let a = 0; a < rNum; a++) {
    for (let b = 0; b < cNum; b++) {
      stroke((360 / rNum) * a, (360 / cNum) * b, 360);

      let x = ((a + 1) * width) / (rNum + 1);
      let y = ((b + 1) * height) / (cNum + 1);

      ellipse(x, y, 30);

      //선
      rotate((TAU / 360) * 15);
      line(x, y, 30);
      circle();
      push();
      translate();
      rotate();
      pop();
    }
  }
}
