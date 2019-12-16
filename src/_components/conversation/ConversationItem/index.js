import React from "react";
import "./style.css";
import { getPostedTimeAgo } from "../../../_helpers/dateTimeHelper";

class ConversationItem extends React.Component {
  render() {
    const {
      id,
      updatedDate,
      isViewed,
      lastedMessage,
      creatorName,
      creatorAvatar
    } = this.props.item;
    const notiBackground = isViewed ? "" : "notViewedNoti";
    return (
      <a
      href={`/conversation/${id}`}
        className={`pr-popup-item-wrapper conversation-item-popup ${notiBackground}`}
      >
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
              <div className="summary">
                <h3 className="conversation-user-name">{creatorName}</h3>
                <div className="pr-popup-content">{lastedMessage}</div>
              </div>
              <div className="date">{getPostedTimeAgo(updatedDate)}</div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default ConversationItem;
