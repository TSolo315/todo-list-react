import React , { useState, useEffect} from 'react';

function TodoItem(props) {

  function handleDelete() {
    let filteredTodoList = props.todoList.todoListEntries.filter(todo => todo.id !== props.id);
    props.todoList.setTodoListEntries(filteredTodoList)
  }

  function handleEdit() {
    console.log('edit')
  }

  return(
    <li>
      <input type="checkbox" id="todoComplete" name="todoComplete" value="Completed" defaultChecked={props.completed} />
      <p>{props.entry}</p>
      <button className='inline-todo-button' onClick={handleEdit}>Edit</button>
      <button className='inline-todo-button delete' onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;