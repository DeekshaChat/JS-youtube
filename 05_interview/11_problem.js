// const obj = {
//     height: 30,
// };

const obj = Object.create({ 
    height: 30, // Object.create adds value in the prototype and not in the object
    // delete func not worked on the prototype, so output is 30
});

console.log(obj.height);

delete obj.height;
console.log(obj.height);
