export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.bindHandlers();
  }

  refresh() {
    const toDoList = this.model.getToDoList;
    this.view.displayToDoList(toDoList);
  }

  addToDo(item) {
    this.model.addToDo(item);
    this.refresh();
  }

  bindHandlers() {
    this.view.btnAddToDoHandler(this.addToDo.bind(this));
  }
}
