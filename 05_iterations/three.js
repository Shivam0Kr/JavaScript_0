//  for each loop ---------------------------------
const languages = ["Java", "Python", "Javascript", "Node js"]

languages.forEach(element => {
    // console.log(element);
});

languages.forEach(function (index){
    // console.log(index);
})

function printMe(i){
    // console.log(i);
    // console.log("'");
}
languages.forEach(printMe)

languages.forEach((item, index, array)=>{
    // console.log(item, index, array);
})

const myApp = [
    {
        language: "Javascript",
        type: "project"
    },
    {
        language: "JAVA",
        type: "backend"
    },
    {
        language: "React",
        type: "library",
        used: "web app"
    }
]

myApp.forEach(element => {
    console.log(element.language);
});

