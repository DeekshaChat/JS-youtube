console.log('Start of script 3');

setTimeout(() => {
    console.log("This is from Task Queue, settimeout -0, A");
}, 0);

Promise.resolve().then(() => {
    console.log("This is from MicroTask Queue, Promise, B");
});


console.log('End of script');