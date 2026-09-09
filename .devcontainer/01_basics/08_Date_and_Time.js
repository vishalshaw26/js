let myDate = new Date()
console.log(myDate) // Thu Sep 10 2026 03:28:08 GMT+0530 (India Standard Time) -- Current date and time in ISO 8601 format (UTC)
console.log(myDate.toString()) // Thu Sep 10 2026 03:28:08 GMT+0530 (India Standard Time) -- Current date and time in the local time zone
console.log(myDate.toDateString()) // Thu Sep 10 2026 -- Current date in a human-readable format without the time
console.log(myDate.toISOString()) // 2026-09-10T03:28:08.000Z -- Current date and time in ISO 8601 format (UTC)
console.log(myDate.toJSON()) // 2026-09-10T03:28:08.000Z -- Current date and time as an ISO 8601 string for JSON
console.log(myDate.toLocaleDateString()) // 10/9/2026 -- Current date formatted according to the local locale
console.log(myDate.toLocaleString()) // 10/9/2026, 3:28:08 AM -- Current date and time formatted according to the local locale

console.log(typeof myDate) // object -- The type of the myDate variable is an object

let myCreateDate = new Date(2026, 8, 10)   // Month is zero-based (0-11), so 8 represents September
console.log(myCreateDate.toDateString()) // Thu Sep 10 2026 -- The date created with the specified year, month, and day
let myCreateDate2 = new Date("2026-01-14") // Creating a date from an ISO (YYYY-MM-DD) string
console.log(myCreateDate2.toDateString()) // Thu Jan 14 2026 -- The date created from the ISO 8601 string

let myTimeStamp = Date.now() // Returns the number of milliseconds since January 1, 1970
console.log(myTimeStamp) // 1700000000000 -- The current timestamp in milliseconds
console.log(myCreateDate.getTime()) // 1700000000000 -- The timestamp of the created date in milliseconds
console.log(Math.floor(myCreateDate.getTime() / 1000)) // 1700000000 -- The timestamp of the created date in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 8 -- The month of the current date (0-11, where 0 is January and 11 is December)
console.log(newDate.getMonth()+1); /* by adding 1 to the month value, we get the current month in a more human-readable format
                                       where 1 is January and 12 is December */
console.log(newDate.getDay()); // 4 -- The day of the week of the current date (0-6, where 0 is Sunday and 6 is Saturday)

newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
})  // "Thursday, 2026" -- The current date formatted to show the full weekday name and the year in numeric format