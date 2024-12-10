// Immediately Invoked Function Expressions(iife)
// invoked immediately,
// also sometimes global scope causes pollution
// so thats why iife is used, to prevent that

//normal func, named IIFE
(function one(){
    console.log('DB connected');
    
})();

//arrow func, normal IIFE
(()=>{
    console.log('Server responding');
    
})();

//param based func
((name) => {
    console.log(`Connection established with user ${name}`);
    
})('Deeksha');