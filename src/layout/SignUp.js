import React from "react";
class SignUp extends React.Component {
  state = { firstname: "", lastname: "", email: "", password: "" };
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
        <form
          className=" formContainer signupFormContainer"
          onSubmit={this.handleSubmit}
        >
          <div className="brand-logo brand-logo-signup">Sign Up</div>
          <label name="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="John"
            onChange={this.handleChange}
          />
          <label name="secondname">Second Name</label>
          <input
            type="text"
            name="secondname"
            placeholder="Doe"
            onChange={this.handleChange}
          />
          <label name="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="example@test.com"
            onChange={this.handleChange}
          />
          <label name="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Min 6 characters long"
            onChange={this.handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
