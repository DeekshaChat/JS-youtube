const deeksha = {
    name: 'Deeksha Chaturvedi',
    sayName: function(){
        console.log(this.name);
    },
};

setTimeout(deeksha.sayName, 3 * 1000); // till the time sayName runs, execution context gets change
// and so undefined is the output

setTimeout(deeksha.sayName.bind(deeksha), 3 * 1000); // here we bind the execution context of deeksha
// and so output is deeksha, bind returns the new function which is passed here