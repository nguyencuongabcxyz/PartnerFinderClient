import React from "react";
import './style.css';

class PartnerRequestItemPopup extends React.Component {
  render() {
    const { senderAvatar, senderName, content, senderId } = this.props.item;  
    return (
      <div className="pr-popup-item-wrapper">
        <div className="ui feed">
          <div className="event">
            <div className="label">
              <img
                src={senderAvatar}
                alt="avatar"
                className="pr-popup-avatar"
              />
            </div>
            <div className="content">
              <div className="date">
                  3 days ago
                  <i className="icon check green pr-popup-action-icon left"></i>
                  <i className="icon times red pr-popup-action-icon right"></i>
              </div>
              <div className="summary">
                <a href={`/user-info/${senderId}`}>{senderName}</a> has sent you
                a request.
                <div className="pr-popup-content">{content}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PartnerRequestItemPopup;
