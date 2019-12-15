import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { logoutUser } from "../../../_actions/auth";
import { Link } from "react-router-dom";
import PopupContainer from "../../shared/PopupContainer";
import PartnerRequestListPopup from "../../partner-request/PartnerRequestListPopup";
import { PartnerRequestService } from "../../../_services/partner-request";
import { NotificationService } from "../../../_services/notification";
import { ConversationService } from '../../../_services/conversation';
import NotificationListPopup from "../../notification/NotificationListPopup";
import ConversationListPopup from "../../conversation/ConversationListPopup";

class NavigationBar extends React.Component {
  state = {
    messagePopup: false,
    partnerPopup: false,
    notificationPopup: false,
    partnerRequests: 0,
    notifications: 0,
    conversations: 0,
  };

  async componentDidMount() {
    const partnerRequests = await PartnerRequestService.getCount();
    const notifications = await NotificationService.getCount();
    const conversations = await ConversationService.getCount();
    this.setState({
      notifications,
      partnerRequests,
      conversations,
    });
    window.addEventListener("scroll", function(event) {
      const scroll = this.scrollY;
      const navBar = this.document.getElementById("navigation-bar");
      if (navBar) {
        if (scroll !== 0) {
          navBar.style.padding = "20px 10%";
          navBar.style.boxShadow = "0px 1px 5px rgba(0,0,0,0.38)";
          navBar.style.setProperty("background-color", "white", "important");
        } else {
          navBar.style.padding = "10px 10%";
          navBar.style.boxShadow = "none";
          navBar.style.setProperty("background-color", "#F7F5EB", "important");
        }
      }
    });
  }

  showPopup = name => {
    switch (name) {
      case "message":
        if (this.state.messagePopup) {
          this.setState({
            messagePopup: false
          });
          break;
        }
        this.setState({
          messagePopup: true,
          partnerPopup: false,
          notificationPopup: false
        });
        break;
      case "partner":
        if (this.state.partnerPopup) {
          this.setState({
            partnerPopup: false
          });
          break;
        }
        this.setState({
          messagePopup: false,
          partnerPopup: true,
          notificationPopup: false
        });
        break;
      case "notify":
        if (this.state.notificationPopup) {
          this.setState({
            notificationPopup: false
          });
          break;
        }
        this.setState({
          messagePopup: false,
          partnerPopup: false,
          notificationPopup: true
        });
        break;
      default:
        break;
    }
  };

  onLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      messagePopup,
      partnerPopup,
      notificationPopup,
      partnerRequests,
      notifications,
      conversations
    } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navigation-bar"
      >
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
                <i className="nav-icon wrench icon"></i>
                Get feedback
              </Link>
            </li>
            <li className="nav-item nav-menu-item">
              <Link
                className="nav-link func-link"
                to="#"
                onClick={() => {
                  this.showPopup("message");
                }}
              >
                <i className="nav-icon comment comments outline icon"></i>
                Message
                <div className="c-floating-label floating ui red label">{conversations}</div>
              </Link>
              <PopupContainer isDisplay={messagePopup}>
                <ConversationListPopup />
              </PopupContainer>
            </li>
            <li className="nav-item nav-menu-item">
              <Link
                className="nav-link func-link"
                to="#"
                onClick={() => {
                  this.showPopup("partner");
                }}
              >
                <i className="nav-icon question paper plane outline icon"></i>
                Partner Request
                <div className="c-floating-label floating ui red label">
                  {partnerRequests}
                </div>
              </Link>
              <PopupContainer isDisplay={partnerPopup}>
                <PartnerRequestListPopup />
              </PopupContainer>
            </li>
            <li className="nav-item nav-menu-item">
              <Link
                className="nav-link func-link item"
                to="#"
                onClick={() => {
                  this.showPopup("notify");
                }}
              >
                <i className="nav-icon bell outline icon"></i>
                Notification
                <div className="c-floating-label floating ui red label">
                  {notifications}
                </div>
              </Link>
              <PopupContainer isDisplay={notificationPopup}>
                <NotificationListPopup />
              </PopupContainer>
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
