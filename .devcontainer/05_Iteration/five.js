const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function(val){
    console.log(val);
}) /*OUTPUT:
js
ruby
java
python
cpp */

function PrintMe (item){
    console.log(item)
}
coding.forEach(PrintMe)
/*OUTPUT:
js
ruby
java
python
cpp */

//coding.forEach( () => {})

coding.forEach((item) => {
    console.log(item);
}) /*OUTPUT:
js
ruby
java
python
cpp */

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr)
}) /*OUTPUT:
js 0 (5) ['js', 'ruby', 'java', 'python', 'cpp']
ruby 1 (5) ['js', 'ruby', 'java', 'python', 'cpp']
java 2 (5) ['js', 'ruby', 'java', 'python', 'cpp']
python 3 (5) ['js', 'ruby', 'java', 'python', 'cpp']
cpp 4 (5) ['js', 'ruby', 'java', 'python', 'cpp']
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
}) /*OUTPUT:
javascript
java
python
*/

//Array of Objects iteration using forEach
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
}) /*OUTPUT:
js
java
py
*/