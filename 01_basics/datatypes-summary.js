// Primitive(copy created) -> no changes in original => created in stack memory
// Non-primitive (reference) -> same changes in original => created in heap memory 

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // null means absence of anything
let userEmail; //undefined by default 

//Symbols are used for unique identification
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // always false

// const bigNumber = 3456543576654356754n  // add n to convert to bigint



// Reference (Non primitive)

//       Array, Objects, Functions
// type: object , object , object function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //Symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
