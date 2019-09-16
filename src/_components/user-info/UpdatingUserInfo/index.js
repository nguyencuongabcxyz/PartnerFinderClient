import React from 'react';
import './style.css';
import UserInfoForm from '../UserInfoForm';
import PageLayout from '../../layout/PageLayout';

class UpdatingUserInfo extends React.Component {
    render() {
        return (
            <PageLayout>
            <div id="update-info" className="row">
                <div id="left-section" className="col-lg-4">
                    <div id="avatar-block">
                        <div className='square-box'>
                            <div className='square-content'>
                                <img src="http://localhost:5000/images/linh.jpg" alt="avatar" />
                            </div>
                        </div>
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
                    <UserInfoForm />
                </div>
            </div>
            </PageLayout>
        );
    }
}

export default UpdatingUserInfo;