import React from "react";
import ProjectList from "../ProjectList";
import About from "./About";
class DashBoard extends React.Component {
  state = {
    projects: [
      {
        title: "title 1",
        content: "project content 1",
        creator: "jay Kalia",
        time: "26 Jan",
        id: 1,
      },
      {
        title: "title 1",
        content: "project content 1",
        creator: "jay Kalia",
        time: "26 Jan",
        id: 2,
      },
      {
        title: "title 1",
        content: "project content 1",
        creator: "jay Kalia",
        time: "26 Jan",
        id: 3,
      },
      {
        title: "title 1",
        content: "project content 1",
        creator: "jay Kalia",
        time: "26 Jan",
        id: 4,
      },
    ],
  };
  render() {
    return (
      <div className="dashboardComponent">
        <ProjectList projects={this.state.projects} />
        <About />
      </div>
    );
  }
}
export default DashBoard;
