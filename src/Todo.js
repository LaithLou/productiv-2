import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({todo}) {
  console.log("todo right here = ", todo);
  return (
      <div className="Todo">
        <div><b>{todo.title}</b> <small>(priority: 1)</small></div>
        <div><small>Description.</small></div>
      </div>
  );
}

export default Todo;
