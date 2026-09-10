const marvel_heros = ["spidey","deadpool","DrStrange"]
const dc_heros = ["batman","superman","flash"]

marvel_heros.push(dc_heros) // it will add the dc_heros array as a single element in the marvel_heros array
console.log(marvel_heros) // Output: ["spidey","deadpool","DrStrange",["batman","superman","flash"]] --- original array is changed

marvel_heros.concat(dc_heros) // it will add the dc_heros array as individual elements in the marvel_heros array
console.log(marvel_heros) // Output: ["spidey","deadpool","DrStrange",["batman","superman","flash"]] --- original array is not changed

const allheros = marvel_heros.concat(dc_heros) // it will add the dc_heros array as individual elements in the marvel_heros array and return a new array
console.log(allheros) // Output: ["spidey","deadpool","DrStrange","batman","superman","flash"] --- original array is not changed

//SPREAD OPERATOR  --- Helps to add the elements of one array to another array as individual elements(Easy)
const all_new_heros = [...marvel_heros, ...dc_heros] // it will add the dc_heros array as individual elements in the marvel_heros array and return a new array
console.log(all_new_heros) // Output: ["spidey","deadpool","DrStrange","batman","superman","flash"]

const another_array = [1,2,3,[4,5,6],7,[8,[9,15]]]
const real_another_array = another_array.flat(Infinity) //'.flat' spread the elements of the array and 'infinity' helps to spread the elements of the array till the last level of the array
console.log(real_another_array) // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 15] --- original array is not changed

let indian_heros = "Ram,Krishna,Arjun" // without declaration of variable '.isArray' will give error because it will not be able to find the variable
console.log(Array.isArray(indian_heros)) // Output: false --- it will check whether the given variable is an array or not and return a boolean value
console.log(Array.isArray(marvel_heros)) // Output: true --- it will check whether the given variable is an array or not and return a boolean value

console.log(Array.from("vishal")) // Output: ["v", "i", "s", "h", "a", "l"] --- it will convert the given string into an array of characters 

let score1 = 111
let score2 = 222
let score3 = 333
console.log(Array.of(score1, score2, score3)) // Output: [111, 222, 333] --- it will create an array from the given values