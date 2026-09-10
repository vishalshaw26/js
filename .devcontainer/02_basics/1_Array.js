const myArr = [1, 2, 3, 4, 5]
console.log(myArr[0]) // Output: 1
console.log(myArr[2]) // Output: 3

const myHeros = ["G-one", "Krish"]
const myArr2 = new Array(1, 2, 3, 4, 5) // Array constructor, it will add sqaure brackets automatically
console.log(myArr2) // Output: [1, 2, 3, 4, 5]

//ARRAY METHODS

myArr.push(6) // add element at the end of the array
console.log(myArr) // Output: [1, 2, 3, 4, 5, 6]

myArr.pop() // remove element from the end of the array
console.log(myArr) // Output: [1, 2, 3, 4, 5]

myArr.unshift(9) // add element at the beginning of the array but it will shift the index of all the elements and it will take more time to execute.
console.log(myArr) // Output: [9, 1, 2, 3, 4, 5] 

myArr.shift() // remove element from the beginning of the array but it will shift the index of all the elements
console.log(myArr) // Output: [1, 2, 3, 4, 5]

console.log(myArr.includes(3)) // Output: true  --- output will be always boolean value(true or false)
console.log(myArr.indexOf(3)) // Output: 2  --- returns the index of the element if present

const newArr = myArr.join(", ") // join all the elements of the array and return a string
console.log(newArr) // Output: "1, 2, 3, 4, 5"


//slice , splice methods

console.log("A ", myArr); //output: A  [1, 2, 3, 4, 5]

const mynewArr = myArr.slice(1, 4);

console.log(mynewArr) // Output: [2, 3, 4] --- it will return a new array from index 1 to index 4 but not including index 4

console.log("B ", myArr); //output: B  [1, 2, 3, 4, 5] --- original array is not changed

const mynewArr2 = myArr.splice(1, 3); // it will remove the elements from index 1 to index 3 and return a new array 
console.log("C ", myArr); //output: C  [1, 5] --- original array is changed and it will remove the elements from index 1 to index 3
