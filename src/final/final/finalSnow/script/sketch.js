let wPosition;

function setup() {
  createCanvas(600, 400);
  background(255);

  // Store the initial position of the W
  wPosition = createVector(width / 2, height / 2);
}

function draw() {
  background(255);

  // Calculate the distance between the mouse and the center of the canvas
  let distance = dist(mouseX, mouseY, width / 2, height / 2);

  // Map the distance to control the dispersal effect
  let dispersal = map(distance, 0, width / 2, 0, 100);

  // Draw the W at the updated position with dispersal effect
  drawCharacterSnow(wPosition.x, wPosition.y, dispersal);
}

function drawCharacterSnow(x, y, dispersal) {
  fill(255);

  // Top part of W
  ellipse(constrain(x - 20 + dispersal, 0, width), y - 35 - dispersal, 10); //1
  ellipse(constrain(x - 20 + dispersal, 0, width), y - 30 - dispersal, 10); // 2
  ellipse(constrain(x - 20 + dispersal, 0, width), y - 25 - dispersal, 10); // 3
  ellipse(constrain(x - 20 + dispersal, 0, width), y - 20 - dispersal, 10); // 10
  ellipse(constrain(x - 20 + dispersal, 0, width), y - 15 - dispersal, 10); // 10
  ellipse(constrain(x - 15 + dispersal, 0, width), y - 15 - dispersal, 10); // 10
  ellipse(constrain(x - 10 + dispersal, 0, width), y - 15 - dispersal, 10); // 10
  ellipse(constrain(x - 5 + dispersal, 0, width), y - 15 - dispersal, 10); // 10
  ellipse(constrain(x + dispersal, 0, width), y - 15 - dispersal, 10); // 10

  // Bottom part of W
  ellipse(constrain(x - 20 + dispersal, 0, width), y + 10 + dispersal, 10); //1
  ellipse(constrain(x - 20 + dispersal, 0, width), y + 15 + dispersal, 10); // 2
  ellipse(constrain(x - 20 + dispersal, 0, width), y + 20 + dispersal, 10); // 3
  ellipse(constrain(x - 20 + dispersal, 0, width), y + 25 + dispersal, 10); // 10
  ellipse(constrain(x - 20 + dispersal, 0, width), y + 30 + dispersal, 10); // 10
  ellipse(constrain(x - 15 + dispersal, 0, width), y + 30 + dispersal, 10); // 10
  ellipse(constrain(x - 10 + dispersal, 0, width), y + 30 + dispersal, 10); // 10
  ellipse(constrain(x - 5 + dispersal, 0, width), y + 30 + dispersal, 10); // 10
  ellipse(constrain(x + dispersal, 0, width), y + 30 + dispersal, 10); // 10

  // Middle part of W
  ellipse(constrain(x - 30 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 25 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 20 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 15 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 10 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 5 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x + 5 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x + 10 + dispersal, 0, width), y, 10); // 10
  ellipse(constrain(x - 10 + dispersal, 0, width), y + 5 + dispersal, 10); // 10
  ellipse(constrain(x - 10 + dispersal, 0, width), y + 10 + dispersal, 10); // 10
}
