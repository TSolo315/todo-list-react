import React from 'react';
import TodoItem from './todo-item.js'

function TodoItemList(props) {
  const todoList = props.todoList.todoListEntries.map(todo => 
    <TodoItem key={todo.id} id={todo.id} entry={todo.entry} completed={todo.completed} todoList={props.todoList}/>
  );

  if (todoList.length > 0) {
    return (
      <ul className="todo-item-list">
        {todoList}
      </ul>
    );
  } else {
    return (
      <ul className="todo-item-list">
        <p><strong>You have no items in your todo list!</strong></p>
      </ul>
    );
  }
}

export default TodoItemList;