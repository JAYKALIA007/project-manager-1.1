import React from "react";
import ProjectList from "../ProjectList";
import About from "./About";
import { connect } from "react-redux";
class DashBoard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="dashboardComponent">
        <ProjectList projects={this.props.projects} />
        <About />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};
export default connect(mapStateToProps)(DashBoard);
