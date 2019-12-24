import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteOne, fetchAll } from "../../../_actions/report";
import Pagination from '../../shared/pagination';
import {Link} from 'react-router-dom';
import DeleteConfirmPopup from '../../shared/DeleteConfirmPopup';
import {getPostedTimeAgo} from '../../../_helpers/dateTimeHelper';
import "./style.css";

class ReportList extends Component {
  componentDidMount() {
    this.props.fetchAll(0, 8);
  }
  fetchReportsPagination = (index) => {
      this.props.fetchAll(index, 8);
  }
  removeReport = (id) => {
      this.props.deleteOne(id);
  }
  renderContent = (senderId, senderName, receiverId, receiverName, type, postId, postType) => {
      const link = postId && postType !== 0 ? `/feedback-detail/${postId}` : `/question-detail/${postId}`;
      return type === 0 ? (
          <div>
            <Link to={`/user-info/${senderId}`}>{senderName}</Link> has reported 
            <Link to={`/user-info/${receiverId}`}>{receiverName}</Link>
            </div>
      ) : (
        <div>
        <Link to={`/user-info/${senderId}`}>{senderName}</Link> has reported 
        <Link to={link}>this post</Link>
        </div>
      );
  }
  renderReports = () => {
      const {reports} = this.props;
      return reports.map(report => {
          const {senderAvatar, senderName, senderId, receiverAvatar, receiverName, receiverId, content, type, createdDate, id, postId, postType} = report;
          console.log(id);
          return (
            <div className="item c-list-item" key={id}>
            <div className="right floated content">
              <button
                className="ui button red"
                onClick={() => {
                  this[`deleteReport${id}`].open();
                }}
              >
                <i className="ui icon x icon"></i>Delete
              </button>
              <DeleteConfirmPopup
                ref={el => (this[`deleteReport${id}`] = el)}
                id={id}
                action={this.removeReport}
              />
            </div>
            <img className="ui avatar image c-list-avatar" src={senderAvatar} alt="avatar" />
            <div className="content c-list-content">
                {this.renderContent(senderId, senderName, receiverId, receiverName, type, postId, postType)}
            </div>
            <div className="pr-bottom-content">
              <p>{content}</p>
              <div className="date c-list-date">{getPostedTimeAgo(createdDate)}</div>
            </div>
          </div>
          );
      });
  } 
  render() {
      console.log(this.props.count);
    return (
      <div>
        <div className="ui middle aligned divided list">
          {this.renderReports()}
        </div>
        <Pagination
          callBack={this.fetchReportsPagination}
          itemCount={this.props.count}
          sizePage={8}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
    return ({
        reports: state.report.reports,
        count: state.report.count,
    });
};

export default connect(mapStateToProps, { deleteOne, fetchAll })(ReportList);
