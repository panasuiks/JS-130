class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';

  constructor(title) {
    this.title = title;
    this.done = false
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError('can only add Todo objects')
    }
    this.todos.push(todo);
  }

  getTitle() {
    return this.title;
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  markDoneAt(index) {
    this.itemAt(index).markDone()
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone()
  }

  isDone() {
    return this.todos.every(todo => todo.isDone())
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let returnArray = [`---- ${this.title} ----`]
    this.todos.forEach(todo => {
      returnArray.push(todo.toString());
    })
    return returnArray.join('\n');
  }

  _validateIndex(index) {
    if (typeof index !== 'number' || index < 0 || index > this.todos.length - 1) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  forEach(callback, thisArg) {
    for (let todo of this.todos) {
      callback.call(thisArg, todo);
    }
  }

  filter(callback, thisArg) {
    let returnTodoList = new TodoList(this.getTitle());
    this.forEach(todo => {
      if (callback.call(thisArg, todo)) returnTodoList.add(todo);;
    })
    return returnTodoList;
  }

  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    if (this.findByTitle(title) instanceof Todo) {
      this.findByTitle(title).markDone();
    }
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let todo7 = new Todo("Go to the gym");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
list.add(todo7);
todo1.markDone();
todo4.markDone();
todo7.markDone();


