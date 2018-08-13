import React from 'react';

class NewTodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.idIncrementor = 1;
  }

  handleSubmit(event) {
    event.preventDefault();
    const nextTodo = this.state.todo.trim()
    if (nextTodo !== '') {
      this.props.create(
        {
          id: this.idIncrementor,
          body: nextTodo,
          completed: false
        }
      );
      this.idIncrementor += 1;
      this.setState({ todo: '' });
    } else {
      this.setState({ error: true })
    }
  }

  update(formField) {
    return event => {
      return this.setState({ [formField]: event.currentTarget.value });
    };
  }

  renderErrors() {
    if(!this.state.error) return null;

    return(
      <span className="new-todo-form-errors">To-do cannot be blank</span>
    );
  }

  clearErrors() {
    if (this.state.error) this.setState({ error: false });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}
        onClick={this.clearErrors}
        onKeyDown={this.clearErrors}
        className="new-todo-form">
        {this.renderErrors()}
        <div className="new-todo-form-inputs">
          <input type="text"
            className="new-todo-form-inputs-text"
            value={this.state.todo}
            onChange={this.update('todo')}
            placeholder="New to-do goes here!"
            autoFocus="true"/>
          <input className="new-todo-form-inputs-submit"
            type="submit"
            value="+" />
        </div>
      </form>
    );
  }
}

export default NewTodoForm;
