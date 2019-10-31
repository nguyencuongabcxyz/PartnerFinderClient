import React from "react";
import { connect } from 'react-redux';

import "./style.css";

import PageLayout from "../../layout/PageLayout";
import TitleSection from "./TitleSection";
import ContentSection from "./ContentSection";
import PreviewSection from "./PreviewSection";
import GettingFeedbackForm from "./GettingFeedbackForm";

import { FEEDBACK_TYPE_TXT } from '../../../_constants/common';
import { createFeedbackPost } from '../../../_actions/post/feedback-post';

class GettingFeedback extends React.Component {
  state = {
    activeTab: 1
  };

  tabNums = 3;

  switchStep = index => {
    this.setState({
      activeTab: index
    });
  };

  setPreviewTitle = title => {
    document.getElementById("feedback-preview-title").innerHTML = title;
    document.getElementById("feedback-preview-title").innerHTML = title;
    // Set value for hidden form
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.setValueForTitle(title);
    }
  };

  setPreviewContent = content => {
    document.getElementById("feedback-preview-content").innerHTML = content;

    // Set value for hidden form
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.setValueForContent(
        content
      );
    }
  };

  setPreviewType = type => {
    document.getElementById("feedback-preview-label").innerHTML =
      FEEDBACK_TYPE_TXT[type];
    // Set value for hidden form
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.setValueForType(type);
    }
  };

  setPreviewVideo = video => {
    if (video === '') {
      document.getElementById("feedback-video-wrapper").classList.add("hidden");
    } else{
    document
      .getElementById("feedback-video-wrapper")
      .classList.remove("hidden");
    }
    var previewVideo = document.getElementById("feedback-preview-video");
    previewVideo.src = video;
    // Set value for hidden form
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.setValueForVideo(video);
    }
  };

  setPreviewScript = script => {
    script = script.replace(/\n\r?/g, "<br />");
    document.getElementById("feedback-preview-script").innerHTML = script;
    // Set value for hidden form
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.setValueForScript(script);
    }
  };

  showContentError = error => {
    const contentError = document.getElementById("gf-error-content");
    if (!contentError) return;
    if (!error) {
      contentError.style.display = "none";
      return;
    }
    contentError.innerHTML = error;
    contentError.style.display = "block";
  };

  showTitleError = error => {
    const titleError = document.getElementById("gf-error-title");
    if (!titleError) return;
    if (!error) {
      titleError.style.display = "none";
      return;
    }
    titleError.innerHTML = error;
    titleError.style.display = "block";
  };

  showTypeError = error => {
    const titleError = document.getElementById("gf-error-type");
    if (!titleError) return;
    if (!error) {
      titleError.style.display = "none";
      return;
    }
    titleError.innerHTML = error;
    titleError.style.display = "block";
  };

  submitCreateForm = () => {
    if (this._feedbackForm) {
      this._feedbackForm.ref.current.wrapped.current.submitForm();
    }
  };

  onSubmit = formValues => {
    this.props.createFeedbackPost(formValues);
  };

  render() {
    const { activeTab } = this.state;
    const titleClassName = `${
      activeTab > 1 ? "completed" : "active"
    } step c-step ${activeTab === 1 ? "active-step" : ""}`;
    const contentClassName = `${
      activeTab > 2 ? "completed" : "active"
    } step c-step ${activeTab === 2 ? "active-step" : ""}`;
    const previewClassName = `active step c-step ${
      activeTab === 3 ? "active-step" : ""
    }`;
    return (
      <PageLayout>
        <div className="getting-feedback">
          <div className="ui ordered steps">
            <div
              className={titleClassName}
              onClick={() => {
                this.switchStep(1);
              }}
            >
              <div className="content">
                <div className="title">Title</div>
                <div className="description">Enter your title</div>
              </div>
            </div>
            <div
              className={contentClassName}
              onClick={() => {
                this.switchStep(2);
              }}
            >
              <div className="content">
                <div className="title">Content & Type</div>
                <div className="description">Enter your type & content</div>
              </div>
            </div>
            <div
              className={previewClassName}
              onClick={() => {
                this.switchStep(3);
              }}
            >
              <div className="content">
                <div className="title">Preview</div>
                <div className="description">Preview your post</div>
              </div>
            </div>
          </div>
          <div
            id="title-section-wrapper"
            className={`step-wrapper ${
              activeTab === 1 ? "active-wrapper" : ""
            }`}
          >
            <TitleSection setPreviewTitle={this.setPreviewTitle} />
          </div>
          <div
            id="content-section-wrapper"
            className={`step-wrapper ${
              activeTab === 2 ? "active-wrapper" : ""
            }`}
          >
            <ContentSection
              setPreviewContent={this.setPreviewContent}
              setPreviewType={this.setPreviewType}
              setPreviewVideo={this.setPreviewVideo}
              setPreviewScript={this.setPreviewScript}
            />
          </div>
          <div
            id="preview-section-wrapper"
            className={`step-wrapper ${
              activeTab === 3 ? "active-wrapper" : ""
            }`}
          >
            <PreviewSection />
          </div>
          <div id="aq-action-button">
            <button
              className={`ui teal basic button ${
                this.state.activeTab === 1 ? "aq-btn-hidden" : ""
              }`}
              onClick={() => {
                this.switchStep(this.state.activeTab - 1);
              }}
            >
              <i className="ui icon angle double left"></i>Previous
            </button>
            <button
              className={`ui teal basic button ${
                this.state.activeTab === this.tabNums ? "aq-btn-hidden" : ""
              }`}
              onClick={() => {
                this.switchStep(this.state.activeTab + 1);
              }}
            >
              Next<i className="ui icon angle double right"></i>
            </button>
            <button
              className={`ui red basic button ${
                this.state.activeTab === this.tabNums ? "" : "aq-btn-hidden"
              }`}
              onClick={() => {
                this.submitCreateForm();
              }}
            >
              Submit
            </button>
          </div>
          <div id="aq-error-section">
            <div
              className="ui red message"
              style={{ display: "none" }}
              id="gf-error-title"
            ></div>
            <div
              className="ui red message"
              style={{ display: "none" }}
              id="gf-error-content"
            ></div>
            <div
              className="ui red message"
              style={{ display: "none" }}
              id="gf-error-type"
            ></div>
          </div>
        </div>
        <div style={{display: 'none'}}>
          <GettingFeedbackForm
            onSubmit={this.onSubmit}
            ref={el => {
              this._feedbackForm = el;
            }}
            renderContentError={this.showContentError}
            renderTitleError={this.showTitleError}
            renderTypeError={this.showTypeError}
          />
        </div>
      </PageLayout>
    );
  }
}

export default connect(null, { createFeedbackPost })(GettingFeedback);
