function setup() {
  createCanvas(400, 400);
  background(255);
  noFill();
  stroke('red');
  strokeWeight(2);
}

function draw() {
  background(255);

  let centerX = width / 2;
  let centerY = height / 2;

  // 여러 개의 곡선 그리기
  for (let i = 0; i < 5; i++) {
    let radius = 50 + i * 20;
    let numPoints = 10; // 곡선 상의 점 개수
    let angleIncrement = TWO_PI / numPoints;

    beginShape();
    for (let j = 0; j < numPoints; j++) {
      let x = centerX + radius * cos(j * angleIncrement);
      let y = centerY + radius * sin(j * angleIncrement);
      vertex(x, y);
    }
    endShape();
  }
}
