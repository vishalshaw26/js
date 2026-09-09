const accountId = 261105
let accountEmail = "vishal@gmail"
var accountPassword = "223334444" //prefer not to use "var" because of issue in  block scope and functional scope 
accountCity = "Kolkata"
let accountState; //undefined

/* now tring yo change all the variables 
and which one actually changes...*/

//accountId = 2222 (not allowed)
accountEmail = "pspsp@gmail"
accountPassword = "280306"
accountCity = "Banglore"

console.log(accountId);

//DONT HAVE TO WRITE (console.log) AGAIN and AGAIN
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])