const user = {
    username: "Harsh",
    price: 1999,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to this course`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Rahul"
user.welcomeMessage()
// console.log(this);      // at node enviornnment this refers to empty object but but, when we console (this) on browser         
                                                                                    //           then object is window


function hello(){
    let userName = "Harsh"
    console.log(this);
    console.log(this.userName);     // giving undefined when used inside function
}
hello()

//----------------Arrow Function----------------

// const hello1 = () => {
//     let userName = "Rahul"
//     console.log(this);
// }

const addTwo = (num1, num2) => {
    return num1+ num2                           // explicit return
}
console.log(addTwo(3, 4));


// implicit return
// const addTwo1 = (num1, num2) =>  num1+ num2
const addTwo1 = (num1, num2) =>  (num1+ num2)               // mostly used in React
console.log(addTwo(3, 4));

const addTwo2 = (num1, num2) =>  ({userName: "Harsh"})      // returning object
console.log(addTwo2());