// 1) Create an iffe that returns an object with fields:
// function setValue(), function showValue() and function reverseValue().
// Calling functions either logs the value or reverse it in an object.
// If value was not provided yet or is empty showValue function is to return information about that.
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.
// Closure pattern.

// let iife = (function() {
//     let value;
//     return {
//         setValue(newValue) {
//             value = newValue;
//         },
//         showValue() {
//             return (typeof value === undefined || value === "") ? "Value is undefined or it is empty" : value;
//         },
//         reverseValue() {
//             return value = (typeof value === "string") ? value.split("").reverse().join("") : value*(-1);
//         }
//     }
// })();

// iife.setValue('flower');
// console.log(iife.showValue());
// console.log(iife.reverseValue());

// 2) Create four function definitions. One for every basic math operations and taking two input parameters.
// Create one more function. This function is to return calculation object.
// This object is to have parameters object field that holds two operation parameters inside (x and y).
// Function field that points to a function with math operation (defined at the beginning).
// A function setOperation() that sets the field from previous sentence
// and a Calculate function that makes calculation and returns its value.

// let add = function(x,y) {
//     return x+y
// }
// let sub = function(x,y) {
//     return x-y
// }
// let mul = function(x,y) {
//     return x*y
// }
// let div = function(x,y) {
//     return x/y
// }

// let calculation = (function() {
//     let x, y, operation;
//     return {
//         setOperation : function(a,b,ops) {
//         x = a;
//         y = b;
//         operation = ops;
//     },
//         calculate : function() {
//         return operation(x,y);
//         }
//     };
// })();

// calculation.setOperation(12,3,div);
// console.log(calculation.calculate());

// 3) Create an array (by hand) of objects and call sum() function in context of each one of them.
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}}

// let array = [{x:1, y:2}, {x:-1, y:-2}, {x:3, y:-3}],
// BaseObject = {
//     x:0,
//     y:0,
//     sum: function() {
//         return this.x+this.y
//     }
// }

// for (let i=0; i<array.length; i++) {
//     console.log(BaseObject.sum.call(array[i]))
// }

// 4) Given an array of objects, for each object call operation() function in context of next object.
// If object is last, got back to start of the array for operation function. In loop;

// let array = [
//     {
//         x: 1,
//         y: 'object one value',
//         operation: function() {
//             return 'object one prefix ' + this.x + this.y;
//         }
//     },
//     {
//         x: 2,
//         y: 'object two value',
//         operation: function() {
//             return 'object two prefix ' + this.x + this.y;
//         }
//     },
//     {
//         x: 3,
//         y: 'object three value',
//         operation: function() {
//             return 'object three prefix ' + this.x + this.y;
//         }
//     },
// ]

// for (let i=0; i<array.length; i++) {
//     if (i<array.length-1) {
//         console.log(array[i].operation.call(array[i+1]));
//         }
//     else {
//         console.log(array[i].operation.call(array[0]));
//     }
// }
