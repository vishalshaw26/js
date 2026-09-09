"use strict"; // treat all JS code as newer version

 console.log(3
            +
            3) //this code will work as ecpected but we need to prioritize clarity and readability

let name = "vishal"
let age = 20
let isLoggedIn = false

/* 2 TYPES of  DataType ----------------- PRIMITIVES & NON PRIMITIVES

7 TYPES OF PRIMITIVE DataTYPE
___________________________________________________________________________________                       | TYPE                 typeof
number = 2^53 (represent both integer and floating point numbers. Eg: 5,1.35)                             | Number                number
bigint = for larger numbers                                                                               | Bigint                bigint
string = "assembly of characteres" (character enclosed in single or double quotes. Eg: "Hello World!")    | String                string 
boolean = true/false ( it represents binary value, used for conditional logics)                           | Boolean               boolean
undefined = place hold for a value which is not defined. (Eg: let x)                                      | Undefined             undefined
symbol = use to find uniquness                                                                            | Symbol                symbol
null = stand alone value (type=object) or representation of empty value.                                  | Null                  object

*/

/*3 TYPES of  NON PRIMITIVES (typeof = object)
______________________________________________________________________________________
Array           -----------------     ["","",""]
Object          -----------------     {"", age ,isLoggedIn}
Function        -----------------     ("")

