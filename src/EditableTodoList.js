import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList(todos) {
  return (
    <section>
      {todos.map((todo) => (
        <div>
          <EditableTodo todo={todo} />
        </div>
      ))}
    </section>
  );
}

export default EditableTodoList;
