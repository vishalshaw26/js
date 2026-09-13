
const user = {
    username: "vishal",
    marks: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage() //output: vishal, welcome to website
user.username = "samay"
user.welcomeMessage()  //output: samay, welcome to website
console.log(this)  //output: {}   -- empty object


const user = {
    username: "vishal",
    marks: 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage() 
user.username = "samay"
user.welcomeMessage()  
/* output:
vishal, welcome to website
{username: 'vishal', marks: 99, welcomeMessage: ƒ}
samay, welcome to website
{username: 'samay', marks: 99, welcomeMessage: ƒ} 
*/ 

function chai(){
    console.log(this)
}
chai()  //output: global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}


// () => {}       ---  arrow functiion
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo (3,4)) //OUTPUT: 7

//IMPLICITE RETURN -- means an arrow function automatically returns the result of a single expression without using the return keyword and {}
const addtwo = (num1,num2) => (num1 + num2)
console.log(addtwo(3,4)) //output: 7

const add = (num1,num2) => ({username: "vishal"})
console.log(add(3,4)) ;//output: {username: 'vishal'}  -- In arrow functions, if you want to return an object, you must wrap it in parentheses 

//Immediately Invoked Function Expression (IIFE)
(function chai(){          //named iife
    console.log(`IIFE`);  // Sometimes global scope causes problems, so we use IIFE to keep variables private and avoid pollution.
})(); //output: IIFE

 // arrow function IIFE
( () => {
    console.log(`example`)  
    }) ();  //output: example

( (name) => {
    console.log(`example2 ${name}`);
}) ('vishal')