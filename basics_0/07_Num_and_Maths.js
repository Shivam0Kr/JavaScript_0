
let balance = 32000
console.log (balance);

let balance2 = new Number(10000)

console.log(balance2);
console.log(balance2.toString());
console.log(balance2.toString().length);
console.log(balance2.toFixed(2));

const otherNumber = 12.789
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.789
console.log(otherNumber1.toPrecision(3));

console.log(5367.73.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

let num1 = Number.MAX_VALUE
console.log(num1);
let num2 = Number.MIN_VALUE
console.log(num2);

let num3 = "hello"
console.log(num3.length);

let num4 = Number.MIN_SAFE_INTEGER
console.log(num4);


// console.log(valueOf());


// --------------------------- MATH --------------------------
console.log(Math)

// console.log(Math.abs(-2));
// console.log(Math.round(-2.7));
// console.log(Math.ceil(2.7));
// console.log(Math.floor(-2.7));
// console.log(Math.min(10, 20, 6 ,88, 30))
// console.log(Math.max(10, 20, 6 ,88, 30))

console.log(Math.random())      // gives values between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.round(Math.random()*10+1))

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min+1)+min));