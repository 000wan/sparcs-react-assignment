import React from 'react';
import './CreateForm.css';

const dataFactory = (priority, title, content, dueDate) => {
  return { priority, title, content, dueDate }
};

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.submit = props.submit;
    this.setSubmit = props.setSubmit;
    this.state = dataFactory('high','','','');

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.setSubmit(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section className="priority">
          <label htmlFor="priority">Priority </label>
          <select name="priority" value={this.state.priority} onChange={this.handleChange}>
            <option value="high">High</option>
            <option value="mid">Middle</option>
            <option value="low">Low</option>
          </select>
        </section>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <section className="dueDate">
          <label htmlFor="dueDate">Due Date </label>
          <input type="date" name="dueDate" id="dueDate" value={this.state.dueDate} onChange={this.handleChange} required />
        </section>

        <section>
          <label htmlFor="title">Title </label>
          <input type="text" name="title" id="title" size="33" value={this.state.title} onChange={this.handleChange} required />
        </section>

        <section>
          <label htmlFor="content">Detail </label>
          <textarea id="content" name="content" rows="3" cols="36" value={this.state.content} onChange={this.handleChange} />
        </section>

        <button id="create_form" type="submit">Add</button>
      </form>
    );
  }
}

export default Create;