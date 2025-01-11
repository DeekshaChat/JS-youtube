var fullName = 'Deeksha Chaturvedi';
var obj = {
    fullName: 'Hacked Full Name',
    prop: {
        fullName: 'Inside Prop',
        getFullName: function(){
            return this.fullName;
        },
    },

    getFullName: function(){
        return this.fullName;
    },

    getFullNameV2: () =>  this.fullName,

    getFullNameV3: (function(){
        return this.fullName;
    })(),
};


console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2()); // undefined bcz, in arror func case this refers to global object or window, which do not have fullName prop in it
console.log(obj.getFullNameV3()); // gives error as this is an iife, right is this => console.log(obj.getFullNameV3);





