export default class Model {
  constructor() {
    this.toDoList = [];
  }
  addToDo(item) {
    this.toDoList.push(item);
  }
  get getToDoList() {
    return this.toDoList;
  }
}
