import React from "react";
import { connect } from "react-redux";

import "./style.css";
import UserInfoForm from "../UserInfoForm";
import PageLayout from "../../layout/PageLayout";
import {
  fetchOneUserInfo,
  updateOneUserInfo,
  updateMediaProfile
} from "../../../_actions/user-info";
import { TokenService } from "../../../_services/token";
import ScreenLoader from "../../shared/ScreenLoader";
import { ImageService } from "../../../_services/image";
import { VideoService } from "../../../_services/video";

import { mediaUrl } from "../../../_constants/mediaBaseUrl";
import UploadProgress from "../../shared/UploadProgress";
import { toast } from 'react-toastify';
import UploadButton from "../../shared/UploadButton";

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
    var userId = TokenService.extractUserId();
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
    const result = await ImageService.uploadImageToMediaServer(
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
    const result = await VideoService.uploadVideoToMediaServer(
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
              <UploadButton
                content="Change avatar"
                acceptType="image/png, image/jpeg"
                id="image"
                callback={this.uploadImage}
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
              <UploadButton
                content="Change video"
                acceptType="video/mp4"
                id="video"
                callback={this.uploadVideo}
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
