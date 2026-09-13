//Truthy values are non-false values that act as true in conditions

//false values -- false, 0, -0, BigInt On, "", null, undefined, NaN
//truthy values -- "0", 'false', " ", [], {}, function(){}

const userEmail = []

if(userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email")
}  //OUTPUT: Got user email

if(userEmail.length === 0){
    console.log("Array is empty");
}  //OUTPUT: Array is empty

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}  //OUTPUT: Object is empty

//----------------------------------------------------------=====================---------------------------------------------------------

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;  //output:10
val1 = null ?? 10;  //output:10
val1 = undefined ?? 16;  //output:16
val1 = null ?? 15 ?? 20;  //output: 15

console.log(val1);


//-----------------------------------------------------------===========================--------------------------------------------------
//Ternary Operator --Ternary operator is a shorthand if-else. It checks a condition, then returns one value if true, another if false
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")  //output: less than 80
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")  //output: more than 80