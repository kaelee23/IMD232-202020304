console.log(2);
console.log('문자');
console.log(true);

const two = 2;
console.log(two);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal);

const additionConst = two + four;
console.log(additionConst);

let addition = two + four;
console.log(addition);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

//const additionConst = two + four;
//console.log(additionConst);

addition = addition + two;
console.log('더하기', addition);
addition += two;
console.log('더하기', addition);

subtraction = subtraction - two;
console.log('빼기', subtraction);
subtraction -= two;
console.log('빼기', subtraction);
subtraction += -two;
console.log('빼기', subtraction);
subtraction += -1 * two;
console.log('빼기', subtraction);

multiplication = multiplication * two;
console.log('곱하기', multiplication);
multiplication *= two;
console.log('곱하기', multiplication);

division = division / two;
console.log('나누기', division);
division *= 1 / two;
console.log('나누기', division);

console.log('square', 8 ** 2);
console.log('square', Math.pow(8, 2));
console.log('power function', 2 ** 8);
console.log('power function', Math.pow(2, 8));
console.log('square root', 2 ** 0.5);
console.log('square root', Math.pow(2, 0.5));

let counter = 0;
console.log('counter', counter); // counter: 0
counter++;
console.log('counter', counter); // counter: 1
let remainder = counter % four;
console.log('remainder', remainder); // remainder: 1
counter++;
console.log('counter', counter); // counter: 2
remainder = counter % four;
console.log('remainder', remainder); // remainder: 2
counter++;
console.log('counter', counter); // counter: 3
remainder = counter % four;
console.log('remainder', remainder); // remainder: 3
counter++;
console.log('counter', counter); // counter: 4
remainder = counter % four;
console.log('remainder', remainder); // remainder: 0
counter++;
console.log('counter', counter); // counter: 5
remainder = counter % four;
console.log('remainder', remainder); // remainder: 1
counter++;
console.log('counter', counter); // counter: 6
remainder = counter % four;
console.log('remainder', remainder); // remainder: 2
counter++;
console.log('counter', counter); // counter: 7
remainder = counter % four;
console.log('remainder', remainder); // remainder: 3
counter++;
console.log('counter', counter); // counter: 8
remainder = counter % four;
console.log('remainder', remainder); // remainder: 0

let boolean = true;
console.log('boolean', boolean);
boolean = !boolean;
console.log('boolean', boolean);

const textTwo = '2';
console.log('addition with text', two + textTwo);
console.log('addition with number', two + two);
console.log('a way to solve', two + Number(textTwo));
