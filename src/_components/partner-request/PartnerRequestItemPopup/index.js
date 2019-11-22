import React from "react";
import { connect } from 'react-redux';
import { removeOnePartnerFinder, acceptOnePartnerRequest } from '../../../_actions/partner-request'
import './style.css';
import ConfirmPopup from "../../shared/ConfirmPopup";

class PartnerRequestItemPopup extends React.Component {


  removePartnerRequest = (id) => {
      const {removeOnePartnerFinder} = this.props;
      removeOnePartnerFinder(id);
  }
  
  acceptPartnerRequest = (id, partnerId) => {
      const {acceptOnePartnerRequest} = this.props;
      acceptOnePartnerRequest(id, partnerId);
  }

  render() {
    const { senderAvatar, senderName, content, senderId, id } = this.props.item;  
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
                <i
                  className="icon check green pr-popup-action-icon left"
                  onClick={() => {
                    this.acceptPartnerRequest(id, senderId);
                  }}
                ></i>
                <ConfirmPopup 
                  id={`direct-delete-request-${id}`} 
                  content="Are you sure you want to delete this item?"
                  action={this.removePartnerRequest}
                  ref={el => this[`popupDelete${id}`] = el}
                />
                <i
                  className="icon times red pr-popup-action-icon right"
                  onClick={() => {
                    this[`popupDelete${id}`].showModal();
                  }}
                ></i>
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

export default connect(null, {acceptOnePartnerRequest, removeOnePartnerFinder})(PartnerRequestItemPopup);
