import React from "react";
class ProjectDetails extends React.Component {
  state = { id: null };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    // const id = this.props.match.params.id;
    // this.setState({ id: id });
    console.log(this.props);
  }
  render() {
    return (
      <div className="projectDetailsComponent">
        <p>Project details</p>
        {/* <p>Project id is: {this.state.id}</p>
        <p>{this.state.id}</p> */}
      </div>
    );
  }
}
export default ProjectDetails;
