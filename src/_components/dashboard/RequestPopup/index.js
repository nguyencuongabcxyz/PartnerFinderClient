import React from "react";
import { connect } from "react-redux";
import { addOnePartnerRequest } from '../../../_actions/partner-request';
import './style.css';
import $ from 'jquery';

class RequestPopup extends React.Component {
   state = {
       contentText : ''
   }

   handleOnChange = (e) => {
       this.setState({
           contentText: e.target.value,
       });
   }

  sendRequest = (userId) => {
    const { contentText } = this.state;
    const { addOnePartnerRequest, fetchManyPartnerRequests } = this.props;
    addOnePartnerRequest(contentText, userId);
    $(`#exampleModal${userId}`).modal('hide');
  }

  render() {
      console.log(this.state.contentText);
    const {userId} = this.props;
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content pf-popup-content">
          <h1 className="pf-popup-content-title">
            Enter your message sending to your partner
          </h1>
          <div className="form-group">
            <textarea className="form-control" onChange={(e) => {this.handleOnChange(e)}}/>
          </div>
          <div className="pf-content-popup-btn">
            <button
              className="ui orange button"
              onClick={() => {
                this.sendRequest(userId);
              }}
            >
              Send
            </button>
            <button className="ui grey button" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addOnePartnerRequest })(RequestPopup);
