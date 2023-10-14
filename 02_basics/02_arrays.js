const heros1 = ["A", "B", "C", "D"]
const heros2 = ["1", "2", "3", "4"]

// heros1.push(heros2)
// console.log(heros1);
// console.log(heros1[4][1]);       instead of this we can use concat

// const heros = heros1.concat(heros2)
                // we can also use spread(likely used) instead of concat

const heros = [...heros1, ...heros2]        // spread operator
console.log(heros);

const newArray = [1,2,3,4, [8, 9, 7], 8, [6, 9, [4, 8, 9, 0]]]
const updateArray = newArray.flat(Infinity)
console.log(updateArray);

console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"));       // converted into an array (from)
console.log(Array.from({name: "Rahul"}))      //*we have to specify for which element(key or value) has to be converted into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
