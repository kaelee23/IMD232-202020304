function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // Set canvas size
  createCanvas(600, 400); // Adjust the size as needed

  background(255);
  noStroke();
  fill('red');
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 50);

  // '바람'이란 글자 그리기
  textSize(48); // Increase text size for better visibility
  fill('black'); // Text color
  textAlign(CENTER, CENTER); // Center the text
  text('바람', width / 2, height / 2); // Display at the center of the canvas
}
