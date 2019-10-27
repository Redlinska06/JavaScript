// ARRAY: [1,6,23,8,4,8,3,7]
// Exercise 1 Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// function sumAll(numbers) {
// let sumAll = 0;
// for (let i = 0; i < numbers.length; i++) {
// sumAll += numbers[i];
// }
// return sumAll;
// }
// console.log(sumAll(numbers));

// Exercise 2 Create a function that returns sum of first and last elements of given array.
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// function sumFirstAndLast(numbers) {
// return numbers[0] + numbers[numbers.length - 1];
// }
// console.log(sumFirstAndLast(numbers));

// Exercise 3 Create a function that takes a number and return factorial of that number.
// let number = 9;
// function factorial(n) {
// if ((n == 0) || (n == 1)) {
// return 1; }
// else {
// return (n * factorial(n - 1));
// }
// }
// console.log(factorial(number))

// Exercise 4 Create a function that returns given array in reverse order. // no build in functions
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// let newArray = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   newArray.push(numbers[i]);
// }
// console.log(newArray);

// Exercise 5 Create a function that based on given array returns new array in pattern [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// function returnNewArray(numbers) {
// let newArray = [];
// for (let i = 0; i < numbers.length; i += 2) {
//   newArray.push(numbers[i] + numbers[i + 1]);
// }
//   return newArray;
// }
// console.log(returnNewArray(numbers));

// Exercise 6 For time of this example remove last element from the given array.
// Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e]
// let numbers = [1, 6, 23, 8, 4, 8, 3];
// function returnNewArray(numbers) {
// let newArray = [];
// for (let i = 0; i < numbers.length; i += 2) {
//   if (i + 1 < numbers.length) {
//       newArray.push(numbers[i] + numbers[i + 1]);
// }
//   else {
//     newArray.push(numbers[i] * 2)
//   }
// }
//   return newArray;
// }
// console.log(returnNewArray(numbers));

// Exercise 7 Create a function the return one random element from given array. // use random function
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// function randomNumber(numbers) {
//   let randomNumber = Math.floor(Math.random() * numbers.length);
//   return numbers[randomNumber];
// }
// console.log(randomNumber(numbers));

// Exercise 8 Create a function that takes two parameters: array and number off attempts.
// Based on number of attempts choose a random number from table that many times and return lowest one.
// let numbers = [1, 6, 23, 8, 4, 8, 3, 7];
// function randomLowestNumber(numbers, attempts) {
//   let randomNumbers = [];
//   for (let i = 0; i < attempts; i++) {
//     let randomNumber = Math.floor(Math.random() * numbers.length);
//     randomNumbers.push(numbers[randomNumber]);
//   }
//    return Math.min(...randomNumbers);
// }
// console.log(randomLowestNumber(numbers, 5));

// Exercise 9 Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays.
// This takes place as long as there are elements in source array. 
// let array = [1,6,23,8,4,8,3,7];
// function randomNumber(array) {
// let randomIndex = Math.floor(Math.random() * randomNumber.length);
// return randomNumber[randomIndex];
// }
// function removes(randomNumber) {
// let newArray = [];
// for (let i = 0; i <= randomNumber.length; i++) {
// let randomIndex = Math.floor(Math.random() * randomNumber.length);
// newArray.push(randomNumber[randomIndex]);
// randomNumber.splice(randomIndex, 1);
// i = 0;
// }
// return newArray;
// }
// console.log(removes(array));

// Exercise 10 Create a function that on given array will perform operation of adding or subtracting elements.
// Operation is to be chosen at random. And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];
// function randomOperand(arr) {
// let number = arr[0];
// for (let i = 1; i < arr.length; i++) {
// let randomOperator = Math.random();
// if (randomOperator > 0.1) {
// number += arr[i];
// } else {
// number -= arr[i];
// }
// }
// return number;
// }
// console.log(randomOperand(arr));

// Exercise 11 Create a function that will return the current day name in Polish. 
// let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
// function PolishDayName() {
//   return days[new Date().getDay()];
// }
// console.log(PolishDayName());

// Exercise 12. Create a function that tells us how many days till Friday
// function DaysToFriday() {
//     return 5 - new Date().getDay()
//     }
//     console.log(DaysToFriday());
    
// Exercise 13 Create a function that take two numbers and return the object with 4 fields. Result on 4 basic arithmetic operations. 
// let a = 2,
// b = 10;
// function newObject(a, b) {
// return {add: a + b, sub: a - b, mul: a * b, div: a / b};
// }
// console.log(newObject(a, b));