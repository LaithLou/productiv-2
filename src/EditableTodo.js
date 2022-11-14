import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, remove, update }) {
  const [isEditing, setIsEditing] = useState(false);
  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    //spreading the todo to maintain it's id, change other keys, but be very
    //explicit about what we are allowing to be changed
    let updatedTodo = {...todo,
      title: formData.title,
      description: formData.description,
      priority: formData.priority
    }
    //{ id, title, description, priority }
    update(updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="EditableTodo">
      {isEditing === true ? (
        <TodoForm todo={todo} handleSave={handleSave}/>
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <Todo todo={todo} key={todo.id} />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
