import React from "react";
class ProjectDetails extends React.Component {
  state = { id: null };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.setState({ id: id });
  }
  render() {
    return (
      <div>
        <p>Project details of</p>
        <p>Project id is: {this.state.id}</p>
      </div>
    );
  }
}
export default ProjectDetails;
