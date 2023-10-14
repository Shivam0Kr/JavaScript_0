const name= "Arjun"
const id = 23
console.log("My name is "+ name+ " and "+ "id is "+ id);

console.log(`My name is ${name} and id is ${id}`);              // prefer this

const gameName = new String ("vegas City")
console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('C'));

// substring
let value = gameName.substring(0,4)
console.log(value);

// slice
let value1 = gameName.slice(-7,4)
console.log(value1);

// trim
// replace
const url = "https://www.google.search%20.com"
console.log(url.replace('%20',''));

//split
console.log(gameName.split(' '));
// go detail in Strinngs