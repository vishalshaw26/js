//for of -- for-of loop is a shortcut to get values, not positions

const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);
}
/*output: 
1
2
3
4
5 */

const greeting =  "Hello World!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}
/*output: 
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
Each char is ! */

//MAPS -- A Map in JavaScript is a special object that stores key–value pairs where each key is unique.
// Duplicate keys are not allowed as well as it maintains the order of insertion when you loop through it.
const map = new Map()
map.set ('IN', "INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
map.set ('IN', "INDIA")  //Map does not allow duplicate keys; setting the same key replaces the old value
console.log(map);
/* OUTPUT:
Map(3) {
  'IN' => 'INDIA',
  'USA' => 'UNITED STATES OF AMERICA',
  'FR' => 'FRANCE'
} */

//USING 'for of' loop in map
for (const [key ,value]of map){
  console.log(key, ':-', value);
}
 /*output: 
IN :- INDIA
USA :- UNITED STATES OF AMERICA
FR :- FRANCE                                   
*/

