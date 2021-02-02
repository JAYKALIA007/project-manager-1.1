import React from "react";
import { Link } from "react-router-dom";
import ProjectSummary from "./ProjectSummary";
class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    const projectList =
      projects &&
      projects.map((project) => {
        return (
          <div className="projectListComponent" key={project.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/project/" + project.id}
              key={project.id}
            >
              <ProjectSummary project={project} key={project.id} />
            </Link>
          </div>
        );
      });
    return <div>{projectList}</div>;
  }
}
export default ProjectList;
