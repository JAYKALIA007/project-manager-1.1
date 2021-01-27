import React from "react";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
class NavBar extends React.Component {
  render() {
    let loggedIn = true;
    return (
      <div className="navbarComponent">
        <div className="poster">
          <span>PROJECT MANAGER 1.1 </span>
        </div>
        {loggedIn === true ? (
          <div className="authStatus">
            <nav>
              <ul>
                <li className="loggedStatus newProject">
                  <NavLink to="/create">New Project</NavLink>
                </li>
                <li className="loggedStatus logOut">
                  <NavLink to="/logout">LogOut</NavLink>
                </li>
                <li className="loggedStatus nameIcon">
                  <NavLink to="/">JP</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div className="authStatus">
            <SignIn />
            <SignUp />
          </div>
        )}
      </div>
    );
  }
}
export default NavBar;
