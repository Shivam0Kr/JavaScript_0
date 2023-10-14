//console.log(2==1)
//operators    >, <, >=, =<, ==, !=


//  -------------------------Avoid these type of comparison to write clean code--------------
console.log("2">1);
console.log("null">1);
console.log(null==0);
console.log(null<1);

console.log(null>0);        // comparison converts Null to a number,treating as 0
console.log(null>=0);       // i.e, null >= 0 is true  and  null > 0 is false
//  ------------------------------------------------------------------------------------------

// Strict check ===
console.log(2==="2");
console.log(2=="2");