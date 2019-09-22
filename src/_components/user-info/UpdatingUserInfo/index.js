import React from "react";
import "./style.css";
import UserInfoForm from "../UserInfoForm";
import PageLayout from "../../layout/PageLayout";
import { connect } from "react-redux";
import {
  fetchOneUserInfo,
  updateOneUserInfo
} from "../../../_actions/userInfoActions";
import { extractTokenService } from "../../../_services/extractTokenService";
import ScreenLoader from "../../shared/ScreenLoader";
import { imageService } from "../../../_services/imageService";
import { videoService } from "../../../_services/videoService";
import { audioService } from "../../../_services/audioService";

class UpdatingUserInfo extends React.Component {
  componentDidMount() {
    var userId = extractTokenService.extractUserId();
    this.props.fetchOneUserInfo(userId);
  }

  submitUserInfo = formValues => {
    var userId = extractTokenService.extractUserId();
    this.props.updateOneUserInfo(userId, formValues);
  };

  uploadImage = async e => {
    const file = e.target.files[0];
    const result = await imageService.uploadImageToMediaServer(file);
    if (result && result.successfull) {
        console.log('successfull!');
    }
    else{
        console.log('Failed!');
    }
  };

  uploadVideo = async e => {
    const file = e.target.files[0];
    const result = await videoService.uploadVideoToMediaServer(file);
    if (result && result.successfull) {
        console.log('successfull!');
    }
    else{
        console.log('Failed!');
    }
  };

  uploadAudio = async e => {
    const file = e.target.files[0];
    const result = await audioService.uploadAudioToMediaServer(file);
    if (result && result.successfull) {
        console.log('successfull!');
    }
    else{
        console.log('Failed!');
    }
  };

  render() {
    const { userInfo } = this.props;
    return (
      <PageLayout>
        {this.props.fetching && <ScreenLoader />}
        {this.props.updating && <ScreenLoader />}
        <div id="update-info" className="row">
          <div id="left-section" className="col-lg-4">
            <div id="avatar-block">
              <div className="square-box">
                <div className="square-content">
                  <img src={userInfo.avatar} alt="avatar" />
                </div>
              </div>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={e => {
                  this.uploadImage(e);
                }}
              />
            </div>
            <div id="video-block">
              <h4 className="block-title">Introduction video</h4>
              <div className="foot-line"></div>
              <video src={userInfo.video} controls>
                Your browser does not support the video tag.
              </video>
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
            </div>
            <div id="audio-block">
              <h4 className="block-title">Introduction audio</h4>
              <div className="foot-line"></div>
              <audio src={userInfo.voiceAudio} controls>
                Your browser does not support the audio tag.
              </audio>
              <input
                type="file"
                id="voiceAudio"
                name="voiceAudio"
                accept="audio/mp3"
                onChange={e => {
                  this.uploadAudio(e);
                }}
              />
            </div>
          </div>
          <div id="right-section" className="col-lg-8">
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
    updateOneUserInfo
  }
)(UpdatingUserInfo);
