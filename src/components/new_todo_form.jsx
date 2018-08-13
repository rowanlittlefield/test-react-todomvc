import React from 'react';
import TodoListItem from './todo_list_item';

class NewTodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.idIncrementor = 1;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.todo !== '') {
      this.props.createTodo(
        {
          id: this.idIncrementor,
          body: this.state.todo
        }
      );
      this.idIncrementor += 1;
    } else {
      this.setState({error: true})
    }
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  renderErrors() {
    if(!this.state.error) return null;

  return(
    <span className="todo-form-errors">To-do cannot be blank</span>
  );
}

clearErrors() {
  if (this.state.error) this.setState({error: false});
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}
          onClick={this.clearErrors.bind(this)}
          className="new-todo-form">
          {this.renderErrors()}
          <label>
            <input type="text"
              className="new-todo-form-input"
              value={this.state.todo}
              onChange={this.update('todo')}
              placeholder="New"
              autoFocus="true"/>
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

// <ul className="session-errors">
//   {this.props.errors.map((error, i) => (
//     <li key={`error-${i}`}>
//       {error}
//     </li>
//   ))}
// </ul>
