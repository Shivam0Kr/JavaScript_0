let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.getHours());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
   console.log(myDate.toLocaleTimeString());

console.log(typeof myDate)      //  Date is a object type   - interview Q

// let createDate = new Date(2021, 0, 20)
// console.log(createDate.toString());

// let createDate = new Date(2023, 0 , 22 , 4, 4)
// console.log(createDate.toLocaleString());

// let createDate = new Date("2023-05-16")
// console.log(createDate.toLocaleString());

let createDate = new Date("01-06-2023")
console.log(createDate.toLocaleString());

console.log("---------Time Stamp------------");
// Time stamp
let timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate.getTime());

console.log(createDate.getDay());
console.log(Math.floor(Date.now()/1000));       // converted to minutes


let newDate = new Date()
console.log(newDate.getMonth());


console.log(`And the day is ${newDate.getDay()}`)