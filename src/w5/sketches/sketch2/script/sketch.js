const rNum = 8;
const cNum = 8;
let angleBegin = 0;
let angleStep = 15;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(360, 0, 100);
  colorMode(HSL, 360, 100, 100, 100);
  angleMode(DEGREES);
}

function draw() {
  background(360, 0, 100);
  let angle = angleBegin;

  for (let a = 0; a < rNum; a++) {
    for (let b = 0; b < cNum; b++) {
      //stroke((360 / rNum) * a, (100 / cNum) * b, 0);
      stroke(0);
      let x = (width / (cNum + 1)) * (b + 1);
      let y = (height / (rNum + 1)) * (a + 1);

      if (a % 2 == 0) {
        if (b % 2 == 0) {
          stroke(210, 100, 50);
        } else {
          stroke(100, 100, 40);
        }
      } else {
        if (b % 2 == 0) {
          stroke(0, 100, 80);
        } else {
          stroke(50, 100, 60);
        }
      }
      ellipse(x, y, 40);

      push();
      translate(x, y);
      rotate(angle);
      line(0, 0, 20, 0);

      noStroke(0);
      fill(0);
      ellipse(20, 0, 10);
      pop();

      angle += angleStep;
    }
  }

  angleBegin += angleStep;
}
