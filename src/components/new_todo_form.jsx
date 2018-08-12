import React from 'react';
import TodoListItem from './todo_list_item';

class NewTodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todo: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const todoList = document.getElementById('todo-list');
    // const newListItem = <TodoListItem body={this.state.todo} />;
    // todoList.appendChild(newListItem);
    
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="new-todo-form">
          <label>
            <input type="text"
              value={this.state.todo}
              onChange={this.update('todo')}
              placeholder="New"
              autoFocus/>
          </label>
          <input className="new-todo-form-submit"
            type="submit"
            value="+" />
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
