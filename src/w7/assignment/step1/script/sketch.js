//트래픽을 만들기 위한 변수
let traffic;
//경계를 무한으로 만들기 위한 값
let infiniteOffset = 80;

function setup() {
  //캔버스 설정
  setCanvasContainer('canvas', 3, 2, true);
  //컬러 모드 설정
  colorMode(HSL, 360, 100, 100, 100);
  //배경을 흰색으로 설정
  background('white');
  //트래픽 설정
  traffic = new Traffic();
  for (let n = 0; n < 10; n++) {
    //처음에 일부 차량을 생성
    traffic.addVehicle(random(width), random(height));
  }
}

function draw() {
  //매 프레임마다 배경을 흰색으로 설정
  background('white');
  //트래픽 실행
  traffic.run();
}

function mouseDragged() {
  //마우스 드래그 시 차량 추가
  traffic.addVehicle(mouseX, mouseY);
}
