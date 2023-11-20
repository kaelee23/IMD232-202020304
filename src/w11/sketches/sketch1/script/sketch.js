let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  cam = createCapture(VIDEO);
  cam.size(1080, 1024);
  cam.hide();
  //noLoop();
}

function draw() {
  background(255);
  image(cam, 0, 0, width, height);
  cam.loadPixels(cam);
  console.log('width', cam.width);
  console.log('height', cam.height);
}
