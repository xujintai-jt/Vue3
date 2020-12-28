"use strict";
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
};
console.log(customer.hasOwnProperty('sayHi')); //true
console.log(customer.hasOwnProperty('lastName')); //truef
console.log(customer);
