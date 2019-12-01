import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPostedTimeAgo } from "../../../_helpers/dateTimeHelper";
import {
  removeOnePartnerRequest,
  acceptOnePartnerRequest
} from "../../../_actions/partner-request";
import { addOnePartner } from "../../../_actions/partnership";
import "./style.css";
import DeleteConfirmPopup from "../../shared/DeleteConfirmPopup";

class PartnerRequestItem extends React.Component {
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
    const {
      senderId,
      senderAvatar,
      senderName,
      content,
      createdDate,
      id
    } = this.props.request;
    return (
      <div className="item c-list-item">
        <div className="right floated content">
          <button
            className="ui button green"
            onClick={() => {
              this.acceptPartnerRequest(id, senderId);
            }}
          >
            <i className="ui icon check"></i>Accept
          </button>
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
            action={this.removePartnerRequest}
          />
        </div>
        <img className="ui avatar image c-list-avatar" src={senderAvatar} alt="avatar" />
        <div className="content c-list-content">
          <Link to={`user-info/${senderId}`}>{senderName}</Link> has sent you a
          request to become partner
        </div>
        <div className="pr-bottom-content">
          <p>{content}</p>
          <div className="date c-list-date">{getPostedTimeAgo(createdDate)}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  removeOnePartnerRequest,
  acceptOnePartnerRequest,
  addOnePartner
})(PartnerRequestItem);
