import React from "react";
class About extends React.Component {
  render() {
    return (
      <div className="aboutComponent">
        <h3 style={{ textDecoration: "underline", fontStyle: "italic" }}>
          About the app
        </h3>
        <p>
          A project management tool where you can share as well as create new
          project ideas.
          <br /> You can also contribute by sharing the details of the project
          that you are currently working on, and be updated with what the others
          are upto
        </p>
      </div>
    );
  }
}
export default About;
