function newStack() {
  let arr = [];
  return {
    push(value) {
      arr.push(value);
    },
    pop() {
      return arr.pop();
    },
    printStack() {
      arr.forEach(value => console.log(value));
    }
  }
}

let x = newStack();
x.push(5);
x.push(4);
x.printStack();
x.pop();
x.printStack();