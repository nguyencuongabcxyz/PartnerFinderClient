import React from 'react';

import './style.css';

class PreviewSection extends React.Component {

    render() {
        return (
          <div className="preview-section">
            <h1>Preview your question</h1>
            <div className="ui ignored info message">
              <i className="info icon"></i>
              Tip
              <p>This is what other users see on your feedback post</p>
              <p>
                <i className="icon check circle outline"></i>You can go back to
                change your post content
              </p>
              <p>
                <i className="icon check circle outline"></i>Click{" "}
                <button disabled className="ui red basic button">
                  Submit
                </button>{" "}
                when you want to submit this question
              </p>
              <p>
                <i className="icon check circle outline"></i>You can still edit
                your question after submiting
              </p>
            </div>
            <div className="ps-preview-question">
              <h2 id="feedback-preview-title" className="ps-preview-title">
                {" "}
              </h2>
              <div id="feedback-preview-type">
                <span id="feedback-preview-label" className="ui orange label"></span>
              </div>
              <div
                id="feedback-preview-content"
                className="ps-preview-content"
              ></div>
              <div id="feedback-preview-script" className="ui floating message teal">
              </div>
              <div id="feedback-video-wrapper" className="hidden">
              <video id="feedback-preview-video" controls>
                Your browser does not support the video tag.
              </video>
              </div>
            </div>
          </div>
        );
      }
}

export default PreviewSection;