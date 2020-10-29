import React from 'react';

function TodoInput(props) {

  function handleSubmit(event) {
    event.preventDefault()
    const todoEntryText = event.target.elements.todoEntry.value
    const id = Date.now() + '' + Math.random()
    const todoEntry = {id: id,
                       entry: todoEntryText,
                       completed: false}
    const newTodoList = JSON.parse(JSON.stringify(props.todoList.todoListEntries));
    newTodoList.push(todoEntry)
    props.todoList.setTodoListEntries(newTodoList)
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    event.target.elements.todoEntry.value = ''
    event.target.elements.todoEntry.focus()
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