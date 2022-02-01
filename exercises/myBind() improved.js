function myBind(func, context, ...argums) {
  return function(...args) {
    return func.apply(context, [...argums, ...args]);
  }
}

function add(first, second) {
  console.log(this);
  console.log(first + second);
}

let x = {test: 'hi'};

let z = myBind(add, x, 2, 10, 15)

z(5)
