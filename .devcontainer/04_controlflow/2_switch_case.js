// SWITCH CASE -- Switch case runs code by matching a value with cases; default(act likes else) runs if none match

/*
switch(key){
case value:
    break;
default:
    break;
}
*/

const month = 3
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    default:
        console.log("default case match");
        break;
}  //OUTPUT: March

//STRING VALUE

const Month = "april"
switch(Month){
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("Febuary")
        break;
    case "march":
        console.log("March")
        break;
    case "april":
        console.log("April")
        break;
    default:
        console.log("default case match");
        break;
}  //OUTPUT: April

const Day = "sunday"
switch(Month){
    case "monday":
        console.log("MONDAY")
        break;
    case "tuesday":
        console.log("TUESDAY")
        break;
    case "wednusday":
        console.log("WEDNUSDAY")
        break;
    case "thursday":
        console.log("TRUSDAY")
        break;
    default:
        console.log("default case match");
        break;
}  //OUTPUT: default case match