import React from "react";
class ProjectSummary extends React.Component {
  render() {
    return (
      <div>
        <p>Project details</p>
        <h4>{this.props.project.title}</h4>
        <p>
          Posted by: {this.props.project.firstname}{" "}
          {this.props.project.lastname}
        </p>
        <p>{this.props.project.time}</p>
      </div>
    );
  }
}
export default ProjectSummary;
