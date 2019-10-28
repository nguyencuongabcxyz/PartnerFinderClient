import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../_actions/auth";
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  componentDidMount() {
    window.addEventListener("scroll", function (event) {
        const scroll = this.scrollY;
        const navBar = this.document.getElementById('navigation-bar');
        const pageName = this.document.getElementById('page-name');
        const funcLinks = this.document.getElementsByClassName('func-link');
        if(navBar){
        if(scroll !== 0) {
            navBar.style.height = '80px';
            navBar.style.setProperty('background-color', 'white', 'important')
            pageName.style.setProperty('color', "#4f4f4f");
            for(let i = 0; i < funcLinks.length; i++) {
              funcLinks[i].style.setProperty('color', '#4f4f4f', 'important');
            }
        }else{
            navBar.style.height = '75px';
            navBar.style.setProperty('background-color', '#1D4661', 'important');
            pageName.style.setProperty('color', "white");
            for(let i = 0; i < funcLinks.length; i++) {
              funcLinks[i].style.setProperty('color', '#fff', 'important');
            }
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
              <Link to={"/asking-question"} className="nav-link func-link">
              <i className="nav-icon question circle outline icon"></i>
                Ask question
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i className="nav-icon smile outline icon"></i>
                Get feedback
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i className="nav-icon comment alternate outline icon"></i>
                Message
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link func-link" href="#">
              <i className="nav-icon bell outline icon"></i>
                Notification
              </a>
            </li>
            <li className="nav-item dropdown">
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

export default connect(
  null,
  { logoutUser }
)(NavigationBar);
