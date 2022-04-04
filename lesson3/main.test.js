const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3)
  });
  test('toArray has length of 3 and has all entries', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  test('first returns correct value', () => {
    expect(list.first()).toBe(todo1);
  });
  test('last returns correct value', () => {
    expect(list.last()).toBe(todo3);
  });
  test('shift works correctly', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test('pop works correctly', () => {
    expect(list.pop()).toBe(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  test('isDone works correctly', () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });
  test('add errors correctly', () => {
    let it = new TodoList('Test TodoList');
    expect(() => { list.add('hi') }).toThrow();
    expect(() => { list.add(20) }).toThrow();
    expect(() => { list.add(it) }).toThrow();
  });
  test('itemAt works correctly', () => {
    expect(() => { list.itemAt(10) }).toThrow();
    expect(list.itemAt(0)).toBe(todo1);
    expect(list.itemAt(1)).toBe(todo2);
    expect(list.itemAt(2)).toBe(todo3);
  });
  test('markDoneAt works correctly', () => {
    expect(() => { list.markDoneAt(10) }).toThrow();
    expect(list.itemAt(1).isDone()).toBe(false);
    list.markDoneAt(1)
    expect(list.itemAt(1).isDone()).toBe(true);
  });
  test('markUndoneAt works correctly', () => {
    expect(() => { list.markUndoneAt(10) }).toThrow();
    expect(list.itemAt(1).isDone()).toBe(false);
    list.markDoneAt(1)
    expect(list.itemAt(1).isDone()).toBe(true);
    list.markUndoneAt(1)
    expect(list.itemAt(1).isDone()).toBe(false);
  });
  test('markAllDone works correctly', () => {
    expect(todo1.isDone()).toBe(false);
    expect(todo1.isDone()).toBe(false);
    expect(todo1.isDone()).toBe(false);
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo1.isDone()).toBe(true);
    expect(todo1.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  });
  test('markAllUndone works correctly', () => {
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();
    expect(list.allDone()).toEqual(list);
    list.markAllUndone()
    expect(list.allNotDone()).toEqual(list);
  });
  test('removeAt works correctly', () => {
    expect(() => { list.removeAt(5) }).toThrow();
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });
  test('toString works correctly', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string)
  });
  test('toSTring works correctly 2', () => {
    todo1.markDone();
    list.markDoneAt(1)
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string)
  });
  test('toString works correctly 3', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string)
  });
  test('forEach works correctly', () => {
    let arr = [];
    list.forEach(todo => {
      arr.push(todo);
    })
    expect(arr).toEqual([todo1, todo2, todo3])
  });
  test('filter works correctly', () => {
    let arr = list.filter(todo => todo.title);
    console.log(arr);
    expect(arr).toEqual(list)
  });
  test('find by title works', () => {
    expect(list.findByTitle('Buy milk')).toBe(todo1);
  });
  test('allDone works correctly', () => {
    list.markDoneAt(1);
    expect(list.allDone().todos).toEqual([todo2]);
  });
  test('allNotDone works correctly', () => {
    list.markDoneAt(1);
    expect(list.allNotDone().todos).toEqual([todo1, todo3]);
  });
  test('markDone works correctly', () => {
    expect(todo1.isDone()).toBe(false);
    list.markDone('Buy milk');
    expect(() => {list.markDone('test')}).not.toThrow();
    expect(todo1.isDone()).toBe(true);
  });
  


});