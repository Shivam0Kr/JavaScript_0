// reduce()

const numbers = [1, 2, 3]
// const total = numbers.reduce(function(accumulate, currentValue){
//     console.log(`accumulate: ${accumulate} and currentValue: ${currentValue}`);
//     return accumulate + currentValue
// }, 0)


const total = numbers.reduce((accumulate, currentValue)=>{ return accumulate + currentValue},0)
console.log(total);
// ----------------------------

const cartDetails = [
    {
        itemName: "JAVA",
        price: 2999
    },
    {
        itemName: "PYTHON",
        price: 3999
    },
    {
        itemName: "Machine Learning",
        price: 4500
    },
    {
        itemName: "Web Developer",
        price: 4999
    }
]

const totalPrice = cartDetails.reduce((accumulate, items) => (accumulate + items.price),0)
console.log(totalPrice);