export default class Controller {
  constructor(model, eventEmitter) {
    this.model = model;
    this.eventEmitter = eventEmitter;
    this.bindCustomEvents();
  }

  bindCustomEvents() {
    this.eventEmitter.addListener('addToDo', item => {
      this.model.addToDo(item);
    });
  }
}
