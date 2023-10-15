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