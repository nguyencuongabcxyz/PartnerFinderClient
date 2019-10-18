import React from "react";
import "./style.css";
import CKEditor from "ckeditor4-react";
import UploadButton from "../../../shared/UploadButton";
import { imageService } from "../../../../_services/imageService";
import { mediaUrl } from "../../../../_constants/mediaBaseUrl";
import UploadProgress from "../../../shared/UploadProgress";
import { toast } from 'react-toastify';
import CustomEditor from "../../../shared/CustomEditor";

class ContentSection extends React.Component {
  state = {
    imageUploadPercent: 0,
    isHiddenImageProgress: true,
  };

  uploadButtonStyles = {
      margin: 0,
      backgroundColor: 'white',
      border: '2px #B33771 solid'
  }

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

  uploadImage = async e => {
    this.setState({
        isHiddenImageProgress: false,
    });
    const file = e.target.files[0];
    e.target.value = "";
    const result = await imageService.uploadImageToMediaServer(
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
    const imageTextHtml = `<p><img alt="" src="${imageUrlTxt}" style="max-height:500px; max-width:600px" /></p>`
    this._customEditor.concatData(imageTextHtml);
  }

  render() {
      const {isHiddenImageProgress, imageUploadPercent} = this.state;
    return (
      <div className="content-section">
        <h1>What's your question about?</h1>
        <div className="ui ignored info message">
          <i className="info icon"></i>
          Tip
          <p>
            Your description gives people the information they need to help you
            answer your question.
          </p>
          <p>
            <i className="icon check circle outline"></i>Enter your question in
            the below box
          </p>
          <p>
            <i className="icon check circle outline"></i>Click "Add Image"
            button to add image right under your current pointer
          </p>
          <p>
            <i className="icon check circle outline"></i>Click "Add Media"
            button to add audio or video for your question
          </p>
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
            <button
              className="ui primary basic button"
              type="button"
              data-toggle="collapse"
              data-target="#add-link-collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Add link
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
                  content="Upload image"
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
                  <button className="negative ui button" onClick={this.addImageToEditorContent}><i className="ui icon save outline"></i>Add image</button>
              </div>
            </div>
          </div>
          <div className="collapse" id="add-link-collapse">
            <div className="card card-body">

            </div>
          </div>
          <CustomEditor
          ref={(el) => { this._customEditor = el; }}
          config={
              {
                  height: '600px'
              }
          }
           />
        </div>
        <div></div>
      </div>
    );
  }
}

export default ContentSection;
