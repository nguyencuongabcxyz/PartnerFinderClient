import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAdminUsers, searchAdminUser, blockUser, activeUser} from '../../_actions/adminUser';
import { Link } from "react-router-dom";
import "./style.css";
import PageLayout from "../layout/PageLayout";
import Pagination from '../shared/pagination';
import ReportList from "./ReportList";

class AdminPage extends Component {

  state = {
    isShowPagination: true,
  }

  componentDidMount() {
    const { fetchAdminUsers } = this.props;
    fetchAdminUsers(0, 12);
  }

  fetchUsersPagination = index => {
    this.props.fetchAdminUsers(index, 12);
  };

  renderActionButton = (isBlocked, userId) => {
    return isBlocked ? (
      <button className="ui button green" onClick={() => this.props.activeUser(userId)}>
        <i className="ui icon check"></i>Active
      </button>
    ) : (
      <button className="ui button red" onClick={() => this.props.blockUser(userId)}>
        <i className="ui icon x icon"></i>Block
      </button>
    );
  };

  renderUserList = () => {
    const { users } = this.props;
    return users.map(el => {
      const { avatar, name, userId, isBlocked } = el;
      return (
        <div className={`item c-list-item`}>
          <div className="right floated content">
            {this.renderActionButton(isBlocked, userId)}
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

  search = (pattern) => {
    this.props.searchAdminUser(pattern);
    this.setState({
      isShowPagination: false,
    })
  }

  showAll = () => {
    this.fetchUsersPagination(0);
    this.setState({
      isShowPagination: true,
    });
  }

  render() {
    const {isShowPagination} = this.state;
    return (
      <PageLayout>
        <div className="admin-container">
          <div className="admin-left admin-section">
            <h1 className="dashboard-title">User list</h1>
            <div style={{marginRight: '8px'}} className="ui input">
              <input
                ref={el => (this.searchUser = el)}
                type="text"
                placeholder="Search..."
                onKeyPress={event => {
                  if (event.key === "Enter") {
                    if (event.target.value == "") return false;
                    this.search(event.target.value);
                  }
                }}
              />
            </div>
            <button class="ui positive basic button" onClick={this.showAll}>Show all</button>
            <div className="ui middle aligned divided list">
              {this.renderUserList()}
            </div>
            {
              isShowPagination &&
            <Pagination
              callBack={this.fetchUsersPagination}
              itemCount={this.props.count}
              sizePage={8}
            />
  }
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
    users: state.adminUser.users,
    count: state.adminUser.count
  };
};

export default connect(mapStateToProps, { fetchAdminUsers, searchAdminUser, blockUser, activeUser })(AdminPage);
