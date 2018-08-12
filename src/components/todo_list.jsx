import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {todos: this.props.todos}
  }

  render() {
    // const listPropPlaceholder = [
    //   {id: 1, body:'first todo'},
    //   {id: 2, body:'second todo'},
    //   {id: 3, body:'third todo'}
    // ];
    // const todoListItems = this.props.todos.map((todo, idx) => {
    //   return (<TodoListItem key={idx} body={todo.body} id={todo.id} />);
    // });

    return (
      <ul id="todo-list" className="todo-list">
      </ul>
    );
  }
}

export default TodoList;

// {todoListItems}
