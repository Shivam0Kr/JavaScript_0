function myName(){
    console.log("Rahul");
    console.log("Kumar");
}
myName()

// function addNumbers(number1, number2) {
//     console.log(number1+number2);
// }
// const result = addNumbers(2,3)
// console.log("result is: ",result);

function addNumbers(number1, number2) {
    let result = number1+number2
    return result
    console.log("rahul");                   // will not print anything after return keyword
}
const result = addNumbers(2,3)
// console.log("result is: ",result);


function loginUserMessage(userName = "Sam") {               // if nothing passed by user then you can default set i.e., ex- Sam
    if (userName===undefined)
    {
        console.log("please enter a username");
    }
    else
    {
    return `${userName} just loggedIn`
    }
}
//console.log(loginUserMessage("Rahul"));
console.log(loginUserMessage());                            // Here we can overwrite by passing the argument



// function calculateCart_Price(num1){
//     return num1
// }
// console.log(calculateCart_Price(200));   // this is normal situation where we can only pass limited number of arguments as defined in parameters

function calculateCart_Price(...num1){      // we can pass as many arguments using *rest* operator and gives in an array
    return num1
}
console.log(calculateCart_Price(200, 400, 500, 1000, 1999));


//------------------- Using function and Object --------------------------------
const user = {
    userName : "Rahul",
    price : 1999
}
function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)               // can also be done as below
handleObject({
    userName : "Yash",
    price : 999
})


const arr1 = [100, 200, 300, 400, 500]
function returnSecond_value(getArr) {
    return getArr[1]
}
console.log(returnSecond_value(arr1));
