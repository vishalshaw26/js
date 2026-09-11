//2. Constructor Function

const appUser = {}
appUser.id = "123abc"
appUser.name = "Samay"
appUser. isLoggedIn = false

console.log(appUser)

const regularUser = {
    email: "xyz@abc.com",
    fullname: {
        userfullname: {
            firstname: "Samay" ,
            lastname: "Raina"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); /*output: {id: '123abc', name: 'Samay', isLoggedIn: false}
                                                                     Samay  */

const obj1 = {1: "a", 2: "b"}                                                                     
const obj2 = {3: "a", 4: "b"} 
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)

const users= [
    {
        id: 420,
        email: "email@420.com"
    },
     {
        id: 420,
        email: "email@420.com"
    }
]
console.log(users[1].email)
console.log(appUser);  //Output: {id: '123abc', name: 'Samay', isLoggedIn: false}

console.log(Object.keys(appUser));   //OUTPUT: ['id', 'name', 'isLoggedIn']
console.log(Object.values(appUser)); //OUTPUT: ['123abc', 'Samay', false]

console.log(Object.entries(appUser)); //OUTPUT: [ [ 'id', '123abc' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

console.log(appUser.hasOwnProperty('isLoggedIn')); //OUTPUT: true    ---  hasOwnProperty help to checks whether the object directly contains the specified property.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//De_structure

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Sir ji"
}
//console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//Json ---- keys and values both are strings
{
    "name": "vishal",
    "coursename": "js in hindi",
    "price": "free"
}
//an Array containing 3 empty objects
[
    {},
    {},
    {}
]




