// Singleton

// const tinderUser = new Object()     // singleton object
const tinderUser = {}               // non singleton object

tinderUser.id = "abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//An '=' can only follow a property name when the containing object literal is part of a destructuring pattern

const regUser = {
    email: "xyz123@gmail.com",
    full_name : {
        first_name : "Rahul",
        last_name : "San"
    }
}

// console.log(regUser.full_name.first_name, regUser.email);           //what is optional chaining?


// combining objects
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}
//const obj4 = {obj1, obj2}                             // invalid-way   
// const obj4 = Object.assign({}, obj1, obj2)              // optional but good to have
const obj4 = {...obj1, ...obj2}                            // using spread
// console.log(obj4);

const users = [
    {
    id : 1,
    email : "123@gmail.com"
    },
    {
    id : 1,
    email : "123@gmail.com"
    },
    {
    id : 1,
    email : "123@gmail.com"
    }
]

users[1].email
// console.log(users);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));                   // important.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//--------- destructing of object ---------------
const course = {
    c_name : "JavaScript",
    coursePrice : 1199,
    course_Instructor : "SoftwareTrainer"
}

// console.log(course.course_Instructor);              // instead of this we can also use below format

// const {course_Instructor} = course
// console.log(course_Instructor);                     // and this can also be de-structured as below

const {course_Instructor: Instructor} = course
console.log(Instructor);

// ----------------------- API -----------------------------------
// randomuserme.api
// jasonformater.org