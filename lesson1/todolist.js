// class Foo {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }

//   showItem(item) {
//     console.log(this.prefix, item);
//   }
// }

// function forEach(func, thisArg) {
//   let length = this.length;
//   for (let index = 0; index < length; index += 1) {
//     func.call(thisArg, this[index], index, this);
//   }
// }

// let foo = new Foo('Item: ');

// arr.forEach(foo.showItem, foo)
// arr.forEach(foo.showItem);

function forEach(func, thisArg) {
  let length = this.length;
  for (let index = 0; index < length; index += 1) {
    func.call(thisArg, this[index], index, this);
  }
}

function filter(func) {
  let length = this.length;
  let result = [];
  for (let index = 0; index < length; index += 1) {
    if (func(this[index])) {
      result.push(this[index]);
    }
  }
  return result;
}

function map(func) {
  let length = this.length;
  let result = [];
  for (let index = 0; index < length; index += 1) {
    result.push(func(this[index]));
  }
  return result;
}

function reduce(callback, start) {
  let result = start;
  let firstIndex = 0;
  if (start === undefined) {
    result = this[0];
    firstIndex = 1;
  }
  for (let index = firstIndex; index < this.length; index += 1) {
    result = callback(result, this[index]);
  }
  return result;
}

function filter2(callback) {
  return this.reduce(function(prev, current) {
    if (callback(current)) {
      prev.push(current)
    } 
    return prev;
  }, [])
}

function map2(callback) {
  return this.reduce(function(prev, current) {
    prev.push(callback(current))
    return prev;
  }, []);
}


let arr = [1, 2, 3];
arr.forEach = forEach;
arr.filter = filter;
arr.map = map;
arr.reduce = reduce;
arr.filter2 = filter2;
arr.map2 = map2;

// arr.forEach(function (value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// })

// console.log(arr.filter(value => {
//   return value === 'a' || value === 'b';
// }))

console.log(arr.filter2(value => {
  return value < 3;
}))


console.log(arr.map2(value => {
  return value + 'test';
}))

// // console.log(arr.reduce((accum, number) => accum + number));   // => 15
// // console.log(arr.reduce((prod, number) => prod * number));     // => 120
// // console.log(arr.reduce((prod, number) => prod * number, 3));  // => 360
// console.log(arr.reduce((accum, number) => accum + number, 10));    // => 10
// console.log(arr.reduce((accum, number) => accum + number));