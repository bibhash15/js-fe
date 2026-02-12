// constructor way of declaring object
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); {sare keys milte hai array type m}
// console.log(Object.values(tinderUser)); {keys k values milte hai}
// console.log(Object.entries(tinderUser)); {array form m dono key aurvalue milta alag alag ek key aur uska value 1 element fir  dusra key aur uska element alag array ka element banke aata hai aeise hi saare key aur element k sath hota hai}

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); {puchta hai ki woh property hai ya nhi}


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//destructuring
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//API{ comes in JSON}
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]