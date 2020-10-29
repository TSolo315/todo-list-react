import React , { useState, useEffect} from 'react';
import TodoItemList from './todo-item-list.js'
import TodoInput from './todo-input.js'
import Heading from './heading.js'

function TodoList() {

  const [todoListEntries, setTodoListEntries] = useState([]);
  const todoListState = {todoListEntries: todoListEntries, setTodoListEntries: setTodoListEntries}

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodoListEntries(todos)
  }, [])


  return (
    <div>
      <Heading title="Todo List" subtitle="Organize your life."/>
      <TodoInput todoList={todoListState}/>
      <TodoItemList todoList={todoListState} />
    </div>
  );
}

export default TodoList;