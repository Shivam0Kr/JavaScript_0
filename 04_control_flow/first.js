const userLoggedIn = false;
if(userLoggedIn){
    console.log("true");
}
else
{
    console.log("negative");
}

/////////////////////////////

let power = "4000"
const score = 200;
if(score > 100){
    const power = "fly"
    console.log("User power is "+ power);
    console.log(`User power is: ${power}`);
}
console.log(`User power is: ${power}`);

///////////////////////////////
const balance = 1000
if (balance < 2000) console.log("low balance");             // implicit scope       not usually recommended
//////////////////////////////

const totalBalance = 2000
if (totalBalance>1000){
    console.log("greater than 1000");
}
else if(totalBalance==1000){
    console.log("not equal to 1000");
}
else{
    console.log(`your balance is: ${totalBalance}`);
}
console.log(`your balance is: ${totalBalance}`);



