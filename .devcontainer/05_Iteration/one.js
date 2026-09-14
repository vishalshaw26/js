//LOOPS   
// for loop -- is used to repeat code until a condition is met

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    }    /* output: 0
                    1
                    2
                    3
                    4
                    5
                    6
                    7
                    8
                    9 */

// use of for loop with a condtion
 for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    console.log(element)
    }       /* output: 0
                    1
                    2
                    3
                    4
                    5 is best number
                    5
                    6
                    7
                    8
                    9 */

//Nested loop -- we can use multiple loops in a loop

 for (let i = 0; i <= 2; i++) {
    //console.log(`Outer loop value ${i}`);
     for (let j = 0; j <= 5; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
     }
    } /* output: 
Outer loop value 0
Inner loop value 0 and inner loop 0
Inner loop value 1 and inner loop 0
Inner loop value 2 and inner loop 0
Inner loop value 3 and inner loop 0
Inner loop value 4 and inner loop 0
Inner loop value 5 and inner loop 0
Outer loop value 1
Inner loop value 0 and inner loop 1
Inner loop value 1 and inner loop 1
Inner loop value 2 and inner loop 1
Inner loop value 3 and inner loop 1
Inner loop value 4 and inner loop 1
Inner loop value 5 and inner loop 1
Outer loop value 2
Inner loop value 0 and inner loop 2
Inner loop value 1 and inner loop 2
Inner loop value 2 and inner loop 2
Inner loop value 3 and inner loop 2
Inner loop value 4 and inner loop 2
Inner loop value 5 and inner loop 2 */

//multiplication table
 for (let i = 1; i <= 3; i++) {
    //console.log(`multiplication of ${i}`);
     for (let j = 1; j <= 10; j++) {
        //console.log(i + '*' + j + " = " + i*j);
     }
    } /* OUTPUT: 
multiplication of 1
1*1 = 1
1*2 = 2
1*3 = 3
1*4 = 4
1*5 = 5
1*6 = 6
1*7 = 7
1*8 = 8
1*9 = 9
1*10 = 10
multiplication of 2
2*1 = 2
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
2*6 = 12
2*7 = 14
2*8 = 16
2*9 = 18
2*10 = 20
multiplication of 3
3*1 = 3
3*2 = 6
3*3 = 9
3*4 = 12
3*5 = 15
3*6 = 18
3*7 = 21
3*8 = 24
3*9 = 27
3*10 = 30 */

//USING ARRAY IN LOOP
let myArray = ["flash", "batman", "superman"]
console.log("length of array:", myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} /* OUTPUT: 
length of array: 3
flash
batman
superman */

//BREAK and CONTINUE
//break -- break statement immediately stops the loop when condition is met
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log('Detected 5');
        break
    }
    console.log(`Value of i is ${index}`);
}  /* OUTPUT: length of array: 3
              flash
              batman
              superman */

//continue -- continue statement skips the current loop iteration and moves to the next
for (let index = 1; index <= 10; index++) {
    if (index == 5){
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${index}`);
}  /* output: 
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Detected 5
Value of i is 6
Value of i is 7
Value of i is 8
Value of i is 9
Value of i is 10 */