const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBeginVel;
let angleBegin = 0;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      stroke((360 / rNum) * r, (360 / cNum) * c, 360);
      let x = ((r + 1) * width) / (rNum + 1);
      let y = ((c + 1) * hight) / (cNum + 1);
      ellipse(x, y, 8);
      push();
      translate();
      rotate();
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
