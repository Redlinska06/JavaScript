// Write a program that prints all prime numbers in given range. Take sub from 1-100.
// napisać program który wypisze wszystkie numery pierwsze w danym przedziale

// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// for (let i = 1; i < 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// Write a guessing game where the user has to guess a secret number. After every guess the program tells
// the user whether their number was too large or too small. At the end the number of tries needed should be printed.
// It counts only as one try if they input the same number multiple times consecutively.
// napisać grę do zgadywania gdzie komputer gra sam ze sobą, najpierw losuje cyfrę, później zgaduje jaka to cyfra,
//informacja zwrotna to albo: trafiłeś, wybrałeś za dużą, wybrałeś za małą liczbę

// (function playGame() {
//   let min = 1;
//   let max = 100;
//   const secretNum = getRandom(min, max);
//   let playerTry = guessNumber(min, max);
//   let counter = 1;
//   let gameCounter = 0;

//   while (secretNum !== playerTry && gameCounter < 1000) {
//     gameCounter++;
//     if (tryIsBigger(playerTry, secretNum)) {
//       showGameMessage(playerTry, "large");
//       max = playerTry;
//     } else {
//       showGameMessage(playerTry, "small");
//       min = playerTry;
//     }
//     playerTry = guessNumber(min, max);
//     counter++;
//   }
//   showWinMessage(playerTry, counter);
// })();

// function tryIsBigger(num, secret) {
//   if (num > secret) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function guessNumber(min, max) {
//   const num = (max - min) / 2 + min;
//   return Math.floor(num);
// }

// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function showGameMessage(nr, adjective) {
//   console.log(`${nr} is too ${adjective}`);
// }

// function showWinMessage(num, counter) {
//   console.log(`${num}
//   Wou win!!!
//   You guessed it in ${counter} tries`);
// }

// Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.
// napisać program, który dostanie array i informację o ile przesunąć

// let numbers = [1, 2, 3, 4, 5, 6];

// function rotator(k) {
//   for (let i = 0; i < k; i++) {
//     numbers.push(numbers[0]);
//     numbers.splice(0, 1);
//   }
//   console.log(numbers);
// }

// rotator(2);

// Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are
// therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
// napisać klasę, która wypisze nam listę fibonaciego

// class Fibonacci {
//   constructor(n) {
//     this.n = n;
//   }
//   sequence() {
//     let numbers = [];
//     for (let i = 0; i < this.n; i++) {
//       if (i == 0 || i == 1) {
//         numbers.push(1);
//       } else {
//         numbers.push(numbers[i - 1] + numbers[i - 2]);
//       }
//     }
//     return numbers;
//   }
// }

// let solution = new Fibonacci(11).sequence();
// console.log(solution);
// console.log(solution[9]);
// console.log(solution[10]);

// Write a code that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].A243b -> [2,4,3].
// zwróci wylistowane w tabeli cyfry

// let text = "0a2b3c4d2e";

// function code(e) {
//   let parsed = [];
//   if (typeof e == "string") {
//     let numbers = e.match(/\d+/g).map(Number);
//     // console.log(numbers);
//     let splited = numbers.toString().split("");
//     // console.log(splited);
//     let noComas = splited.filter(f => {
//       return f != ",";
//     });
//     // console.log(noComas);
//     for (let i = 0; i < noComas.length; i++) {
//       let num = parseInt(noComas[i]);
//       parsed.push(num);
//     }
//     return parsed;
//   } else if (typeof e == "number") {
//     let splited = e.toString().split("");
//     for (let i = 0; i < splited.length; i++) {
//       let num = parseInt(splited[i]);
//       parsed.push(num);
//     }
//     return parsed;
//   } else {
//     return "wrong type of data";
//   }
// }
// console.log(code(text));

// Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first
// letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay
// rownbay oxfay”.
// napiszcie program, które będzie tłumaczył zdanie na świńską łacinę - bierze pierwszą literę i przeczuca ją na koniec
// i dodaje "ay"

// let text = "Be brave. Take risks. Nothing can substitute experience";

// function pigLatin(e) {
//   let phrase = e.toLowerCase();
//   let phraseArray = phrase.split(" ").map(e => {
//     return e.split("");
//   });
//   let latin = [];
//   for (let i = 0; i < phraseArray.length; i++) {
//     phraseArray[i].push(phraseArray[i][0]);
//     phraseArray[i].splice(0, 1);
//     phraseArray[i].push("ay");
//     let joined = phraseArray[i].join("");
//     latin.push(joined);
//   }
//   return latin.join(" ");
// }

// console.log(pigLatin(text));
