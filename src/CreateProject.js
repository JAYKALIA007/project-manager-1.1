import React from "react";
class CreateProject extends React.Component {
  state = { title: "", content: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleSubmit}>
          <div className="brand-logo">Create Project</div>
          <label name="title">TITLE</label>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            onChange={this.handleChange}
          />
          <label name="content">CONTENT</label>
          <input
            type="text"
            name="content"
            placeholder="About the project"
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}
export default CreateProject;
