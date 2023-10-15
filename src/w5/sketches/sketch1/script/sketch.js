const rNum = 8;
const cNum = 8;
const angleBegin = 2;
const rGap = 1;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}
function draw() {
  background(255);

  rectMode(CENTER);
  for (let a = 0; a < rNum; a++) {
    for (let b = 0; b < cNum; b++) {
      stroke((255 / rNum) * a, (255 / cNum) * b, 255);
      let x = ((a + 1) * width) / (rNum + 1);
      let y = ((b + 1) * height) / (cNum + 1);
      ellipse(x, y, 10);
    }
  }
}
