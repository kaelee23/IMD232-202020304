function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);
}

function draw() {
  background(255);
  const text = '^(&*@#&#@($&*^*&^%#';
  let result = '';

  for (let i = 0; i < text.length; i++) {
    result += ' '.repeat(i); // 현재 문자의 위치만큼 공백을 추가
    result += text[i]; // 현재 문자를 추가
  }

  console.log(result);
}
