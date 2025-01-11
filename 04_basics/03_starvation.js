console.log('Start of script 3');

setTimeout(function a(){
    console.log("This is from Task Queue, settimeout -0, A");
}, 0);

Promise.resolve().then(function b(){
    console.log("This is from MicroTask Queue, Promise, B");
    Promise.resolve().then(function b1(){
        console.log("This is from MicroTask Queue, Promise, B1");
        Promise.resolve().then(function b2(){
            console.log("This is from MicroTask Queue, Promise, B2");
            Promise.resolve().then(function b3(){
                console.log("This is from MicroTask Queue, Promise, B3");
                Promise.resolve().then(function b4(){
                    console.log("This is from MicroTask Queue, Promise, B4");
                    Promise.resolve().then(function b5(){
                        console.log("This is from MicroTask Queue, Promise, B5");
                        Promise.resolve().then(function b6(){
                            console.log("This is from MicroTask Queue, Promise, B6");
                            Promise.resolve().then(function b7(){
                                console.log("This is from MicroTask Queue, Promise, B7");
                                Promise.resolve().then(function b8(){
                                    console.log("This is from MicroTask Queue, Promise, B8");
                                    Promise.resolve().then(function b9(){
                                        console.log("This is from MicroTask Queue, Promise, 9");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

console.log('End of script');