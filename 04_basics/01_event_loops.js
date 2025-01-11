console.log("Start of Script 2");
 
setTimeout(function timeout() {
    console.log("A");
}, 0);

setTimeout(function timeout() {
    console.log("B");
}, 0);

setTimeout(function timeout() {
    console.log("C");
}, 2 * 1000);

console.log("End of Script");
console.log("Bye bye");