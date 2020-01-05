export default class Model {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter;
    this.toDoList = [];
  }
  addToDo(item) {
    this.toDoList.push(item);
    this.eventEmitter.dispatch('itemAdded');
  }
  get getToDoList() {
    return this.toDoList;
  }
}
