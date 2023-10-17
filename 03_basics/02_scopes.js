// let a = 100
// var b = 200
// const c = 300

// local scope
// global scope

if(true){
    let a = 10
    const b = 20
    console.log(a);
}

function one(){
    const userName = "Rahul"

    function two(){
        const city = "Bangalore"
        console.log(userName);
        console.log(city);
    }
    two()
}
one()


if(true){
    const welcome = "Hello"
    if(welcome==="Hello"){
        const name = " Rahul"
        console.log(welcome + name);
    }
}

function addOne(num){
    return console.log(num+1);
}
addOne(6)


const addTwo = function(num){               // also known as expression
    return num+2
}
addOne(6)





// addOne(6)
// function addOne(num){
//     return console.log(num+1);
// }


// addTwoo(6)                                    // ReferenceError: Cannot access 'addTwoo' before initialization
// const addTwoo = function(num){               // error
//     return num+3
// }
