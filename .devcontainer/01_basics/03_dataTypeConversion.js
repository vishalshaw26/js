let score = "vishal"
console.log(typeof score);
// OR
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
/*
OUTPUT
"33" => 33
"22abc" => NaN
true => 1, false => 0
*/

let isLoggedIn = "vishal"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
OUTPUT
1 => true; 0 => false
"" => false (for empty string)
"vishal" => true
*/

let marks = 33
let newmarks=String(marks)
console.log(newmarks)
/*
OUTPUT
  33
  String       -----(converted)
*/



//-------------------OPERATIONS-------------------

let val = 6
let negval = -val
console.log(negval)                 // OUTPUT: -6


let str1 = "vis"
let str2 = "hal"
let str3 = str1 + str2
console.log(str3)                   // OUTPUT: vishal 

console.log("1" + 3)                 // OUTPUT: 13
console.log(1 + "5")                 // OUTPUT: 15
console.log("1" + 3 + 5)              // OUTPUT: 135       (because of left to right associativity
console.log(1 + 3 + "5")              // OUTPUT: 45        (because of left to right associativity)
console.log(+true)                     // OUTPUT: 1        (because of type conversion)
console.log(+false)                    // OUTPUT: 0        (because of type conversion)

let x1,x2,x3
x1=x2=x3=3+3
console.log(x1, x2, x3)              // OUTPUT: 6 6 6

let gameCounter = 100
++gameCounter
console.log(gameCounter)              // OUTPUT: 101       (because of pre_increment)
gameCounter++
console.log(gameCounter)              // OUTPUT: 102       (because of post_increment)