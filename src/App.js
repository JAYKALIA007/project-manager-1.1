import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import DashBoard from "./layout/DashBoard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateProject from "./CreateProject";
import ProjectDetails from "./ProjectDetails";
import SignIn from "./layout/SignIn";
import SignUp from "./layout/SignUp";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route className="dashBoard" exact path="/" component={DashBoard} />
            <Route path="/create" component={CreateProject} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
