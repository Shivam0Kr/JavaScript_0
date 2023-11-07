// const userLoggedIn = false;
// if(userLoggedIn){
//     console.log("true");
// }
// else
// {
//     console.log("negative");
// }

// /////////////////////////////

// let power = "4000"
// const score = 200;
// if(score > 100){
//     const power = "fly"
//     console.log("User power is "+ power);
//     console.log(`User power is: ${power}`);
// }
// console.log(`User power is: ${power}`);

// ///////////////////////////////
// const balance = 1000
// if (balance < 2000) console.log("low balance");             // implicit scope       not usually recommended
// //////////////////////////////

// const totalBalance = 2000
// if (totalBalance>1000){
//     console.log("greater than 1000");
// }
// else if(totalBalance==1000){
//     console.log("not equal to 1000");
// }
// else{
//     console.log(`your balance is: ${totalBalance}`);
// }
// console.log(`your balance is: ${totalBalance}`);



const loggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedIn== true && debitCard== true){
    console.log("Allow the user to do action");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user loggedIn");
}

// -----------------------  Switch ------------------------------

const month = 2;
switch (month) {
    case 1:
        console.log("Jam")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;

    default:
        break;
}

// ---------------------------  thruthy and falsy  -------------------

// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN   other than this are thruthy values
// truthy values    ->  "0", "false", "  ", [], {}, function(){}

const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("user can't login");
}

// ---------------------
if(userEmail.length == 0){
    console.log("Array is empty");
}

// ---------------------
const  emptyObj= {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

if(false == 0){                     //  false == "", 0 == ' '  
    console.log(true);
}


// ---------------------------------------  Nullish Coalescing Operator ??  -------------------------
// let val = 5 ?? 10
// let val =  null ?? 10
// let val = 5 ?? undefined
let val =  null ?? 10 ?? 15

console.log(val);

// ------------------------------  Terniary Operator  ------------------
// condition ? true : false