// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, bigint

const id = Symbol('123');
const userId = Symbol('123');

// console.log(id == userId); // false
// console.log(id === userId); // false

const bigNumber = 12345678901234567890n // append 'n' in the end
// console.log(bigNumber);
// console.log(typeof bigNumber);



// Reference type/ Non-primitive
//Array, Objects, Functions


/*
JavaScript is dynamically typed, which means 
that the type of a variable is determined at 
runtime rather than at compile time

let score = 33; //dynamically typed
let score: number = 33; // statically types
*/

const arr = ['1', '2', '3'];
const obj = {
    uname: 'Deeksha',
    uage: 29
};

const myFunc = function(){
    console.log('Hello World');
    
}

console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myFunc); // its output is function, which is also a type of object(basically object function)

