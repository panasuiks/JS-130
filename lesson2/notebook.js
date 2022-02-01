// // var bar = 42;
// // console.log(global.bar);
// // bar += 1;
// // console.log(global.bar);

// // let foo = 86;
// // console.log(global.foo);

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }
// foo();

// bar();

// function bar() {
//   console.log("foo!");
// };

// function foo(condition) {
//   let bar;

//   console.log(bar); 

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux); 
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };


// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);

// var Pet = 'hi'
// Pet = 'hi'
// console.log(Pet);

// 'use strict';

// const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

// function createDeck() {
//   const allCards = () => {
//     return SUITS.reduce((deck, suit) => {
//       RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   let deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (let counter = 0; counter < 256compu; counter += 1) {
//     let randomIndex1 = randomCardIndex();
//     let randomIndex2 = randomCardIndex();
//     let tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * deck.length);
//   }
// }

// console.log(createDeck());

// function test() {
//   running();


//     function running() {
//       console.log('running');
//     }


// }

// test()

// function makeMultipleLister(amount) {
//   return function () {
//     const limit = 100;
//     for (let current = amount; current < limit; current += amount) {
//       console.log(current);
//     }
//   }
// }

//add and subtract need to have the same envelope

// function maker() {
//   let result = 0;
//   function add(value) {
//     result += value;
//     return result;
//   }
//   function subtract(value) {
//     result -= value;
//     return result;
//   }
//   return [add, subtract];
// }

// let [add, subtract] = maker();

// console.log(add(1))
// console.log(add(1))
// console.log(subtract(10))


// function later(func, message) {
//   return function() {
//     func(message);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(func, message) {
//   return function(when) {
//     func(message, when);
//   }
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// "use strict";

// function bind(context, func) {
//   return function(...variables) {
//     func.call(context, ...variables)
//   }
// }


// let obj = {};
// let boundFunc = bind(obj, function(test, hi) {
//   this.foo = "bar";
//   this.test = test;
//   this.hi = hi;
// });

// boundFunc(10, 20);
// console.log(obj); // { foo: 'bar' }

"use strict";

// function makeCounterLogger(first) {
//   return function(adder) {
//     let value = first;
//     let sign = (value - adder) >= 0 ? 1 : -1
//     console.log(value);
//     while (value !== adder) {
//       value -= sign
//       console.log(value);
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

// function makeList() {
//   let list = [];
//   return function (command) {
//     if (command) {
//       let commandIndex = list.indexOf(command);
//       if (commandIndex === -1) {
//         list.push(command);
//         console.log(`${command} added`);
//       } else {
//         list.splice(commandIndex, 1);
//         console.log(`${command} removed`)
//       }
//     } else {
//       if (list.length === 0) { console.log('The list is empty') }
//       else {
//         list.forEach(item => console.log(item))
//       }
//     }
//   }
// }


// let list = makeList();
// list();
// list('make breakfast');
// list('read book');
// list();


// function makeList() {
//   let items = [];

//   return {
//     add(item) {
//       if (!items.includes(item)) {
//         items.push(item);
//         console.log(`${item} added!`);
//       }
//     },
//     remove(item) {
//       if (items.includes(item)) {
//         let index = items.indexOf(item);
//         items.splice(index, 1);
//         console.log(`${item} removed!`);
//       }
//     },
//     list() {
//       if (items.length === 0) { console.log('The list is empty') }
//       else {
//         items.forEach(item => console.log(item))
//       }
//     }
//   }
// }

// let list = makeList();
// list.add('peas');
// list.list();
// list.add('corn');
// list.list();
// list.remove('peas');
// list.list();

// const makeUniqueId = (function () {
//   let count = 0;
//   return function () {
//     ++count;
//     return count;
//   };
// })();

// makeUniqueId(); // => 1
// makeUniqueId(); // => 2
// makeUniqueId(); // => 3

// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// var sum = 0;
// sum += 10;
// sum += 31;

// sum += (function () {
//   let numbers = [1, 7, -3, 3];
//   return (function sum(arr) {
//     return arr.reduce((sum, number) => {
//       sum += number;
//       return sum;
//     }, 0);
//   })(numbers)
// })()

// console.log(sum);

// (function(arg) {
//   for (let index = arg; index >= 0; index -= 1) {
//     console.log(index)
//   }
// })(7);

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = (function(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   }
// })(2)

// foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);


// (function test(number) {
//   if (number >= 0) {
//     console.log(number)
//     test(number - 1)
//   } 
// })(7);

// let obj = {
//   foo: "foo",
//   bar: "bar",
//   qux: 42,
// };

// let {qux: myQux, foo, bar} = obj;
// ({qux: myQux, foo, bar} = obj);
// console.log(myQux);

// function test(...args) {
//   console.log(args);
//   args.forEach(value => console.log(value));
// }

// test(1, 2, 3,);

// let foo = {test: [[1, 1], 2], test1: 2, test3: 3, test4: 4};
// let {test, ...otherStuff} = foo;

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let baz = foo(1, 2, 3).baz
// let qux = foo(1, 2, 3).qux
// let bar = foo(1, 2, 3).bar

// function foo(one, __, three) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// function product() {
//   return [].reduce.call(arguments, ((total, number) => total * number));
// }

// let result = product(2, 3, 4, 5);

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

function test(...args) {
  let last = args.pop();
  let [first, ...middle] = args;
  middle.sort();
  return {
    first,
    last,
    middle
  };
}

let array = [1, 2, 3, 4, 5]
let {first, last, middle} = test(...array);
console.log(first);
console.log(last);
console.log(middle);