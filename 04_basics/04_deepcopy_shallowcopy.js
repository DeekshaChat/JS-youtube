// Object copy issue ------------------------------------------------------------------------ //
// let obj = {
//     name: 'Deeksha',
// };
// let user = obj; // here obj reference(memory address of obj) is assigned to user not its value
// user.name = 'akash';
// console.log(obj.name);


 // -------------------------------------------------------------------------------------- //
let x = 'X';
let y = x; // in case of variable value is assigned in another variable 
y = 'Y';
console.log(x);



// Shallow copy ----------------------------------------------------------------------------- //
// let objjj = {
//     name: 'Deeksha',
// };
// // let userrrr = Object.assign({}, objjj); // here objjj value is assigned to userrrr
// // or by this way
// let userrrr = {...objjj}
// userrrr.name = 'akash';
// console.log(objjj.name);
// console.log(userrrr.name);


// Problem with shallow copy --------------------------------------------------------------- //
// even after destructing when changing value of 
// nested object, it will change in both objects
let objjjj = {
    name: 'Deeksha',
    address: {
        city: 'Delhi',
        state: 'Delhi'
    }
};
let userrrrr = {...objjjj};
userrrrr.address.city = 'Jaipur';
// console.log(objjjj.address.city);
// console.log(userrrrr.address.city);


// Deep copy ------------------------------------------------------------------------------- //
// Either we have to create object one by one or use JSON.parse(JSON.stringify(yourObjectHere))
let obj = {
    name: 'Deeksha',
    address: {
        city: 'Delhi',
        state: 'Delhi'
    }
};
let user = JSON.parse(JSON.stringify(obj));
user.address.city = 'Jaipur';
console.log(obj.address.city);
console.log(user.address.city);


// Problem of deep copy
// if we have any func in object, it will not be copied
let obj1 = {
    name: 'Deeksha',
    address: {
        city: 'Delhi',
        state: 'Delhi'
    },
    getData: function(){
        return 'Hello';
    }
};
let user1 = JSON.parse(JSON.stringify(obj1)); // it will not have getData func
user1.address.city = 'Jaipur';
console.log(obj1.getData());
// console.log(user1.getData()); // error here


// Solve deep copy problem
let obj2 = {
    name: 'Deeksha',
    address: {
        city: 'Delhi',
        state: 'Delhi'
    },
    getData: function(){
        return 'Hello';
    }
};
let user2 = _.cloneDeep(obj2); // use loadsh function cloneDeep to resole this problem
user2.address.city = 'Jaipur';
console.log(obj2.getData());
console.log(user2.getData());