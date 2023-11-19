const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const tiles = [];
const rowNum = 50,
  colNum = 50;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  const w = width / colNum;
  const h = w;
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const x = w * col;
      const y = h * row;
      const newTile = new Cell(x, y, w, h);
      tiles.push(newTile);
    }
  }
  // ... (이웃 설정 코드는 그대로 유지)

  randomSeed(1);
  tiles.forEach((each) => {
    // 초기 상태를 랜덤하게 설정 (Rock, Paper, Scissors 중 하나)
    each.state = floor(random(3));
  });

  frameRate(15);
  background(255);
  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function draw() {
  background(255);

  tiles.forEach((each) => {
    each.calcNextState();
  });
  tiles.forEach((each) => {
    each.update();
  });

  tiles.forEach((each) => {
    each.display(mouseX, mouseY);
  });
}

function getIdx(row, col) {
  return row * colNum + col;
}

function mouseClicked() {
  for (let idx = 0; idx < tiles.length; idx++)
    if (tiles[idx].toggleState(mouseX, mouseY)) break;
}

function keyPressed() {
  // tiles.forEach((each) => {
  //   each.calcNextState();
  // });
  // tiles.forEach((each) => {
  //   each.update();
  // });
}
