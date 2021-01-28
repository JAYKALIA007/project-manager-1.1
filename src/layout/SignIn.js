import React from "react";
class SignIn extends React.Component {
  state = { email: "", password: "" };
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
          className=" formContainer signinFormContainer"
          onSubmit={this.handleSubmit}
        >
          <div className="brand-logo brand-logo-signin">Sign In</div>
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
          <button className="submit-signin" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
export default SignIn;
