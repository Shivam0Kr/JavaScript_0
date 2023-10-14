// *********************Conversion*************************** /

// let score = "33abc"
// let score1 = null

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// console.log(score1);

// // "33" -> 33
// // "33abc" -> NaN
// // true -> 1, false -> 0

// let loggedIn = 1

// let BooleanloggedIn = Boolean(loggedIn)
// console.log(BooleanloggedIn);

// // 1 -> true, 0 -> false
// //"" -> false
// //"Shivam"  -> true

// let newNum = 40
// let StringNum = String(newNum)
// console.log(StringNum);
// console.log(typeof StringNum);      // converted number to String


// ************Operations************************ /
let value1 = 10
let newValue = -value1
console.log(newValue);

console.log(2+3);
console.log(2**3);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + "2" + "2");
console.log(1 + 2 + "2");
console.log((3+4) * 61 % 3);

console.log(+true);             // don't use
console.log(+"");               // don't use


let string1 = "Hello"
let string2 = " Shivam"
let String = string1+string2
console.log(String);

let num1, num2, num3 = 2+3

let gameCounter = 100
console.log(gameCounter);
gameCounter++
console.log(gameCounter);
gameCounter--
gameCounter--
console.log(gameCounter);

let x = 3
const y = x++
console.log(`x:${x} \n y:${y}`);

let a = 3
console.log(a);
const b = ++a
//let b1 = ++a
console.log(`a:${a} \n b:${b}`);