import Model from './model';
import View from './view';

class Controller {
  constructor() {
    this.init();
  };

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  };

  explicitBind() {
    this.model.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
  }

  init() {
    this.model = new Model;
    this.view = new View;
    this.explicitBind();
    this.onTodoListChanged(this.model.todos);
  };
};

export default Controller;