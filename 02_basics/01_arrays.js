const arr1 = [0, 1, 2, 3, 4, 5]

console.log(typeof arr1)     // Array is an object and storing multiple items in a single variable and can contain all type of values. In JS Arrays are not primitive but Array objects.

console.log(arr1[2]);

// JS array copy operation create shallow copies(an object is a copy whose properties share the same references). All standard built in copy operations with any JS object create shallow copies rather than deep copies.

const arr2 = new Array(1,2,3,4)

// // Array methods
// arr2.push(6)
// arr2.push(18)
// console.log(arr2);

// arr2.pop()
// console.log(arr2);

// arr2.unshift(0)
// arr2.shift()
// console.log(arr2);

console.log(arr2.includes(9));