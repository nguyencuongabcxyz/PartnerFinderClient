import React from "react";
import { connect } from "react-redux";

import "./style.css";
import UserInfoForm from "../UserInfoForm";
import PageLayout from "../../layout/PageLayout";
import {
  fetchOneUserInfo,
  updateOneUserInfo,
  updateMediaProfile
} from "../../../_actions/userInfoActions";
import { extractTokenService } from "../../../_services/extractTokenService";
import ScreenLoader from "../../shared/ScreenLoader";
import { imageService } from "../../../_services/imageService";
import { videoService } from "../../../_services/videoService";
import { audioService } from "../../../_services/audioService";

import { mediaUrl } from "../../../_constants/mediaBaseUrl";
import UploadProgress from "../../shared/UploadProgress";
import { toast } from 'react-toastify';

class UpdatingUserInfo extends React.Component {

  uploadProgressStyles = {
    marginTop: '10px',
  }

  state = {
    imageUploadPercent: 0,
    videoUploadPercent: 0,
    isHiddenImageProgress: true,
    isHiddenVideoProgress: true,
  };

  componentDidMount() {
    var userId = extractTokenService.extractUserId();
    this.props.fetchOneUserInfo(userId);
  }

  submitUserInfo = formValues => {
    this.props.updateOneUserInfo(formValues);
  };

  getImageUploadingPercentage = percentage => {
    this.setState({
      imageUploadPercent: percentage
    });
    if(percentage === 100) {
      setTimeout(() => {
        this.setState({
          isHiddenImageProgress: true,
        })
      }, 3000)
    }
  };

  getVideoUploadingPercentage = percentage => {
    this.setState({ videoUploadPercent: percentage });
    if(percentage === 100) {
      setTimeout(() => {
        this.setState({
          isHiddenVideoProgress: true,
        })
      }, 3000)
    }
  };

  uploadImage = async e => {
    // show progress bar
    this.setState({
      isHiddenImageProgress: false
    });
    const file = e.target.files[0];
    e.target.value = "";
    const result = await imageService.uploadImageToMediaServer(
      file,
      this.getImageUploadingPercentage
    );
    if (result && result.successfull) {
      const avatarUrl = mediaUrl.IMAGE_BASE_URL + result.name;
      const mediaProfile = {
        avatar: avatarUrl
      };
      this.props.updateMediaProfile(mediaProfile);
    } else {
      toast.error("Upload failed!");
    }
  };

  uploadVideo = async e => {
    // show progress bar
    this.setState({
      isHiddenVideoProgress: false
    });
    const file = e.target.files[0];
    e.target.value = "";
    const result = await videoService.uploadVideoToMediaServer(
      file,
      this.getVideoUploadingPercentage
    );
    if (result && result.successfull) {
      const videoUrl = mediaUrl.VIDEO_BASE_URL + result.name;
      const mediaProfile = {
        video: videoUrl
      };
      this.props.updateMediaProfile(mediaProfile);
    } else {
      toast.error("Upload failed!");
    }
  };

  render() {
    const { userInfo } = this.props;
    const {
      imageUploadPercent,
      videoUploadPercent,
      isHiddenImageProgress,
      isHiddenVideoProgress
    } = this.state;
    return (
      <PageLayout>
        {this.props.fetching && <ScreenLoader />}
        {this.props.updating && <ScreenLoader />}
        <div id="update-info">
          <div className="ui-left-section upload-media-section">
            <div id="avatar-block">
              <div className="square-box">
                <div className="square-content">
                  <img src={userInfo.avatar} alt="avatar" />
                </div>
              </div>
              <label htmlFor="avatar" className="custom-file-upload">
                <i className="icon cloud upload upload-icon"></i>
                Change avatar
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={e => {
                  this.uploadImage(e);
                }}
              />
              <UploadProgress
                percentage={imageUploadPercent}
                isHidden={isHiddenImageProgress}
                customStyles={this.uploadProgressStyles}
              />
            </div>
            <div id="video-block">
              <h4 className="block-title">Introduction video</h4>
              <div className="foot-line"></div>
              <video src={userInfo.video} controls>
                Your browser does not support the video tag.
              </video>
              <label htmlFor="video" className="custom-file-upload">
                <i className="icon cloud upload upload-icon"></i>
                Change video
              </label>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/mp4"
                onClick={() => {}}
                onChange={e => {
                  this.uploadVideo(e);
                }}
              />
              <UploadProgress
                percentage={videoUploadPercent}
                isHidden={isHiddenVideoProgress}
                customStyles={this.uploadProgressStyles}
              />
            </div>
          </div>
          <div className="ui-right-section">
            <UserInfoForm
              onSubmit={this.submitUserInfo}
              initialValues={userInfo}
            />
          </div>
        </div>
      </PageLayout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo.data,
    fetching: state.userInfo.fetching,
    updating: state.userInfo.updating
  };
};

export default connect(
  mapStateToProps,
  {
    fetchOneUserInfo,
    updateOneUserInfo,
    updateMediaProfile
  }
)(UpdatingUserInfo);
