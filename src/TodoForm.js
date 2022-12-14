import React, { useState } from "react";

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 * - todo: todo being edited
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

const INITIAL_FORM_DATA = {
  title: "",
  description: "",
  priority: "",
}

function TodoForm({ handleSave, todo }) {
  const [formData, setFormData] = useState(
    todo ? todo:
    INITIAL_FORM_DATA);


    console.log("in handleChange", formData);

  /** Update form input. */
  function handleChange(evt) {
    console.log("inside handleChange")
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    console.log("inside submit");
    evt.preventDefault();
    handleSave(formData)
    setFormData(INITIAL_FORM_DATA)
  }


  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="mb-3">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority" className="d-inline-flex">
            Priority:&nbsp;&nbsp;
          </label>
          <select
            id="newTodo-priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-??ber</option>
            <option value={2}>??ber</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          G??!
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
