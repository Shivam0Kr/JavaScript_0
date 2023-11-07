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

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log("index: 5 detected");
        break;
    }
    console.log(`value of index ${index}`);
}