import React from "react";
import { Link } from "react-router-dom";
class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    const projectList = projects.map((project) => {
      return (
        <div className="projectListComponent" key={project.id}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/project/" + project.id}
          >
            <h4>{project.title}</h4>
            <p>{project.creator}</p>
            <p>{project.time}</p>
          </Link>
        </div>
      );
    });
    return <div>{projectList}</div>;
  }
}
export default ProjectList;
