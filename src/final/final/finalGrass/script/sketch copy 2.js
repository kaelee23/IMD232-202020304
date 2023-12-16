let t = 0; // 시간 변수

function setup() {
  createCanvas(600, 400); // Set your canvas size
  noFill();
  stroke(40, 200, 40);
}

function draw() {
  background(10, 10); // 불투명한 배경화면(파티클의 꼬리 만들기)

  // 타원형으로 구성된 x와 y 그리드 만들기
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 각 타원의 시작 점은 마우스 위치에 따라 달라집니다.
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // 또, 파티클의 위치에 따라 달라집니다.
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // 각 파티클은 직선을 그리며 움직입니다.
      let myX = x + 30 * cos(2 * PI * t + angle);
      let myY = y + 20 * sin(2 * PI * t + angle);

      // Random length for a more grass-like appearance
      let length = random(10, 100);

      // 직선으로 그리기
      line(myX, myY, myX, myY + length);
    }
  }

  t = t + 0.01; // 시간 업데이트
}
