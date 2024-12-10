function sayMyName(){
    console.log('D');
    console.log('E');
    console.log('E');
    console.log('K');
    console.log('S');
    console.log('H');
    console.log('A');
    
}

// sayMyName();

function addTwoNumbers(num1, num2){ // num1 and num2 are params
    console.log(num1+num2);
}

// addTwoNumbers(4,9); // 4,9 are arguments

function isUserLoggedIn(userName= "sam"){
    if (!userName) {
        console.log('Please give username');
        return
    }
    return `${userName} just logged in`;
}

// console.log(isUserLoggedIn('deeksha'));

function calculateCart(...num){ 
    // ***IMPORTANT*** 
    // here ... is rest operator,meaning we can
    // sent any no of arguments when calling this function
    return num;
}

console.log(calculateCart(200,500,600));
console.log(calculateCart(200,500,800, 700,900));
