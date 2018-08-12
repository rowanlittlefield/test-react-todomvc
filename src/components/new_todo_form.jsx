import React from 'react';

class NewTodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todo: ''}
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div>
        <form className="new-todo-form">
          <label>
            <input type="text"
              value={this.state.todo}
              onChange={this.update('todo')}
              placeholder="New"/>
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
