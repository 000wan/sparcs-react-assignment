import React from 'react';
import './Create.css';

const Create = () => {
  return (
    <form>
      <section className="priority">
        <label htmlFor="priority">Priority </label>
        <select name="priority">
          <option value="high">High</option>
          <option value="mid">Middle</option>
          <option value="low">Low</option>
        </select>
      </section>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <section className="dueDate">
        <label htmlFor="dueDate">Due Date </label>
        <input type="date" name="dueDate" id="dueDate" required />
      </section>

      <section>
        <label htmlFor="title">Title </label>
        <input type="text" name="title" id="title" size="33" required />
      </section>

      <section>
        <label htmlFor="content">Detail </label>
        <textarea id="content" name="content" rows="3" cols="36" />
      </section>

      <button type="submit">Add</button>
    </form>
  )
};

export default Create;