// Immediately invoked function expressions    (IIEF)

// function hello(){
//     console.log("Db Connected");
// }
// hello()

(function hello(){
    // named IIFE (hello)
    console.log("Db Connected");                    // this can also be written as above
})();                                               // required ;


( () => {
    console.log("Database Connected");
} ) ();                                             // ; must if executing two or more IIFE code at a time


( (name) => {
    console.log(`Database Connected ${name}`);
} ) ("Harsh")

