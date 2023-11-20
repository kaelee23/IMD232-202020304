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
  //loadPixels();
  //
  //for (let y = 0; y < height; y++) {
  //  for (let x = 0; x < width; x++) {
  //    const idx = width * y + x;
  //    const color = pixels[idx];
  //    const b = brightness(color);
  //    ellips(x, y(b / 255) * 20);
  //  }
  //}
  //updatePixels();
}
