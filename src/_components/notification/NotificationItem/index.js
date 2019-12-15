import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPostedTimeAgo } from "../../../_helpers/dateTimeHelper";
import {
  removeOneNotification,
  markViewNotification
} from "../../../_actions/notification";
import DeleteConfirmPopup from "../../shared/DeleteConfirmPopup";
import "./style.css";

class NotificationItem extends React.Component {
  markViewNotification = id => {
    const { markViewNotification } = this.props;
    markViewNotification(id);
  };

  removeNotification = id => {
    const { removeOneNotification } = this.props;
    removeOneNotification(id);
  };

  render() {
    const {
      id,
      content,
      createdDate,
      isViewed,
      postId,
      creatorId,
      creatorName,
      creatorAvatar,
      postType,
    } = this.props.notification;
    const isViewedClass = isViewed ? "" : "not-viewed";
    const linkToPost = postType === 0 ? `/question-detail/${postId}` : `/feedback-detail/${postId}`;
    return (
      <div className={`item c-list-item ${isViewedClass}`}>
        <div className="right floated content">
          {isViewed || (
            <button
              className="ui button green"
              onClick={() => {
                this.markViewNotification(id);
              }}
            >
              <i className="ui icon check"></i>Mark as viewed
            </button>
          )}
          <button
            className="ui button red"
            onClick={() => {
              this.deleteConfirmPopup.open();
            }}
          >
            <i className="ui icon x icon"></i>Delete
          </button>
          <DeleteConfirmPopup
            ref={el => (this.deleteConfirmPopup = el)}
            id={id}
            action={this.removeNotification}
          />
        </div>
        <img
          className="ui avatar image c-list-avatar"
          src={creatorAvatar}
          alt="avatar"
        />
        <div className="content c-list-content">
          <Link to={`user-info/${creatorId}`}>{creatorName}</Link> {content}
        </div>
        <div className="pr-bottom-content">
          <a className="view-post" href={linkToPost}>
            View post
          </a>
          <div className="date c-list-date">
            {getPostedTimeAgo(createdDate)}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  removeOneNotification,
  markViewNotification
})(NotificationItem);
