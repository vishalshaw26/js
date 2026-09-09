const name = "vishal"
const repoCount = 50
//console.log(name + repoCount) //vishal50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //Hello my name is vishal and my repo count is 50

const gameName = new String("Pubg") //String object
console.log(gameName) //String {"Pubg"}
console.log(gameName[0]) //P
console.log(gameName.__proto__) //gameName.__proto__ points to String.prototype, showing all built‑in string methods
console.log(gameName.length) //4
console.log(gameName.toUpperCase()) //PUBG
console.log(gameName.toLowerCase()) //pubg
console.log(gameName.charAt(2)) //b 
console.log(gameName.indexOf("g")) //3


const newString = gameName.substring(0, 3)
console.log(newString) //Pub

const newString2 = gameName.slice(-2, 3)
console.log(newString2) //u

const newString3 = "      Hello World    "
console.log(newString3) //      Hello World     
console.log(newString3.trim()) //Hello World

const url = "https://vishal.com/20%hello.html"
console.log(url.replace("20%", "-")) //https://vishal.com/-hello.html
console.log(url.includes("vishal")) //true
console.log(url.includes("shaw")) //false

//converting string to array based on the separator
console.log(url.split("/")) //['https:', '', 'vishal.com', '20%hello.html']


