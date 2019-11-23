import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";
import { Sidebar, Menu, Icon } from "semantic-ui-react";
import "./style.css";
import faker from 'faker';

class PageLayout extends React.Component {
  state = {
    visible: false
  };

  showSidebar = () => {
      this.setState({
          visible: true,
      })
  }

  hiddenSidebar = () => {
      this.setState({
          visible: false,
      });
  }

  renderList = () => {
      return (
        <div className="ui middle aligned animated list">
          <div className="item pl-c-user-sidebar">
            <div className="pl-c-user-sidebar-header">
            <img className="ui avatar image" src={faker.image.avatar()} />
            <div className="content">
              <div className="header pl-c-user-name"><a href="/user-info">Helen</a></div>
            </div>
            </div>
            <div className="pl-user-sidebar-action">
                <i className="ui icon talk"></i>
                <i className="ui icon remove user"></i>
          </div>
          </div>
          <div className="item pl-c-user-sidebar">
            <div className="pl-c-user-sidebar-header">
            <img className="ui avatar image" src={faker.image.avatar()} />
            <div className="content">
              <div className="header pl-c-user-name"><a href="/user-info">Helen</a></div>
            </div>
            </div>
            <div className="pl-user-sidebar-action">
                <i className="ui icon talk"></i>
                <i className="ui icon remove user"></i>
          </div>
          </div>
          <div className="item pl-c-user-sidebar">
            <div className="pl-c-user-sidebar-header">
            <img className="ui avatar image" src={faker.image.avatar()} />
            <div className="content">
              <div className="header pl-c-user-name"><a href="/user-info">Helen</a></div>
            </div>
            </div>
            <div className="pl-user-sidebar-action">
                <i className="ui icon talk"></i>
                <i className="ui icon remove user"></i>
          </div>
          </div>
          <div className="item pl-c-user-sidebar">
            <div className="pl-c-user-sidebar-header">
            <img className="ui avatar image" src={faker.image.avatar()} />
            <div className="content">
              <div className="header pl-c-user-name"><a href="/user-info">Helen</a></div>
            </div>
            </div>
            <div className="pl-user-sidebar-action">
                <i className="ui icon talk"></i>
                <i className="ui icon remove user"></i>
          </div>
          </div>
        </div>
      );
  }

  render() {
    const { visible } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div id="header">
          <NavigationBar />
        </div>
        <div id="content-body">{children}</div>
        <div id="footer">
          <Footer />
        </div>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
          className="c-semantic-sider-partnership"
          id="c-semantic-sider-partnership"
        >
          <div className="pl-collapse-section">
            <div className="pl-collapse-left" onClick={this.hiddenSidebar}>
              <i className="icon chevron left c-semantic-sidebar-icon"></i>
            </div>
            <div className="pl-collapse-right">
              <i className="ui icon users c-semantic-sidebar-icon"></i>
              <p>Your partners</p>
            </div>
          </div>
          <div className="pl-user-sidebar-wrapper">
          {this.renderList()}
          </div>
        </Sidebar>
        <button className="ui black big launch right attached fixed button pl-btn-open-sidebar" onClick={this.showSidebar}>
          <i className="ui icon users"></i> Your partners
        </button>
      </div>
    );
  }
}

export default PageLayout;
