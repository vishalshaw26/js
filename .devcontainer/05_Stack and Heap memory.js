//STACK(Primitive TYPE), Heap(Non-Primitive TYPE)

//STACK MEMORY (Primitive)--Gives a COPY of the value, so changing one variable does NOT affect the original
let myYoutubename = "crazyyyvishal"
let anothername = myYoutubename
anothername = "codewithvishal"

console.log(myYoutubename);
console.log(anothername);

//HEAP MEMORY (Non-Primitive Types)
//Gives a DIRECT REFERENCE(pointer) to the original memory,SO changes affect all variables pointing to it
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "vishal@google.com"

console.log(userOne.email)
console.log(userTwo.email)