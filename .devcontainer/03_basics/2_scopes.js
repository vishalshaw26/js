//There are two types of scopes-- GLOBAL & LOCAL 
//LOCAL SCOPE {} -- Local scope means a variable is only accessible within the function or block where it is declared  
//GLOBAL SCOPE-- A variable declared outside all functions/blocks. global scope means a variable is accessible throughout the entire program

let a = 300  //global
if (true) {
    let a = 10  //local 
    const b = 20
    console.log ("Inner 'a'" ,a) //output: Inner 'a' 10
}

console.log(a);  //output: 300
//console.log(b);   //output: an error will show "b is not defined" beacuse is is declared inside the local scope

function one(){
    const username = "vishal"

    function two(){
        const website = "yt"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()  // Output: vishal
// In this code, function one() defines a variable 'username'.
// Inside one(), function two() is created which prints 'username' using console.log.
// When one() is called, it also calls two(), so the output comes from two().

if (true) {
    const username = "vishal"
    if (username === "vishal") {
        const website = " youtube"
        console.log(username + website); //output:vishal youtube
    }
    // console.log(website) //output:ERROR ---username exists only inside the first if block
}
//Console.log(username); //OUTPUT: error ---website exists only inside the second inner if block

console.log(addone(5)) // output: 6  --- Function declarations can be called before they are written (because of hoisting).
function addone(num){
    return num + 1
}

console.log(addTwo(5)) // output: error --- Function expressions can only be called after they are defined.
const addTwo = function(num){
    return num + 2
}


