function myName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}
myName()

//ADDING TWO NUMBERS:--
//(1)
function addTwoNum(num1,num2){
    console.log(num1 + num2);
}
addTwoNum(3,4) //output: 7

const result = addTwoNum(3, 4)
console.log(result) //output: undefined
//----------------------------------------------------------------------------

//(2)
function addTwoNum(num1,num2){
    let result = num1 + num2
    return result        
    console.log("example") //Any code after 'return' will never execute
}
const result = addTwoNum(3, 4)
console.log(result) //output: 7
//-------------------------------------------------------------------------------
//(3)
function addTwoNum(num1,num2){
     return num1 + num2
     
    }
const result = addTwoNum(3, 4)
console.log(result) //OUTPUT: 7
//------------------------------------------------------------------------------------

//function that accept a username and returns "<username> just logged in"
function loginUserMessage(username){
    return `${username} just  logged in`
}
console.log(loginUserMessage("vishal"))

//using if statement -------------------------------------------------------------------------
function loginUserMessage(username){
    if (username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage("vishal"));

//undefined checks only undefined; !username checks all falsy values
function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage("vishal")); 

//when username is defined,the 'if' block is skipped and the return statement executes directly
function loginUserMessage(username = "SAMAY"){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedin`
}
console.log(loginUserMessage()) //output: SAMAY just loggedin
console.log(loginUserMessage("vishal")) //vishal just loggedin  --- If a value is passed, it replaces the default value; otherwise, "SAMAY" is used

//_________________________________________________________________-----------------------------__________________________________________________________
function calculateCartPrice(...num1){          //here '...' is working as rest operator
    return num1
}

console.log(calculateCartPrice(200,400,600))  //output: [200, 400, 600]

function calculateCartPrice(val1,val2, ...num1){          
    return num1
}

console.log(calculateCartPrice(200,400,600,350,2500))  //output: [600, 350, 2500]  --- here,the value 200 and 400 are assigned to val1 and val2 and the remaining values goes to num1

const user = {
    username: "mango",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)  //output:username is mango and price is 200

//we can also directly pass the object
handleObject({
    username: "apple",
    price: 399
})

const myNewArry = [200,250,300,350,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArry));  //output: 250
console.log(returnSecondValue([400,700,500])); //output: 700  -- -An array can be passed directly to the function without storing it in a variable