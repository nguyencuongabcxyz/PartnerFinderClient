import React from "react";
import { Link } from "react-router-dom";

class AskingSection extends React.Component {
  render() {
    return (
      <div className="asking-section">
        <div className="ui ordered steps">
          <Link to={"/asking-question"} className="active step">
            <div className="content">
              <div className="title">Title</div>
              <div className="description">Enter your question's title</div>
            </div>
          </Link>
          <Link to={"/asking-question/content"} className="active step">
            <div className="content">
              <div className="title">Content</div>
              <div className="description">Enter your question's content</div>
            </div>
          </Link>
          <Link to={"/asking-question/preview"} className="active step">
            <div className="content">
              <div className="title">Preview</div>
              <div className="description">Preview your question</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default AskingSection;
