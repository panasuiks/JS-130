// // Be sure you run this code from a file!

// setTimeout(function() {
//   console.log('!');
// }, 0);

// setTimeout(function() {
//   console.log('World');
// }, 0);

// console.log('Hello');

// function delayLog() {
//   for (var i = 1; i <= 10; i += 1) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// delayLog();

// setTimeout(function() {   //1
//   console.log('Once');    //5
// }, 1000);

// setTimeout(function() {   //2
//   console.log('upon');    //7
// }, 3000);

// setTimeout(function() {   //3
//   console.log('a');       //6
// }, 2000);

// setTimeout(function() {   //4
//   console.log('time');    //8
// }, 4000);

// setTimeout(function() { //1
//   setTimeout(function() { //6
//     q(); //12
//   }, 15);

//   d(); //7

//   setTimeout(function() { //8
//     n(); //10
//   }, 5);

//   z(); //9
// }, 10);

// setTimeout(function() { //2
//   s(); //11
// }, 20);

// setTimeout(function() { //3
//   f(); //5
// });

// g(); //4


// function afterNSeconds(callback, timeSeconds) {
//   setTimeout(callback, timeSeconds * 1000);
// }

// function startCounting() {
//   let num = 1;
//   let counter = setInterval(function () {
//     console.log(num);
//     num += 1
//   }, 1000)
//   return counter;
// }

// let z = startCounting();

// function stopCounting(counter) {
//   clearInterval(counter);
// }

// setTimeout(stopCounting, 5000, z);

// let myFirstPromise = new Promise((resolve, reject) => {
//   // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//   // In this example, we use setTimeout(...) to simulate async code.
//   // In reality, you will probably be using something like XHR or an HTML5 API.
//   setTimeout( function() {
//     resolve("Success!")  // Yay! Everything went well!
//   }, 3000)
// })

// myFirstPromise.then((successMessage) => {
//   // successMessage is whatever we passed in the resolve(...) function above.
//   // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//   console.log("Yay! " + successMessage)
// });
let x = 0;
async function test() {
  let z = await new Promise((resolve, reject) => {
    setTimeout(() => {
      x *= 2;
      resolve('test');
    }, 2000)
  })
  console.log(x);
}

test();
x += 1;
console.log(x);
x += 1;
console.log(x);

// function makePromise(response) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       x += 1;
//       resolve('test')
//     }, 2000)
//     resolve('test');
//   })
// }