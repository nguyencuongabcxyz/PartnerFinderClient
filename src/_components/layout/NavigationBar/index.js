import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../_actions/auth";
import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", function(event) {
      const scroll = this.scrollY;
      const navBar = this.document.getElementById("navigation-bar");
      if (navBar) {
        if (scroll !== 0) {
          navBar.style.padding = "20px 10%";
          navBar.style.boxShadow = "0px 1px 5px rgba(0,0,0,0.38)";
        } else {
          navBar.style.padding = "10px 10%";
          navBar.style.boxShadow = "none";
        }
      }
    });
  }

  onLogout = () => {
    this.props.logoutUser();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation-bar">
        <Link className="navbar-brand" to="/">
          <img alt="page-logo" src="/Images/HomePage/logo.svg" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item nav-menu-item">
              <Link to={"/asking-question"} className="nav-link func-link">
                <i className="nav-icon question circle outline icon"></i>
                Ask question
              </Link>
            </li>
            <li className="nav-item nav-menu-item">
              <Link className="nav-link func-link" to={"/getting-feedback"}>
                <i className="nav-icon smile outline icon"></i>
                Get feedback
              </Link>
            </li>
            <li className="nav-item nav-menu-item">
              <Link className="nav-link func-link" to="#">
                <i className="nav-icon comment comments outline icon"></i>
                Message
              </Link>
            </li>
            <li className="nav-item nav-menu-item">
              <Link to={"/"} className="nav-link func-link">
                <i className="nav-icon question paper plane outline icon"></i>
                Partner Request
              </Link>
            </li>
            <li className="nav-item nav-menu-item">
              <Link className="nav-link func-link" to="#">
                <i className="nav-icon bell outline icon"></i>
                Notification
              </Link>
            </li>
            <li className="nav-item nav-menu-item dropdown">
              <a
                className="nav-link dropdown-toggle right-link func-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="nav-icon cog icon"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user-info">
                  <i className="user circle icon"></i>Information
                </Link>
                <a className="dropdown-item" href="#">
                  <i className="lock icon"></i>Account
                </a>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="" onClick={this.onLogout}>
                  <span className="glyphicon glyphicon-log-out"></span>Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(null, { logoutUser })(NavigationBar);
