const deeksha = {
    name: 'Deeksha',
    sayName: function(){
        console.log(this.name);
    },
};

const akash = {
    name: 'Akash',
    sayName: function(){
        console.log(this.name);
    },
};

akash.sayName.call(deeksha); // using call function context of deeksha is passed and so output is deeksha
akash.sayName(); 
