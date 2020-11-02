import React from 'react';
import InlineEdit from './inline-edit.js'
import deleteIcon from '../images/delete.svg'

function TodoItem(props) {

  function handleDelete() {
    const filteredTodoList = props.todoList.todoListEntries.filter(todo => todo.id !== props.id);
    localStorage.setItem("todos", JSON.stringify(filteredTodoList));
    props.todoList.setTodoListEntries(filteredTodoList);
  }

  function handleEdit(newText) {
    const newTodoList = JSON.parse(JSON.stringify(props.todoList.todoListEntries));
    const idIndex = newTodoList.findIndex(item => item.id === props.id);
    if (!newText) {
      newText = 'Click here to edit todo text!'
    }
    newTodoList[idIndex].entry = newText;
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    props.todoList.setTodoListEntries(newTodoList);
  }

  function handleCompleteTask() {
    const newTodoList = JSON.parse(JSON.stringify(props.todoList.todoListEntries));
    const idIndex = newTodoList.findIndex(item => item.id === props.id);
    newTodoList[idIndex].completed = !newTodoList[idIndex].completed;
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    props.todoList.setTodoListEntries(newTodoList);
  }

  return(
    <li className={`${props.completed ? "completed" : ""}`}>
      <input className="mx-3" type="checkbox" id="todoComplete" name="todoComplete" value="Completed" checked={props.completed} onClick={handleCompleteTask} />
      <InlineEdit text={props.entry} onSetText={handleEdit}/>
      <a className="todo-delete-button" onClick={handleDelete}><img src={deleteIcon}></img></a>
    </li>
  );
}

export default TodoItem;