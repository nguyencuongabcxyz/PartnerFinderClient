import React from 'react';

import './style.css';
import UploadButton from '../../shared/UploadButton';
import UploadProgress from '../../shared/UploadProgress';
import CustomEditor from '../../shared/CustomEditor';
import { ImageService } from "../../../_services/image";
import { VideoService } from "../../../_services/video";
import { mediaUrl } from "../../../_constants/mediaBaseUrl";
import { toast } from 'react-toastify';
import $ from 'jquery';

class ContentSection extends React.Component {
  state = {
    imageUploadPercent: 0,
    videoUploadPercent: 0,
    isHiddenImageProgress: true,
    isHiddenVideoProgress: true,
    currentVideoName: '',
    currentImageName: ''
  };

  typeNums = 2;

  uploadButtonStyles = {
    margin: 0,
    backgroundColor: "white",
    border: "1px #00B5AD solid",
    color: "#00B5AD",
    width: "200px"
  };

  getImageUploadingPercentage = percentage => {
    this.setState({
      imageUploadPercent: percentage
    });
    if (percentage === 100) {
      setTimeout(() => {
        this.setState({
          isHiddenImageProgress: true
        });
      }, 3000);
    }
  };

  getVideoUploadingPercentage = percentage => {
    this.setState({
      videoUploadPercent: percentage
    });
    if (percentage === 100) {
      setTimeout(() => {
        this.setState({
          isHiddenVideoProgress: true
        });
      }, 3000);
    }
  };

  uploadFeedbackVideo = async e => {
    const file = e.target.files[0];
    if(this.state.currentVideoName === file.name) return;
    this.setState({
      isHiddenVideoProgress: false,
      currentVideoName: file.name,
    });
    e.target.value = "";
    const result = await VideoService.uploadVideoToMediaServer(
      file,
      this.getVideoUploadingPercentage
    );
    if (result && result.successfull) {
      const { setPreviewVideo } = this.props;
      toast.success("Upload successfully!");
      const videoUrl = mediaUrl.VIDEO_BASE_URL + result.name;
      setPreviewVideo(videoUrl);
      const videoNameTxt = document.getElementById("cs-feedback-video-name");
      videoNameTxt.innerHTML = result.name;
    } else {
      toast.error("Upload failed!");
    }
  };

  uploadImage = async e => {
    const file = e.target.files[0];
    if(this.state.currentImageName === file.name) return;
    this.setState({
      isHiddenImageProgress: false,
      currentImageName: file.name,
    });
    e.target.value = "";
    const result = await ImageService.uploadImageToMediaServer(
      file,
      this.getImageUploadingPercentage
    );
    if (result && result.successfull) {
      toast.success("Upload successfully!");
      const avatarUrl = mediaUrl.IMAGE_BASE_URL + result.name;
      const imageUrlTxt = document.getElementById("image-url-txt");
      imageUrlTxt.value = avatarUrl;
    } else {
      toast.error("Upload failed!");
    }
  };

  addImageToEditorContent = () => {
    const imageUrlTxt = document.getElementById("image-url-txt").value;
    const imageTextHtml = `<p><img alt="" src="${imageUrlTxt}" style="max-height:500px; max-width:600px" /></p>`;
    this._customEditor.concatData(imageTextHtml);
  };

  setPreviewContent = content => {
    const { setPreviewContent } = this.props;
    setPreviewContent(content);
  };

  setType = type => {
    const { setPreviewType } = this.props;
    setPreviewType(type);
    this.setTypeColor(type);
    this.hideOtherCollapseType(type);
  };

  setTypeColor = type => {
    for (let i = 0; i < this.typeNums; i++) {
      const typeElement = document.getElementById(`cs-btn-post-type${i}`);
      typeElement.classList.remove("orange");
    }
    const selectedType = document.getElementById(`cs-btn-post-type${type}`);
    selectedType.classList.add("orange");
  };

  hideOtherCollapseType = type => {
    for (let i = 0; i < this.typeNums; i++) {
      if (i !== type) {
        $(`#cs-type-collapse${i}`).collapse("hide");
      }
    }
  };

  render() {
    const { isHiddenImageProgress, imageUploadPercent, isHiddenVideoProgress, videoUploadPercent } = this.state;
    const { setPreviewScript } = this.props;
    return (
      <div className="content-section">
        <h1>What's your post's type and content?</h1>
        <div className="ui ignored info message">
          <i className="info icon"></i>
          Tip
          <p>
            Your description gives people the information they need to give you
            their feedback.
          </p>
          <p>
            <i className="icon check circle outline"></i>Choose your type of
            post:
            <span className="ui orange label">Written</span> or{" "}
            <span className="ui orange label">Spoken</span>
          </p>
          <p>
            <i className="icon check circle outline"></i>Upload your video or
            audio and script for that video if you chose
            <span className="ui orange label">Spoken</span>
          </p>
          <p>
            <i className="icon check circle outline"></i>Add your written text
            if you chose
            <span className="ui orange label">Written</span>
          </p>
          <p>
            <i className="icon check circle outline"></i>On content
            section,click{" "}
            <button disabled className="ui primary basic button">
              Add image
            </button>
            button to add image right under your current pointer
          </p>
        </div>
        <div className="form-group">
          <label>Choose post type:</label>
          <a
            data-toggle="collapse"
            href={`#cs-type-collapse${0}`}
            role="button"
            aria-expanded="false"
            aria-controls={`cs-type-collapse${0}`}
            className="ui label cs-feedback-type"
            id={`cs-btn-post-type${0}`}
            onClick={() => {
              this.setType(0);
            }}
          >
            Written
          </a>
          <a
            data-toggle="collapse"
            href={`#cs-type-collapse${1}`}
            role="button"
            aria-expanded="false"
            aria-controls={`cs-type-collapse${1}`}
            className="ui label cs-feedback-type"
            id={`cs-btn-post-type${1}`}
            onClick={() => {
              this.setType(1);
            }}
          >
            Spoken
          </a>
        </div>
        {/* hidden form for corresponding feedback type */}
        <div id={`cs-type-collapse${0}`} className="collapse">
          <div className="form-group">
            <label>Your written text:</label>
            <textarea className="form-control" onChange={(e) => { setPreviewScript(e.target.value) }}></textarea>
          </div>
        </div>
        <div id={`cs-type-collapse${1}`} className="collapse">
          <div className="form-group">
            <label>Upload video</label>
            <UploadButton
              id="feedback-video"
              content="Upload video"
              acceptType="video/mp4"
              callback={this.uploadFeedbackVideo}
              customStyles={this.uploadButtonStyles}
            />
            <p id="cs-feedback-video-name"></p>
            <UploadProgress
              isHidden={isHiddenVideoProgress}
              percentage={videoUploadPercent}
            />
          </div>
          <div className="form-group">
            <label>Your script:</label>
            <textarea className="form-control" onChange={(e) => { setPreviewScript(e.target.value) }}></textarea>
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <p>
            <button
              className="ui primary basic button"
              type="button"
              data-toggle="collapse"
              data-target="#add-image-collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Add image
            </button>
          </p>
          <div className="collapse" id="add-image-collapse">
            <div className="card card-body cs-card">
              <div className="cs-add-image-left">
                <div className="form-group">
                  <label>Image URL:</label>
                  <input id="image-url-txt" className="form-control" />
                </div>
                <div className="cs-add-image">
                  <label>Upload</label>
                  <UploadButton
                    id="cs-image"
                    content="Upload local image"
                    acceptType="image/png, image/jpeg"
                    callback={this.uploadImage}
                    customStyles={this.uploadButtonStyles}
                  />
                  <UploadProgress
                    isHidden={isHiddenImageProgress}
                    percentage={imageUploadPercent}
                  />
                </div>
              </div>
              <div className="cs-add-image-right">
                <button
                  className="negative ui button"
                  onClick={this.addImageToEditorContent}
                >
                  <i className="ui icon save outline"></i>Add image to content
                </button>
              </div>
            </div>
          </div>
          <CustomEditor
            ref={el => {
              this._customEditor = el;
            }}
            setPreviewContent={this.setPreviewContent}
            config={{
              height: "600px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default ContentSection;