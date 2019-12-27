export default class View {
  constructor() {
    this.app = this.getElement('#root');
    this.displayAddToDoBox();
  }

  displayAddToDoBox() {
    const inputToDo = this.createElement('input', { id: 'txtAddToDo', type: 'text', style: { height: '3rem' } });
    const btnAddToDo = this.createElement('button', { id: 'btnAddToDo', type: 'button', style: { width: '10rem' } }, 'Add To-Do');
    const addToDoRow = this.createElement('div', { id: 'addTodoRow', style: { display: 'flex' } });
    for (const node of this.app.children) {
      this.app.children[node].remove();
    }
    addToDoRow.append(inputToDo);
    addToDoRow.append(btnAddToDo);
    this.app.append(addToDoRow);
  }

  displayToDoList(toDoList) {
    this.clearToDoList();
    const toDoListContainer = this.createElement('div', { id: 'toDoList' });
    this.app.append(toDoListContainer);
    const UL = this.createElement('UL');
    for (const index in toDoList) {
      const item = toDoList[index];
      const li = this.createElement('li', false, item);
      UL.append(li);
    }
    toDoListContainer.append(UL);
  }

  clearToDoList() {
    const currentToDoListContainer = this.getElement('#toDoList');
    if (currentToDoListContainer) {
      currentToDoListContainer.remove();
    }
  }

  createElement(elementType, props, content) {
    const element = document.createElement(elementType);
    this.addPropertiesToElement(element, props);
    this.addContentToElement(element, content);
    return element;
  }

  addPropertiesToElement(element, props) {
    if (props) {
      for (const property of Object.keys(props)) {
        const propValue = props[property];
        if (property === 'style' && typeof propValue === 'object') {
          let style = '';
          for (const styleProperty of Object.keys(propValue)) {
            style += `${styleProperty}:${propValue[styleProperty]};`;
          }
          element.setAttribute('style', style);
        } else {
          element.setAttribute(property, propValue);
        }
      }
    }
  }

  addContentToElement(element, content) {
    if (content) {
      element.append(content);
    }
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  btnAddToDoHandler(callback) {
    this.getElement('#btnAddToDo').addEventListener('click', e => {
      const txtAddToDo = this.getElement('#txtAddToDo').value;
      this.getElement('#txtAddToDo').value = '';
      callback(txtAddToDo);
    });
  }
}
