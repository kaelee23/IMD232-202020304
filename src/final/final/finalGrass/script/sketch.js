let t = 0; // 시간 변수
let lineObj = null; // 클릭한 선을 저장할 변수

function setup() {
  createCanvas(600, 400); // Set your canvas size
  noFill();

  // Change line color to ash green (RGB values: 143, 188, 143)
  stroke(143, 188, 143);
}

function draw() {
  background(10, 10); // 불투명한 배경화면(파티클의 꼬리 만들기)

  // 클릭한 선 그리기
  if (lineObj) {
    strokeWeight(1); // Set line thickness to 1 pixel
    // Change line color to ash green
    stroke(143, 188, 143);
    line(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2);
    lineObj.y1 += 5; // 선이 아래로 이동하는 속도 조절
    lineObj.y2 += 5; // 선이 아래로 이동하는 속도 조절

    // 선이 캔버스 아래로 벗어나면 초기화
    if (lineObj.y1 > height || lineObj.y2 > height) {
      lineObj = null;
    }
  }

  // 타원형으로 구성된 x와 y 그리드 만들기
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 각 타원의 시작 점은 마우스 위치에 따라 달라집니다.
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // 또, 파티클의 위치에 따라 달라집니다.
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // 각 파티클은 직선을 그리며 움직입니다.
      // 길이를 랜덤하게 설정
      let length = random(10, 40);

      let myX = x + length * cos(2 * PI * t + angle);
      let myY = y + length * sin(2 * PI * t + angle);

      // 직선으로 그리기
      strokeWeight(0.5); // Set line thickness to 0.5 pixel
      // Change line color to ash green
      stroke(143, 188, 143);
      line(x, y, myX, myY);
    }
  }

  t = t + 0.01; // 시간 업데이트
}

function mouseClicked() {
  // 마우스 클릭 시 클릭한 위치의 선을 설정
  let x = mouseX;
  let y = mouseY;
  let xAngle = map(x, 0, width, -4 * PI, 4 * PI, true);
  let yAngle = map(y, 0, height, -4 * PI, 4 * PI, true);
  let angle = xAngle + yAngle;

  // Offset the starting point slightly upward
  y -= 10;

  // 길이를 랜덤하게 설정
  let length = random(10, 40);

  let myX = x + length * cos(2 * PI * t + angle);
  let myY = y + length * sin(2 * PI * t + angle);

  lineObj = {
    x1: x,
    y1: y,
    x2: myX,
    y2: myY,
  };
}
