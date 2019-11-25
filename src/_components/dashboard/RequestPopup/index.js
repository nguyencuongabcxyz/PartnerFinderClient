import React from "react";
import { connect } from "react-redux";
import { fetchManyFinders } from '../../../_actions/partner-finder';
import { PartnerRequestService } from '../../../_services/partner-request';
import {toast} from 'react-toastify';
import './style.css';
import $ from 'jquery';

class RequestPopup extends React.Component {
   state = {
       contentText : ''
   }

   sizePage = 6;

   handleOnChange = (e) => {
       this.setState({
           contentText: e.target.value,
       });
   }

  sendRequest = async (userId) => {
    const { contentText } = this.state;
    const { currentPage, passedLevel, passedLocation, fetchManyFinders } = this.props;
    const {result} = await PartnerRequestService.addOne(contentText, userId);
    if (result) {
      toast.success("Send request successfully!");
      fetchManyFinders(currentPage, this.sizePage, passedLocation, passedLevel);
    }else {
      toast.success("Send request failed!");
    }
    $(`#exampleModal${userId}`).modal('hide');
  }

  render() {
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

export default connect(null, { fetchManyFinders })(RequestPopup);
