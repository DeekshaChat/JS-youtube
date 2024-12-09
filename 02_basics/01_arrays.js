// array
// shallow copy - copy by reference (as we have see in heap and stack)
 
const arr = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5)

// console.log(arr);
// console.log(arr2);

arr2.unshift(9);
// console.log(arr2);

arr.shift();
// console.log(arr);

const newArr = arr.join();
// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);

const myArr = ['a','b','c','d','e','f'];
console.log("A", myArr);

// slice : no change in original array
const mySlice = myArr.slice(1,3);
console.log("B", myArr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log("BB", mySlice); // ['b', 'c']

// splice : changes the original array as well
const mySplice = myArr.splice(1,3); 
console.log("C", myArr); // [ 'a', 'e', 'f' ]
console.log("CC", mySplice); //[ 'b', 'c', 'd' ]

