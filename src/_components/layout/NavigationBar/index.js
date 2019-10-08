import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../_actions/authActions";
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  componentDidMount() {
    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        var navBar = this.document.getElementById('navigation-bar');
        if(navBar){
        if(scroll !== 0) {
            navBar.style.height = '78px';
            navBar.style.setProperty('background-color', '#ffeaa7', 'important')
        }else{
            navBar.style.height = '65px';
            navBar.style.setProperty('background-color', '#f8f9fa', 'important')
        }
      }
    });
  }
    
  onLogout = () => {
    this.props.logoutUser();
  };
  render() {
    return (
      <nav
        id="navigation-bar"
        className="navbar navbar-expand-lg navbar-light bg-light justify-content-between"
      >
        <Link className="navbar-brand" to="/">
          <img alt="page-logo" src="/Images/HomePage/logo.svg" />
          <p id="page-name">PartnerFinder</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link func-link" href="#">
              <i class="nav-icon question circle outline icon"></i>
                Ask question
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i class="nav-icon smile outline icon"></i>
                Get feedback
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i class="nav-icon comment alternate outline icon"></i>
                Message
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i class="nav-icon bell outline icon"></i>
                Notification
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle right-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="nav-icon cog icon"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/userinfo">
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

export default connect(
  null,
  { logoutUser }
)(NavigationBar);