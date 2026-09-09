const score = 400
console.log(score)

const balance = new Number(100) 
console.log(balance) //Number {100}

console.log(balance.toString()) //100  -- changing number to string 
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00  -- it helps to fix the decimal points

const otherNumber = 123.567
console.log(otherNumber.toPrecision(3)) //124  --It gives priority before decimal point for the precision and rounds the number to the nearest value

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //1,000,000   -- it helps to format the number based on the locale and adds commas for better readability according to the us standard
console.log(hundreds.toLocaleString("en-IN")) //10,00,000  -- adds commas for better readability according to the indian standard

//=================================================================MATHS============================================================================

console.log(Math) //Math {…}  -- it is a built-in object that has properties and methods for mathematical constants and functions

console.log(Math.abs(-55)) //55  -- it returns the absolute value of a number or converts a negative number to a positive number
console.log(Math.round(4.6)) //5  -- it rounds the number to the nearest integer
console.log(Math.ceil(4.1)) //5  -- it rounds the number up to the nearest integer
console.log(Math.floor(4.9)) //4  -- it rounds the number down to the nearest integer

console.log(Math.min(0, 150, 30, 20, -8)) //-8  -- it returns the smallest number from the given numbers
console.log(Math.max(0, 150, 30, 20, -8)) //150  -- it returns the largest number from the given numbers

console.log(Math.random()) //0.123456789  -- it generates a random decimal number between 0 and 1.
/* Math.random() generates a random decimal number between 0 and 1. This range includes 0 but excludes 1.
    For example, Math.random() might generate numbers like 0.234, 0.6789, or 0.999*/

console.log(Math.random() * 10) //0.123456789  -- it generates a random decimal number between 0 and 10
/* When you multiply Math.random() by a number, like 10, you stretch the range:
   Math.random() * 10 will give a random number between 0 and just below 10.
   This range is [0, 10], meaning it can be as low as 0 but will never reach 10 (the highest possible value is close to 9.999999..9)*/

console.log((Math.random()*10)+1) //// this helps to avoid 0 and generates a random decimal number between 1 and 10
 /* Shifting the Range (Adding 1)to start from 1 instead of 0 simply add 1 to the result:
    Math.floor(Math.random() * 10) + 1 will give you a range from 1 to 10.
    This works because now the range [0, 9] gets shifted to [1, 10] */

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1) + min)// this helps to generate a random 'decimal number' between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))// this helps to generate a random 'integer number' between 10 and 20







