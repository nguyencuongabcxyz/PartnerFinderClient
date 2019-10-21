import React from "react";

import "./style.css";

import TitleSection from "./TitleSection";
import ContentSection from "./ContentSection";
import PreviewSection from "./PreviewSection";
import PageLayout from "../layout/PageLayout";
import AskingQuestionForm from "./AskingQuestionForm";

class AskingQuestion extends React.Component {
  state = {
    isActiveTitle: true,
    isActiveContent: false,
    isActivePreview: false,
    index: 0,
  };

  switchStep = index => {
    switch (index) {
      case 0:
        this.setState({
          isActiveTitle: true,
          isActiveContent: false,
          isActivePreview: false,
          index: 0,
        });
        break;
      case 1:
        this.setState({
          isActiveTitle: false,
          isActiveContent: true,
          isActivePreview: false,
          index: 1,
        });
        break;
      case 2:
        this.setState({
          isActiveTitle: false,
          isActiveContent: false,
          isActivePreview: true,
          index: 2,
        });
        break;
      default:
        break;
    }
  };

  setPreviewTitle = title => {
    document.getElementById("ps-preview-title").innerHTML = title;
    // Set value for hidden form
    if (this._askingQuestionForm) {
      this._askingQuestionForm.ref.current.wrapped.current.setValueForTitle(
        title
      );
    }
  };

  setPreviewContent = content => {
    document.getElementById("ps-preview-content").innerHTML = content;
    // Set value for hidden form
    if (this._askingQuestionForm) {
      this._askingQuestionForm.ref.current.wrapped.current.setValueForContent(
        content
      );
    }
  };

  showContentError = (error) => {
    console.log("dsfklasdjfaOIUOOUOWUOURTUOURCONTENT!");
    const contentError = document.getElementById('aq-error-content');
    if (!contentError) return;
    if (!error) {
      contentError.style.display = 'none';
      return;
    }
    contentError.innerHTML = error;
    contentError.style.display = 'block';
  }

  showTitleError = (error) => {
    console.log("dsfklasdjfaOIUOOUOWUOURTUOURTITLE!");
    const titleError = document.getElementById('aq-error-title');
    if (!titleError) return;
    if (!error) {
      titleError.style.display = 'none';
      return;
    }
    titleError.innerHTML = error;
    titleError.style.display = 'block';
  }

  render() {
    const { isActiveTitle, isActiveContent, isActivePreview } = this.state;
    const titleClassName = `${
      isActiveContent || isActivePreview ? "completed" : "active"
    } step c-step ${isActiveTitle ? "active-step" : ""}`;
    const contentClassName = `${
      isActivePreview ? "completed" : "active"
    } step c-step ${isActiveContent ? "active-step" : ""}`;
    const previewClassName = `active step c-step ${
      isActivePreview ? "active-step" : ""
    }`;
    return (
      <PageLayout>
        <div className="asking-question">
          <div className="ui ordered steps">
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
          </div>

          <div
            id="title-section-wrapper"
            className={`step-wrapper ${isActiveTitle ? "active-wrapper" : ""}`}
          >
            <TitleSection setPreviewTitle={this.setPreviewTitle} />
          </div>
          <div
            id="content-section-wrapper"
            className={`step-wrapper ${
              isActiveContent ? "active-wrapper" : ""
            }`}
          >
            <ContentSection setPreviewContent={this.setPreviewContent} />
          </div>
          <div
            id="preview-section-wrapper"
            className={`step-wrapper ${
              isActivePreview ? "active-wrapper" : ""
            }`}
          >
            <PreviewSection />
          </div>
          <div id="aq-action-button">
            <button className={`ui teal basic button ${this.state.index === 0 ? 'aq-btn-hidden' : ''}`} onClick={() => { this.switchStep(this.state.index - 1) }}><i className="ui icon angle double left"></i>Previous</button>
            <button className={`ui teal basic button ${this.state.index === 2 ? 'aq-btn-hidden' : ''}`} onClick={() => { this.switchStep(this.state.index + 1) }}>Next<i className="ui icon angle double right"></i></button>
            <button className={`ui red basic button ${this.state.index === 2  ? '' : 'aq-btn-hidden'}`}>Submit</button>
          </div>
          <div id="aq-error-section">
          <div class="ui red message" style={{display: 'none'}} id="aq-error-title"></div>
          <div class="ui red message" style={{display: 'none'}} id="aq-error-content"></div>
          </div>
        </div>
        <div>
          <AskingQuestionForm
            ref={el => {
              this._askingQuestionForm = el;
            }}
            renderContentError={this.showContentError}
            renderTitleError={this.showTitleError}
          />
        </div>
      </PageLayout>
    );
  }
}

export default AskingQuestion;
