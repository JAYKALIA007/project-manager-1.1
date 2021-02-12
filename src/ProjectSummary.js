import React from "react";
class ProjectSummary extends React.Component {
  render() {
    return (
      <div>
        <p>Project details</p>
        <h4>{this.props.project.title}</h4>
        <p>
          {/* {this.props.project.content} */}
          Posted by: {this.props.project.authorFirstName}{" "}
          {this.props.project.authorLastName}
        </p>
        <p>{this.props.project.createdAt}</p>
      </div>
    );
  }
}
export default ProjectSummary;
