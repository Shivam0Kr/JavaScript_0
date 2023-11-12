// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop is ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value of j: ${j} and i: ${i}`);
    }
}

console.log(true+1);
console.log("5"-1);
console.log(typeof(NaN));

let arr1 = [2, 3, 4, 5];
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    // console.log(element);
}

// break; continue;

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        // console.log("index: 5 detected");
        // break;
        continue;
    }
    // console.log(`value of index ${index}`);
}


// while loop

let i = 10;
while (i>=5) {
    // console.log(i);
    i = i-1;
}

let index = 1
while (index <= 10) {
    // console.log(`value is: ${index}`);
    index = index+1;
}

let arr2 = ["A", "B", "C", "D", "E"]
let arr = 0;
while(arr < arr2.length){
    console.log(arr2[arr]);
    arr++;
}

// do while
let score = 11;
do {
    console.log(`score is: ${score}`);
    score++;
} while (score <= 20);