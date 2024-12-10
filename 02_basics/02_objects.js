 //singleton
//  Object.create

//object literals
/* 
const obj = {};
*/

const sym = Symbol('123')
const obj = {
    name: 'Deeksha',
    "full name": 'Deeksha Chaturvedi',
    age: 29,
    location: 'Delhi',
    email: 'deeksha@outlook.com',
    [sym]: "456"
}
// console.log(obj.name);
// console.log(obj['full name']);
// console.log(obj[sym]);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

console.log(obj.hasOwnProperty('loc'));

