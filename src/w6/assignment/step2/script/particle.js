class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = random(TWO_PI); // 0에서 2π(360도) 사이의 무작위 각도 설정
    this.vel = p5.Vector.fromAngle(this.angle); // 각도를 벡터로 변환하여 초기 속도로 사용
    this.vel.mult(random(19, 20));
    this.acc = createVector(0, 0);
    this.lifespan = 60;
    this.particleColor = color(random(255), random(255), random(255)); // 무작위 색상
  }
  run() {
    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
    this.update();
    this.display();
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 1.0;
    this.acc.mult(0);
  }

  display() {
    colorMode(HSB, 360, 100, 100); // HSV 색상 모드로 설정
    noStroke(); // 선 제거
    fill(this.particleColor, 100, 100, this.lifespan); // HSB 색상 설정
    ellipse(this.pos.x, this.pos.y, 10, 10); // 원 그리기
    colorMode(RGB); // 색상 모드를 기본값인 RGB로 되돌립니다.
  }

  applyForce(force) {
    this.acc.add(force);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
