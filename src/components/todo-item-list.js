import React from 'react';
import TodoItem from './todo-item.js'

function TodoItemListHeadingBar(props) {

  function toggleTodos() {
    console.log('toggled')
  }
  return (
    <div className="todo-item-list-heading">
      <div className="mx-3">
        <input type="checkbox" id="toggleTodo" name="toggleTodo" value="toggled" onClick={toggleTodos} />
        <label className="mx-1">Toggle All</label>
      </div>
      <h2>Things To Do</h2>
      <button className="ghost-button delete ml-3">Delete All</button>
    </div>
  )
}

function TodoItemList(props) {
  const todoList = props.todoList.todoListEntries.map(todo => 
    <TodoItem key={todo.id} id={todo.id} entry={todo.entry} completed={todo.completed} todoList={props.todoList}/>
  );

  if (todoList.length > 0) {
    return (
      <div className="todo-item-list">
        <TodoItemListHeadingBar />
        <ul>
          {todoList}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="todo-item-list">
        <ul>
          <p><strong>You have no items in your todo list!</strong></p>
        </ul>
      </div>
    );
  }
}

export default TodoItemList;