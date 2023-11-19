class Cell {
  constructor(x, y, w, h, isClickable = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isClickable = isClickable;
    this.state = false;
    this.nextState = this.state;
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }
  calcNextState() {
    const opponentCounts = [0, 0, 0]; // 각각 Rock, Paper, Scissors에 대한 이웃의 수를 카운트

    this.neighbors.forEach((eachNeighbor) => {
      if (eachNeighbor) {
        opponentCounts[eachNeighbor.state]++;
      }
    });

    // 이기는 경우에 대한 조건 설정
    if (this.state === ROCK && opponentCounts[SCISSORS] > 2) {
      this.nextState = SCISSORS; // Rock vs Scissors
    } else if (this.state === PAPER && opponentCounts[ROCK] > 2) {
      this.nextState = ROCK; // Paper vs Rock
    } else if (this.state === SCISSORS && opponentCounts[PAPER] > 2) {
      this.nextState = PAPER; // Scissors vs Paper
    } else {
      this.nextState = this.state; // 방어
    }
  }

  update() {
    this.state = this.nextState;
  }

  isHover(mx, my) {
    return (
      this.x < mx && this.x + this.w > mx && this.y < my && this.y + this.h > my
    );
  }

  toggleState(mx, my) {
    if (!this.isClickable) return false;
    if (!this.isHover(mx, my)) return false;
    this.state = !this.state;
    return true;
  }

  display(mx, my) {
    push();
    translate(this.x, this.y);
    stroke(this.isHover(mx, my) ? 'red' : 'black');
    fill(this.state ? 255 : 64);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
