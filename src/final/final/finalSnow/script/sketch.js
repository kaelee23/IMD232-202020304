let wPosition;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);
  background(0);

  wPosition = createVector(width / 2, height / 2);
}

function draw() {
  background(0);
  fill('red');
  ellipse(width / 2, height / 2, 9);

  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('마우스를 빨간점으로 옮겨서 눈을 뭉쳐보자', width / 2, height - 20);

  let canvasCenterX = width / 2;
  let canvasCenterY = height / 2;

  let distance = dist(mouseX, mouseY, canvasCenterX, canvasCenterY);

  let dispersal = map(distance, 0, width / 2, 0, 300);

  drawCharacterSnow(canvasCenterX, canvasCenterY, dispersal);
}
function drawCharacterSnow(x, y, dispersal) {
  fill(255);

  for (let i = 0; i < 10; i++) {
    let xOffset = random(-dispersal, dispersal);
    let yOffset = random(-dispersal, dispersal);

    // Top part of W
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 35 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 30 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 25 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 20 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y - 15 - yOffset, 10);

    // Bottom part of W
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 10 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 15 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 20 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 25 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y + 30 + yOffset, 10);

    // Middle part of W
    ellipse(constrain(x - 30 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 25 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + 5 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + 10 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 5 + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 10 + yOffset, 10);
  }
}
