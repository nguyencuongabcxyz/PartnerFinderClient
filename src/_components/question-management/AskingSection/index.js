import React from "react";

import './style.css';

import TitleSection from "./TitleSection";
import ContentSection from "./ContentSection";
import PreviewSection from "./PreviewSection";


class AskingSection extends React.Component {

  state = {
    isActiveTitle: true,
    isActiveContent: false,
    isActivePreview: false,
  }

  switchStep = (index) => {
    switch (index) {
      case 0:
        this.setState({
          isActiveTitle: true,
          isActiveContent: false,
          isActivePreview: false,
        });
        break;
      case 1:
        this.setState({
          isActiveTitle: false,
          isActiveContent: true,
          isActivePreview: false,
        });
        break;
      case 2:
        this.setState({
          isActiveTitle: false,
          isActiveContent: false,
          isActivePreview: true,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { isActiveTitle, isActiveContent, isActivePreview } = this.state;
    const titleClassName = `${isActiveContent || isActivePreview ? 'completed' : 'active'} step c-step ${isActiveTitle ? 'active-step' : ''}`;
    const contentClassName = `${isActivePreview ? 'completed' : 'active'} step c-step ${isActiveContent ? 'active-step' : ''}`;
    const previewClassName = `active step c-step ${isActivePreview ? 'active-step' : ''}`;
    return (
      <div className="asking-section">
        <div className="ui ordered steps">
          <div className={titleClassName} onClick={() => {this.switchStep(0)}}>
            <div className="content">
              <div className="title">Title</div>
              <div className="description">Enter your question's title</div>
            </div>
          </div>
          <div className={contentClassName} onClick={() => {this.switchStep(1)}}>
            <div className="content">
              <div className="title">Content</div>
              <div className="description">Enter your question's content</div>
            </div>
          </div>
          <div className={previewClassName} onClick={() => {this.switchStep(2)}}>
            <div className="content">
              <div className="title">Preview</div>
              <div className="description">Preview your question</div>
            </div>
          </div>
        </div>

        <div id="title-section-wrapper" className={`step-wrapper ${isActiveTitle ? 'active-wrapper' : ''}`}>
          <TitleSection />
        </div>
        <div id="content-section-wrapper" className={`step-wrapper ${isActiveContent ? 'active-wrapper' : ''}`}>
          <ContentSection />
        </div>
        <div id="preview-section-wrapper" className={`step-wrapper ${isActivePreview ? 'active-wrapper' : ''}`}>
          <PreviewSection />
        </div>
      </div>
    );
  }
}

export default AskingSection;
