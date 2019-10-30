import React from "react";

import "./style.css";

class PreviewSection extends React.Component {
  render() {
    return (
      <div className="preview-section">
          <h1>Preview your question</h1>
        <div className="ui ignored info message">
          <i className="info icon"></i>
          Tip
          <p>
              This is what other users see on your question
          </p>
          <p>
            <i className="icon check circle outline"></i>You can go back to change your content or title
          </p>
          <p>
            <i className="icon check circle outline"></i>Click <button disabled className="ui red basic button">Submit</button> when you want to submit this question
          </p>
          <p>
            <i className="icon check circle outline"></i>You can still edit your question after submiting
          </p>
        </div>
        <div className="ps-preview-question">
          <h2 id="question-preview-title" className="ps-preview-title"> </h2>
          <div id="question-preview-content" className="ps-preview-content">
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewSection;
