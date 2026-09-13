//if, else, if else. (true statement will execute)
//comaprison operator --  <, >, <=, =<, >=, => , ==, !=, ===, !==

if(2 == "2"){ 
console.log("executed");
}  //output: executed

if(2 != 3){ 
console.log("executed");
}    //output: executed

const isLoggedIn = true
const temperature = 41

if(temperature < 50){ 
console.log("less than 50");
}  //output: less than 50

if(temperature < 50){ 
console.log("less than 50");
} else {
    console.log("temperature is greater than 50")
}  //output: less than 50

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}  //output: User power: fly

const balance = 1000
//if (balance > 500) console.log("pass"); //output: pass    --- implicite scope

if(balance < 500){
    console.log("less  than 500");
}else if (balance < 750){
    console.log("less than 750");
}else if (balance < 900){
    console.log ("less than 900");
}else{
    console.log("balance is greater or equals to 1000");
}  //output: balance is greater or equals to 1000

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true
//AND OPERATOR(&&)-- the condition will be true only if both sides are true
if ( userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
// OR OPERATOR(||)-- the condition will be true if at least one side is true
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}
