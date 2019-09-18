import React from 'react';
import './style.css';
import UserInfoForm from '../UserInfoForm';
import PageLayout from '../../layout/PageLayout';
import { connect } from 'react-redux';
import { fetchOneUserInfo, updateOneUserInfo } from '../../../_actions/userInfoActions';
import { extractTokenService } from '../../../_services/extractTokenService';
import ScreenLoader from '../../shared/ScreenLoader';
import axios from 'axios';

class UpdatingUserInfo extends React.Component {

    componentDidMount() {
        var userId = extractTokenService.extractUserId();
        this.props.fetchOneUserInfo(userId);
    }

    submitUserInfo = (formValues) => {
        var userId = extractTokenService.extractUserId();
        this.props.updateOneUserInfo(userId, formValues);
    }

    sendFile = () => {
        const fileHolder = document.getElementById('avatar');

        console.log(fileHolder.value);
    }

    render() {
        return (
            <PageLayout>
                {this.props.fetching && <ScreenLoader />}
                {this.props.updating && <ScreenLoader />}
                <div id="update-info" className="row">
                    <div id="left-section" className="col-lg-4">
                        <div id="avatar-block">
                            <div className='square-box'>
                                <div className='square-content'>
                                    <img src="http://localhost:5000/images/linh.jpg" alt="avatar" />
                                </div>
                            </div>
                            <input 
                                type="file"
                                id="avatar" name="avatar"
                                accept="image/png, image/jpeg" 
                            />
                        </div>
                            <div id="video-block">
                                <h4 className="block-title">Introduction video</h4>
                                <div className="foot-line"></div>
                                <video src="http://localhost:5000/videos/abc.mp4" controls>
                                    Your browser does not support the video tag.
                        </video>
                            </div>
                            <div id="audio-block">
                                <h4 className="block-title">Introduction audio</h4>
                                <div className="foot-line"></div>
                                <audio src="http://localhost:5000/audio/xyz.mp3" controls>
                                    Your browser does not support the audio tag.
                        </audio>
                            </div>
                        </div>
                        <div id="right-section" className="col-lg-8">
                            <UserInfoForm onSubmit={this.submitUserInfo} initialValues={this.props.userInfo} />
                        </div>
                    </div>
            </PageLayout>
                );
            }
        }
        
const mapStateToProps = (state) => {
    return {
                    userInfo: state.userInfo.data,
                fetching: state.userInfo.fetching,
                updating: state.userInfo.updating
            };
        }
        
export default connect(mapStateToProps, {
                    fetchOneUserInfo,
                    updateOneUserInfo
                })(UpdatingUserInfo);