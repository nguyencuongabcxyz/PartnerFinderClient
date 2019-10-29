import React from 'react';

import './style.css';
import PageLayout from '../layout/PageLayout';

class GettingFeedback extends React.Component {
    render() {
        return (
            <PageLayout>
                <div className="getting-feedback">
                {/* <div className="ui ordered steps">
            <div
              className={titleClassName}
              onClick={() => {
                this.switchStep(0);
              }}
            >
              <div className="content">
                <div className="title">Title</div>
                <div className="description">Enter your question's title</div>
              </div>
            </div>
            <div
              className={contentClassName}
              onClick={() => {
                this.switchStep(1);
              }}
            >
              <div className="content">
                <div className="title">Content</div>
                <div className="description">Enter your question's content</div>
              </div>
            </div>
            <div
              className={previewClassName}
              onClick={() => {
                this.switchStep(2);
              }}
            >
              <div className="content">
                <div className="title">Preview</div>
                <div className="description">Preview your question</div>
              </div>
            </div>
          </div> */}
                </div>
            </PageLayout>
        );
    }
}

export default GettingFeedback;