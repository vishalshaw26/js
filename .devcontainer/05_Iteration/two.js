//while loop-- while loop repeats code until condition is false
let index = 0
while (index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
} /* output: 
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10 */

let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
} /* output= 
value is flash
value is batman
value is superman */

//// do-while-- do-while loop runs code at least once, then repeats until condition is false

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
}while (score <=10);
/* output:- 
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10 */