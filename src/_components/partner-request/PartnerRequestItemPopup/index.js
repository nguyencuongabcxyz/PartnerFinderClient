import React from "react";
import { connect } from "react-redux";
import {
  removeOnePartnerRequest,
  acceptOnePartnerRequest
} from "../../../_actions/partner-request";
import {
  addOnePartner
} from "../../../_actions/partnership";
import "./style.css";
import DeleteConfirmPopup from "../../shared/DeleteConfirmPopup";

class PartnerRequestItemPopup extends React.Component {
  removePartnerRequest = id => {
    const { removeOnePartnerRequest } = this.props;
    removeOnePartnerRequest(id);
  };

  acceptPartnerRequest = (id, partnerId) => {
    const { addOnePartner, acceptOnePartnerRequest } = this.props;
    addOnePartner(partnerId);
    acceptOnePartnerRequest(id);
  };

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
                <i className="icon times red pr-popup-action-icon right" onClick={() => {this.deleteConfirmPopup.open()}}></i>
                <DeleteConfirmPopup 
                ref={el => this.deleteConfirmPopup = el}
                id={id}
                action={this.removePartnerRequest}
                 />
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

export default connect(null, {
  removeOnePartnerRequest,
  acceptOnePartnerRequest,
  addOnePartner,
})(PartnerRequestItemPopup);
