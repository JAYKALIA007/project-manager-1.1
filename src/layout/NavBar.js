import React from "react";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    let loggedIn = false;
    return (
      <div className="navbarComponent">
        <div className="poster">
          <Typewriter
            options={{
              strings: [
                "PROJECT MANAGER 1.1",
                "GET IDEAS",
                "SHARE IDEAS",
                "STAY UPDATED...",
              ],
              autoStart: true,
              loop: true,
            }}
          />
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
            <nav>
              <ul>
                <li className="loggedStatus logOut">
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li className="loggedStatus newProject">
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }
}
export default NavBar;
