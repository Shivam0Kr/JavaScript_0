// for of

// ["", ""]
// [{}, {}, {}]

let arr = ["1", 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "how are you?"
for (const greet of greetings) {
    // console.log(greet);
    if (greet === " ") {
        continue;
    }
}

//  maps

 const map = new Map()
 map.set('IN', "India")
 map.set('US', "United States")
 map.set('FR', "FRANCE")

//  console.log(map);

for (const [key, value] of map) {
    // console.log(key, "->" ,value);
}

// forof can't be iterated in objects but forin can be used
const myObject = {
    js: 'javaScript',
    py: 'python',
    r:  'reactJS'
}
for (const key in myObject) {
    // console.log(`${key} is  ${myObject[key]}`);
}

const languages = ["Java", "Python", "JavaScript", "Node.js"]
for (const key in languages) {
    console.log(languages[key]);
}