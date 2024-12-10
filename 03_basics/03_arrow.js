// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// no need of return here, implicit type of arrow function
// const addTwo = (num1, num2) =>  num1 + num2;

// no need of return here, 
// when using () no need of return required 
// while in {} return is required.
// const addTwo = (num1, num2) =>  (num1 + num2);


//in case of objects
const addTwo = (num1, num2) =>  ({userName: 'Deeksha'});
console.log(addTwo(3,4));
