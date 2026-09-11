//There are two types to declare objects in javascript
//1. Object Literal
//2. Constructor Function
//------------------------------------------------------------------------------------------------------------------------

//1. Object Literal
//declaring an object using object literal
const mySymbol = Symbol("key1")
const myObj = {
    name: "Vishal",
    "full name": "Vishal Shaw",
    [mySymbol]: "mykey1",                        //we have no acess other than using "Bracket Notation"
    age: 22,
    location: "kolkata",
    email: "vishal@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}   

// there are two ways to access the properties of an object   --- Dot notation and Bracket notation
//Dot notation 
console.log(myObj.name); // Output: "Vishal" 
console.log(myObj.lastLoginDays) // Output: ["Monday", "Saturday"]

//Bracket notation
console.log(myObj["name"])
console.log(myObj["full name"])
console.log(myObj[mySymbol])

myObj.email = "vishal@gmail.com" //we can change anything just by using ' = '
console.log(myObj.email); // OUTPUT: vishal@gmail.com

//Freezing (it helps to ensure that we cannot change any object)
//Object.freeze(myObj)
myObj.location = "Delhi"
console.log(myObj.location) // Output: kolkata  
console.log(myObj); 

myObj.greeting = function(){
    console.log("Hello JS user")
}

console.log(myObj.greeting());  //OUTPUT: Hello JS user
console.log(myObj.greeting);    /* OUTPUT: undefined
                                           ƒ (){
                                                console.log("Hello JS user")
                                           }
                                            */
console.log(typeof myObj.greeting);  //OUTPUT: function

myObj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // The keyword 'this.' allows us to refer to the same object
}  //OUTPUT: Hello JS user, Vishal

console.log(myObj.greetingTwo()); //OUTPUT: undefined
console.log(typeof myObj.greetingTwo); //OUTPUT: function

