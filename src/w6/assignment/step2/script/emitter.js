class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
    this.hasEmitted = false; // 한 번 원을 뿌린 후 더 이상 뿌리지 않도록 체크
  }

  addParticle() {
    if (!this.hasEmitted) {
      let numParticles = Math.floor(random(100, 121)); // 100에서 120 사이의 랜덤한 개수
      for (let i = 0; i < numParticles; i++) {
        // 랜덤 속도 벡터의 크기를 19에서 20 사이로 설정
        let speed = random(19, 20);
        // 무작위 각도 설정
        let angle = random(TWO_PI);
        // 랜덤 속도 벡터 생성
        let velocity = p5.Vector.fromAngle(angle);
        velocity.mult(speed);

        this.particles.push(
          new Particle(this.origin.x, this.origin.y, velocity)
        );
      }
      this.hasEmitted = true;
    }
  }
}
