import React from "react";
import { connect } from "react-redux";
import { removeOneNotification, markViewNotification } from '../../../_actions/notification';
import "./style.css";
import DeleteConfirmPopup from "../../shared/DeleteConfirmPopup";
import { getPostedTimeAgo } from '../../../_helpers/dateTimeHelper';

class NotificationItemPopup extends React.Component {


    markViewNotification = (id) => {
        const {markViewNotification} = this.props;
        markViewNotification(id);
    }

    removeNotification = (id) => {
        const {removeOneNotification} = this.props;
        removeOneNotification(id);
    }

  render() {
    const { id, content, createdDate, isViewed, postId, creatorId, creatorName, creatorAvatar } = this.props.item;
    const notiBackground = isViewed ? '' : 'notViewedNoti';
    return (
      <div className={`pr-popup-item-wrapper ${notiBackground}`}>
        <div className="ui feed">
          <div className="event">
            <div className="label">
              <img
                src={creatorAvatar}
                alt="avatar"
                className="pr-popup-avatar"
              />
            </div>
            <div className="content">
              <div className="date">
                {getPostedTimeAgo(createdDate)}
                <i
                  className="icon check green pr-popup-action-icon left"
                  onClick={() => {
                    this.markViewNotification(id);
                  }}
                ></i>
                <i className="icon times red pr-popup-action-icon right" onClick={() => {this.deleteConfirmPopup.open()}}></i>
                <DeleteConfirmPopup 
                ref={el => this.deleteConfirmPopup = el}
                id={id}
                action={this.removeNotification}
                 />
              </div>
              <div className="summary">
                <a href={`/user-info/${creatorId}`}>{creatorName}</a> {content}
                <br></br>
                <a href={`/post-detail/${postId}`}>View post</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
    removeOneNotification, markViewNotification
})(NotificationItemPopup);
