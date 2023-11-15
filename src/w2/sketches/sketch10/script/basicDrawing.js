function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  rectMode(CORNER);
  ellipse(100, 100, 50);
  rect(100, 100, 50, 50);
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50);
  ellipse(400, 100, 25, 50);
}
