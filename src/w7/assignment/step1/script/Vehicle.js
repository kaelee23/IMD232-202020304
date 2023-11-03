class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx) {
    // 차량의 초기 상태 설정
    this.pos = createVector(x, y); // 위치
    this.vel = p5.Vector.random2D(); // 무작위 초기 속도
    this.acc = createVector(); // 초기 가속도
    this.mass = mass; // 질량
    this.rad = rad; // 반지름
    this.speedMx = speedMx; // 최대 속도
    this.forceMx = forceMx; // 최대 힘
    this.neighborhooodRad = 50; // 이웃 차량 고려 반경

    // 차량의 색상 설정 (HSL 색상 모드)
    this.color = color(random(240), 100, 50);
  }

  // 다른 차량들과의 거리를 고려한 이동 방향 계산
  cohesion(others) {
    let cnt = 0; // 이웃 차량의 수
    const steer = createVector(0, 0); // 이동 방향을 결정할 힘 벡터
    others.forEach((each) => {
      if (each !== this) {
        // 자기 자신과의 거리는 고려하지 않음
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos); // 이웃 차량의 위치를 합산
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt); // 위치의 평균 계산
      steer.sub(this.pos); // 현재 위치에서 목표 위치로의 벡터 계산
      steer.setMag(this.speedMx); // 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 목표 속도 벡터를 뺀다
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 최종 이동 방향 반환
  }

  // 다른 차량들과의 방향을 일치시키는 메서드
  align(others) {
    let cnt = 0; // 이웃 차량의 수
    const steer = createVector(0, 0); // 일치시킬 방향 벡터
    others.forEach((each) => {
      if (each !== this) {
        // 자기 자신은 고려하지 않음
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel); // 이웃 차량의 속도를 합산
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt); // 속도의 평균 계산
      steer.setMag(this.speedMx); // 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 목표 속도 벡터를 뺀다
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 최종 방향 벡터 반환
  }

  // 다른 차량들과의 격리를 유지하는 메서드
  separate(others) {
    let cnt = 0; // 이웃 차량의 수
    const steer = createVector(0, 0); // 격리를 유지할 방향 벡터
    others.forEach((each) => {
      if (each !== this) {
        // 자기 자신은 고려하지 않음
        const dist = this.pos.dist(each.pos); // 두 차량 사이의 거리 계산
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec); // 이웃 차량에서 멀어지는 방향을 합산
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      steer.div(cnt); // 방향 벡터의 평균 계산
      steer.setMag(this.speedMx); // 최대 속도로 조절
      steer.sub(this.vel); // 현재 속도에서 목표 속도 벡터를 뺀다
      steer.limit(this.forceMx); // 최대 힘으로 제한
    }
    return steer; // 최종 방향 벡터 반환
  }

  // 외부의 힘을 적용
  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass); // 가속도에 힘을 추가
  }

  // 위치, 속도, 가속도 업데이트 메서드
  update() {
    this.vel.add(this.acc); // 현재 속도에 가속도를 더함
    this.vel.limit(this.speedMx); // 최대 속도로 제한
    this.pos.add(this.vel); // 위치 업데이트
    this.acc.mult(0); // 가속도 초기화
  }

  // 화면 경계를 넘어가면 반대쪽에서 나오게 조정하는 메서드
  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }

  //차량 모양을 그리는 함수
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    noStroke();
    fill(this.color);

    //작은 화살표 모양 그리기
    beginShape();
    vertex(0, -this.rad);
    vertex(-this.rad / 2, -this.rad / 2);
    vertex(-this.rad, -this.rad);
    vertex(0, this.rad / 2);
    vertex(this.rad, -this.rad);
    vertex(this.rad / 2, -this.rad / 2);
    endShape(CLOSE);

    pop();
  }
}
