//object
// Objects can be declared in two ways:
//     1. literal
//     2. constructor  - when we create object through constructor is called //singleton.   ex- object.create

// object literals
    
const smb1 = Symbol("key1")
const user = {
    name : "Rahul",
    "full_name" : "Rahul Kumar",      // this can only be accessed by 2nd method
    // Symbol
    [smb1] : "myKey1",
    age : 24,
    city : "Bangalore",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
}
// Accessing values
// console.log(user.name);         // 1st method
// console.log(user["name"]);      // 2nd method  // can also be used like this because key is acting like String internally
// console.log(user["full_name"]);
// console.log(user[smb1]);
// console.log(typeof smb1);

// overridding values
user.name = "Akash"
Object.freeze(user) // this freezes the user values and further can't be changed
// console.log(user);
user.name = "Raj"
// console.log(user);
user.age = 34
// console.log(user);

// Functions