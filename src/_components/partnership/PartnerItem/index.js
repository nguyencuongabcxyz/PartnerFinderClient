import React from "react";
import {connect} from 'react-redux';
import { deleteOnePartner } from '../../../_actions/partnership';
import { Link } from 'react-router-dom';
import DeleteConfirmPopup from '../../shared/DeleteConfirmPopup';

class PartnerItem extends React.Component {
    removeOnePartnership = (partnerId) => {
        const {deleteOnePartner} = this.props;
        deleteOnePartner(partnerId);
    }
    openPopup = () => {
        this.deletePopup.open();
    }
  render() {
      const {partnerId, avatar, name, conversationId} = this.props.item;
    return (
      <div className="item pl-c-user-sidebar">
        <div className="pl-c-user-sidebar-header">
          <img className="ui avatar image" src={avatar} alt="avatar" />
          <div className="content">
            <div className="header pl-c-user-name">
              <Link to={`/user-info/${partnerId}`}>{name}</Link>
            </div>
          </div>
        </div>
        <div className="pl-user-sidebar-action">
          <i
            className="ui icon talk"
            onClick={() => {
              window.location.href = `/conversation/${conversationId}`;
            }}
          ></i>
          <i className="ui icon remove user" onClick={this.openPopup}></i>
          <DeleteConfirmPopup
            ref={el => (this.deletePopup = el)}
            id={partnerId}
            action={this.removeOnePartnership}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteOnePartner})(PartnerItem);
