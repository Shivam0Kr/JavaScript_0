"use strict"    // treats all JS code as a newer version of code and implementation

//alert("hello")  // we can only use this in web browser document, console not in node js

/* useful websites
tc39.es
mdn web docs
*/

// different datatypes

// null - standlone value
// Number
// Boolean
// BigInt
// String
// symbol- mostly used in React for uniques

console.log(typeof "Shivam");
console.log(typeof null);
console.log(typeof undefined);

console.log("Shivam Kumar");

let city = 5600
console.log(typeof city);

// Primitive datatypes and Non primitive datatypes

// Primitive datatypes are also known as call by value
// - There are 7 types
    // String, Number, Boolean, null, undefined, Symbol, BigInt

    const roll = 100
    const score = 109.9
    console.log(roll,score);

    const isLoggedIN = false
    const temperature = null

    const id = Symbol("123")
    const New_id = Symbol("123")
    console.log(id===New_id);       // false


// Non primitive datatypes are also known as call by reference
    // Array, Objects, Functions   ------>   Data types of these are called functions and for function is called object function.

    const Names = ["Rahul", "Harsh", "Ravi", "Adarsh", "Karan"]

    let myObj = {
        Name: "Harsh",
        Age: 24,
        City: "Bangalore"
    }
    console.log(myObj);

    function myFunction(){
        console.log("Hello World")
    }

    console.log(typeof myFunction);
    console.log(typeof Object);
    console.log(typeof Array);
    console.log(typeof Symbol);
console.log("------------------------------");
    console.log(typeof bigNumber);
    console.log(typeof temperature);

    //*************************************** MEMORY *************************************************** */

    // stack memory used in (primitive datatype)        -- when we declare variable in Stack* memory we get a copy
    // heap memory used in (non primitive datatype)     -- but when define something(object,.) we get reference* of Original value
    

    let youTubeName = "Hitesh"      // stack example
    let newName = youTubeName
    newName = "ChaiORcode"

    console.log(youTubeName);
    console.log(newName);

    let user1={                     // heap example
        Name: "Santosh",
        Email: "abc@gmail.com"
    }

    let user2= user1
    user2.Email = "updateabc@gmail.com"
    console.log(user1.Email);
    console.log(user2.Email);