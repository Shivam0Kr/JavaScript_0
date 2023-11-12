const lang = ["Java", "Python", "Javascript", "Node js"]
const values = lang.forEach(item => {
    // console.log(item);
    return item         // for each didn't return
})
console.log(values);

// filter() -------------------------------------------

const num = [2, 4, 8, 9, 3, 12, 0]

// const newNum = num.filter(num => (num>5))
const newNum = num.filter(num =>{
    return(num>5);
})
// console.log(newNum);

const newNumber = []
num.forEach(num =>{
    if(num > 5){
    newNumber.push(num)
}
})
// console.log(newNumber);

// map() ----------------------------------------------------------

const number = [2, 14, 6, 8, 9, 3, 12, 0]
// const newNum1 = number.map(num => (num+10))


const newNum1 = number
        .map(value=>{return value*10})
        .map(value => value+1)
        .filter(value => (value > 30))
console.log(newNum1);