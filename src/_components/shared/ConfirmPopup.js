import React from "react";
import $ from 'jquery';

class ConfirmPopup extends React.Component {

  showModal = () => {
      const {id} = this.props;
      $(`#${id}-confirm-popup`).modal();
  }

  render() {
    const { content, action, id } = this.props;
    return (
      <div
        className="modal fade"
        id={`${id}-confirm-popup`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <i className="ui icon question circle outline"></i> Confirm your
                action
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{content}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={action}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmPopup;
