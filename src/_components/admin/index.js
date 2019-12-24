import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchManyFinders } from "../../_actions/partner-finder";
import { Link } from "react-router-dom";
import "./style.css";
import PageLayout from "../layout/PageLayout";
import ReportList from "./ReportList";

class AdminPage extends Component {
  componentDidMount() {
    const { fetchManyFinders } = this.props;
    fetchManyFinders(0, 12, "", 3);
  }
  renderUserList = () => {
    const { partnerFinders } = this.props;
    return partnerFinders.map(el => {
      const { avatar, name, userId } = el;
      return (
        <div className={`item c-list-item`}>
          <div className="right floated content">
            <button className="ui button green">
              <i className="ui icon check"></i>Active
            </button>
            <button className="ui button red">
              <i className="ui icon x icon"></i>Block
            </button>
          </div>
          <img
            className="ui avatar image c-list-avatar"
            src={avatar}
            alt="avatar"
          />
          <div className="content c-list-content">
            <Link to={`user-info/${userId}`}>{name}</Link>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <PageLayout>
        <div className="admin-container">
          <div className="admin-left admin-section">
            <h1 className="dashboard-title">User list</h1>
            <div className="ui middle aligned divided list">
              {this.renderUserList()}
            </div>
          </div>
          <div className="admin-right admin-section">
            <h1 className="dashboard-title">Report list</h1>
            <ReportList />
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    partnerFinders: state.partnerFinder.partnerFinders,
    count: state.partnerFinder.count
  };
};

export default connect(mapStateToProps, { fetchManyFinders })(AdminPage);
