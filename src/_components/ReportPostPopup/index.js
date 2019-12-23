import React from "react";
import {ReportService} from '../../_services/report'
import {toast} from 'react-toastify';
import $ from 'jquery';

class ReportPostPopup extends React.Component {
   state = {
       contentText : ''
   }

   handleOnChange = (e) => {
       this.setState({
           contentText: e.target.value,
       });
   }

  sendRequest = async (postId, userId) => {
    const { contentText } = this.state;
    const report = {
        postId: postId,
        content: contentText,
        receiverId: userId,
    }
    const {result} = await ReportService.addOne(report);
    if (result) {
      toast.success("Send request successfully!");
    }else {
      toast.success("Send request failed!");
    }
    $(`#questionModal${postId}`).modal('hide');
  }

  render() {
    const {postId, userId} = this.props;
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content pf-popup-content">
          <h1 className="pf-popup-content-title">
            Enter your report
          </h1>
          <div className="form-group">
            <textarea className="form-control" onChange={(e) => {this.handleOnChange(e)}}/>
          </div>
          <div className="pf-content-popup-btn">
            <button
              className="ui orange button"
              onClick={() => {
                this.sendRequest(postId, userId);
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

export default ReportPostPopup;
