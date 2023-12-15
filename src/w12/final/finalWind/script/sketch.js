function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
  noStroke();
}

function draw() {
  background(255);

  // 'w' 글자를 점으로 표현
  drawCharacterW(width / 5, height / 2);

  // 'i' 글자를 점으로 표현
  drawCharacterI((2 * width) / 5, height / 2);

  // 'n' 글자를 점으로 표현
  drawCharacterN((3 * width) / 5, height / 2);

  // 'd' 글자를 점으로 표현
  drawCharacterD((4 * width) / 5, height / 2);
}

function drawCharacterW(x, y) {
  fill('black');
  ellipse(constrain(x - 20, 0, width), y - 30, 4); // top-left
  ellipse(constrain(x - 15, 0, width), y - 25, 4); // top-middle-left
  ellipse(constrain(x - 10, 0, width), y - 20, 4); // middle-left
  ellipse(constrain(x - 5, 0, width), y - 15, 4); // middle-middle-left
  ellipse(constrain(x, 0, width), y - 30, 4); // top-middle
  ellipse(constrain(x + 5, 0, width), y - 15, 4); // middle-middle-right
  ellipse(constrain(x + 10, 0, width), y - 20, 4); // middle-right
  ellipse(constrain(x + 15, 0, width), y - 25, 4); // top-middle-right
  ellipse(constrain(x + 20, 0, width), y - 30, 4); // top-right

  ellipse(constrain(x - 15, 0, width), y - 10, 4); // bottom-left
  ellipse(constrain(x - 10, 0, width), y - 5, 4); // bottom-middle-left
  ellipse(constrain(x - 5, 0, width), y, 4); // bottom-middle
  ellipse(constrain(x, 0, width), y - 10, 4); // bottom-middle
  ellipse(constrain(x + 5, 0, width), y, 4); // bottom-middle-right
  ellipse(constrain(x + 10, 0, width), y - 5, 4); // bottom-middle-right
  ellipse(constrain(x + 15, 0, width), y - 10, 4); // bottom-right
}

function drawCharacterI(x, y) {
  fill('black');
  ellipse(constrain(x, 0, width), y - 30, 4); // top
  ellipse(constrain(x, 0, width), y - 25, 4); // top-middle
  ellipse(constrain(x, 0, width), y - 20, 4); // middle
  ellipse(constrain(x, 0, width), y - 15, 4); // middle-middle
  ellipse(constrain(x, 0, width), y - 10, 4); // bottom
  ellipse(constrain(x, 0, width), y - 5, 4); // bottom-middle
  ellipse(constrain(x, 0, width), y, 4); // bottom
}

function drawCharacterN(x, y) {
  fill('black');
  ellipse(constrain(x - 15, 0, width), y - 30, 4); // left-top
  ellipse(constrain(x - 15, 0, width), y - 25, 4); // left-top-middle
  ellipse(constrain(x - 15, 0, width), y - 20, 4); // left-middle
  ellipse(constrain(x - 15, 0, width), y - 15, 4); // left-middle-middle
  ellipse(constrain(x - 15, 0, width), y - 10, 4); // left-bottom
  ellipse(constrain(x - 15, 0, width), y - 5, 4); // left-bottom-middle
  ellipse(constrain(x - 15, 0, width), y, 4); // left-bottom

  ellipse(constrain(x, 0, width), y - 30, 4); // middle-top
  ellipse(constrain(x, 0, width), y - 25, 4); // middle-top-middle
  ellipse(constrain(x, 0, width), y - 20, 4); // middle-middle
  ellipse(constrain(x, 0, width), y - 15, 4); // middle-middle-middle
  ellipse(constrain(x, 0, width), y - 10, 4); // middle-bottom
  ellipse(constrain(x, 0, width), y - 5, 4); // middle-bottom-middle
  ellipse(constrain(x, 0, width), y, 4); // middle-bottom

  ellipse(constrain(x + 15, 0, width), y - 30, 4); // right-top
  ellipse(constrain(x + 15, 0, width), y - 25, 4); // right-top-middle
  ellipse(constrain(x + 15, 0, width), y - 20, 4); // right-middle
  ellipse(constrain(x + 15, 0, width), y - 15, 4); // right-middle-middle
  ellipse(constrain(x + 15, 0, width), y - 10, 4); // right-bottom
  ellipse(constrain(x + 15, 0, width), y - 5, 4); // right-bottom-middle
  ellipse(constrain(x + 15, 0, width), y, 4); // right-bottom
}

function drawCharacterD(x, y) {
  fill('black');
  ellipse(constrain(x - 20, 0, width), y - 30, 4); // top-left
  ellipse(constrain(x - 15, 0, width), y - 25, 4); // top-middle-left
  ellipse(constrain(x - 10, 0, width), y - 20, 4); // middle-left
  ellipse(constrain(x - 5, 0, width), y - 15, 4); // middle-middle-left
  ellipse(constrain(x, 0, width), y - 30, 4); // top-middle
  ellipse(constrain(x + 5, 0, width), y - 15, 4); // middle-middle-right
  ellipse(constrain(x + 10, 0, width), y - 20, 4); // middle-right
  ellipse(constrain(x + 15, 0, width), y - 25, 4); // top-middle-right
  ellipse(constrain(x + 20, 0, width), y - 30, 4); // top-right

  ellipse(constrain(x - 15, 0, width), y - 10, 4); // bottom-left
  ellipse(constrain(x - 10, 0, width), y - 5, 4); // bottom-middle-left
  ellipse(constrain(x - 5, 0, width), y, 4); // bottom-middle
  ellipse(constrain(x, 0, width), y - 10, 4); // bottom-middle
  ellipse(constrain(x + 5, 0, width), y, 4); // bottom-middle-right
  ellipse(constrain(x + 10, 0, width), y - 5, 4); // bottom-middle-right
  ellipse(constrain(x + 15, 0, width), y - 10, 4); // bottom-right
}
