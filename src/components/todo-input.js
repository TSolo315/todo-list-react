import React from 'react';

function TodoInput(props) {

  function handleSubmit(event) {
    event.preventDefault()
    const todoEntryText = event.target.elements.todoEntry.value
    if (!todoEntryText) {
      return
    }
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
    <form onSubmit={handleSubmit} className="form__group field">
        <input type="text" name="todoEntry" placeholder="New Todo" className="form__field" required />
        <label htmlFor="todoEntry" className="form__label">New Todo:</label>
      <input type="submit" value="Submit" className="todo-submit" />
    </form>
  );
}

export default TodoInput;