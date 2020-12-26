class View {
  constructor() {
    this.init();
    this._temporaryTodoText = '';
    this._initLocalListeners();
  };

  setupElements() {
    this.app = this.getElement('#root');
    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add todo';
    this.input.name = 'todo';
    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Submit';
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement('h1');
    this.title.textContent = 'Todos';
    this.todoList = this.createElement('ul', 'todo-list');
    this.app.append(this.title, this.form, this.todoList);
  };

  get _todoText() {
    return this.input.value;
  };

  _resetInput() {
    this.input.value = '';
  };

  createElement(tag, className) {
    this.element = document.createElement(tag);
    if (className) {
      this.element.classList.add(className);
    };
    return this.element;
  };

  getElement(selector) {
    this.element = document.querySelector(selector);
    return this.element;
  };

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    };

    if (todos.length === 0) {
      this.p = this.createElement('p');
      this.p.textContent = 'Nothing to do! Add a task?';
      this.todoList.append(this.p);
    } else {
      todos.forEach(todo => {
        this.li = this.createElement('li');
        this.li.id = todo.id;

        this.checkbox = this.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.checked = todo.complete;

        this.span = this.createElement('span');
        this.span.contentEditable = true;
        this.span.classList.add('editable');

        if (todo.complete) {
          this.strike = this.createElement('s');
          this.strike.textContent = todo.text;
          this.span.append(this.strike);
        } else {
          this.span.textContent = todo.text;
        };

        this.deleteButton = this.createElement('button', 'delete');
        this.deleteButton.textContent = 'Delete';
        this.li.append(this.checkbox, this.span, this.deleteButton);

        this.todoList.append(this.li);
      });
    };

    // Debugging
    console.log(todos);
  };

  _initLocalListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this._temporaryTodoText = event.target.innerText;
      };
    });
  };

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault()
      if (this._todoText) {
        handler(this._todoText)
        this._resetInput()
      };
    });
  };

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        this.id = parseInt(event.target.parentElement.id)
        handler(this.id)
      };
    });
  };

  bindEditTodo(handler) {
    this.todoList.addEventListener('focusout', event => {
      if (this._temporaryTodoText) {
        this.id = parseInt(event.target.parentElement.id)
        handler(this.id, this._temporaryTodoText)
        this._temporaryTodoText = ''
      };
    });
  };

  bindToggleTodo(handler) {
    this.todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        this.id = parseInt(event.target.parentElement.id)
        handler(this.id)
      };
    });
  };

  init() { 
    this.setupElements();
  };
};

export default View;
