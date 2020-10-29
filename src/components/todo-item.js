import React from 'react';
import InlineEdit from './inline-edit.js'

function TodoItem(props) {

  function handleDelete() {
    const filteredTodoList = props.todoList.todoListEntries.filter(todo => todo.id !== props.id);
    localStorage.setItem("todos", JSON.stringify(filteredTodoList));
    props.todoList.setTodoListEntries(filteredTodoList);
  }

  function handleEdit(newText) {
    const newTodoList = JSON.parse(JSON.stringify(props.todoList.todoListEntries));
    const idIndex = newTodoList.findIndex(item => item.id === props.id);
    newTodoList[idIndex].entry = newText;
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    props.todoList.setTodoListEntries(newTodoList);
  }

  return(
    <li>
      <input type="checkbox" id="todoComplete" name="todoComplete" value="Completed" defaultChecked={props.completed} />
      <InlineEdit text={props.entry} onSetText={handleEdit}/>
      <button className='inline-todo-button delete' onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;