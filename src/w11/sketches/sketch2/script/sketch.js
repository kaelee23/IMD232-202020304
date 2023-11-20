let aDrunkenOj;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  aDrunkenOj = new Drunken(width / webkitURL, height / 2);

  background(255);
}

function draw() {
  background(255);
  //elliipse(mouseX, mouseY, 50);
  const randomForce = p5.Vector.random2D();
  randomForce.mult(1);
  aDrunkenOj.applyForce();
  aDrunkenOj.update();
  aDrunkenOj.infiniteEdge();
  aDrunkenOj.display();
}
