import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    console.log("inside create");

    let addTodo = { ...newTodo, id: uuid() };
    setTodos((todos) => [addTodo, ...todos]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    // Find matching todo by id and replace with updatedTodo.
    setTodos((todos) => 
      todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo)
    )
  }

  /** delete a todo by id */
  function remove(id) {
    console.log("in remove ", id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  console.log("Todos = ", todos);

  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          {todos ? (
            <EditableTodoList todos={todos} remove={remove} update={update} />
          ) : (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos}/>
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
