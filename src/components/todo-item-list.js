import React from 'react';
import TodoItem from './todo-item.js'

function TodoItemList(props) {
  const todoList = props.todoList.todoListEntries.map(todo => 
    <TodoItem key={todo.id} id={todo.id} entry={todo.entry} completed={todo.completed} todoList={props.todoList}/>
  );
  return (
    <ul className="todo-item-list">
      {todoList}
    </ul>
  );
}

export default TodoItemList;