"use strict"; // treat all js code as a newer version

let name = "bibhash"; //string
let age = 20; //integer
let boo = true; //boolean
// number => 2 per 53
// bigint
// boolean=> t / f
// null => standalone value &&&& it is also an object
// undefined => value not defined yet
// symbol => unique chars

// object
console.log(typeof 12);
console.log(typeof undefined); //umdefined
console.log(typeof null); //object

// Primitive
// 7 types : String , Number , Boolean , Null , undefined , Symbol, BigInt

const score = 100;
const scorevalue = 100.1;

const isloggedIn = false;
const outsidetemp = null;
let useremail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);
const bignumber = 12245687443;

// non Primitive(Reference)

// Arrays , Objects , Functions

const heroes = ["shaktiman,Nagraj"];
let myobj = {
  name: "bibhash",
  age: 20,
};
const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof scorevalue);
console.log(typeof myFunction);

// +++++++++++++++++++++++++++++++++++++++++++++++
// Memories
// Stack (Primitive) change happens in copy of data ,
//  Heap(Non primitive) change happens in original data(refernce)
// Primitives
let myname = "bibhash";
let anothername = myname;
anothername = "hello";
console.log(myname);
console.log(anothername);

// Non Primitives [Heap]
let userOne = {
  email: "xyz@gmail.com",
};
let userTwo = userOne;
userTwo.email = "abc@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
