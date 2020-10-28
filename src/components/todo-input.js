import React , { useState, useEffect} from 'react';

function TodoInput(props) {

  function handleSubmit(event) {
    event.preventDefault()
    const todoEntryText = event.target.elements.todoEntry.value
    const id = Date.now() + '' + Math.random()
    const todoEntry = {id: id,
                       entry: todoEntryText,
                       completed: false}
    let newTodoList = JSON.parse(JSON.stringify(props.todoList.todoListEntries));
    newTodoList.push(todoEntry)
    props.todoList.setTodoListEntries(newTodoList)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoEntry">New Todo:</label>
        <input type="text" name="todoEntry" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoInput;