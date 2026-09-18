const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : "ruby",
    swift: "swift by apple"
}
for (const key in myObject){
    console.log(key)
}
/*output: 
js
cpp
rb
swift */

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : "ruby",
    swift: "swift by apple"
}
for (const key in myObject){
    console.log(myObject[key])
}
/* output:-
javascript
C++
ruby
swift by apple */

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb : "ruby",
    swift: "swift by apple"
}
for (const key in myObject){
    console.log(`${key} shortcut is for: ${myObject[key]}`)
}
/* output:-
js shortcut is for: javascript
cpp shortcut is for: C++
rb shortcut is for: ruby
swift shortcut is for: swift by apple */

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(key); // ofc it will gives the index keys of the array
}
/* output:
0
1
2
3
4 */
const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(programming[key]);
}
/* output:
js
rb
py
java
cpp */
// console.log(programming[0]); // js
// console.log(programming[1]); // rb

const map = new Map()
map.set ('IN', "INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
map.set ('IN', "INDIA")  

for (const key in map){
    console.log(key);    //Map objects cannot be iterated with for...in
}
