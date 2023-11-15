let dom;
let htmlDom;
let canvasW = 600;
let canvasH = 400;

function setup() {
  //dom을 여기서 만들어서 여기 벗어나면 사용안댐 let을 밖으로 빼기
  //let dom = select('#hereGoseMyp5Sketch');
  dom = select('#hereGoseMyp5Sketch');
  //console.log('p5select', dom);
  //console.log('p5 select', dom.width);

  htmlDom = document.querySelector('#hereGoseMyp5Sketch');
  //console.log('querySelector', htmlDom);
  //console.log('querySelector', htmlDom.clientWidth);
  let canvas = createCanvas(canvasW, canvasH);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {
  console.log('이 사이즈입니다');
  // dom = select('#hereGoseMyp5Sketch');
  //초기값만 데려옴
  //console.log('p5select', dom);
  //계속 보고 있음 구문을 안해줘도 곗ㅗㄱ 그 친구의 width값을 가져옴
  //아래껄 더 선호
  //console.log('querySelector', htmlDom);
  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
