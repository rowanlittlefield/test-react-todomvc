import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo-list-item">
        <span>{this.props.body}</span>
        <button>Remove</button>
      </li>
    );
  }
}

// const TodoListItem = ({body}) => {
//   return (
//     <li className="todo-list-item">
//       <span>{body}</span>
//
//     </li>
//   );
// }

export default TodoListItem;
