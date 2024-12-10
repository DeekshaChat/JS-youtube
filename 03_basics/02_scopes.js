
// var c = 300;
let a = 100;
    if (true) {
        let a = 10;
        const b = 20;
        // var c = 30;
        // c = 30;
        // console.log('Inner: ', a);
        
    }

    // console.log(a);
    // console.log(b);
    // console.log(c);


function addOne(num){
    return num + 1;
}
console.log(addOne(5));

console.log(addTwo(5)); // cant call it here, it will give error
const addTwo = function(num){
    return num + 2;
}


    