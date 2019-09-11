import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import PageLayout from '../../layout/PageLayout';

class ShowingUserInfo extends React.Component {
    render() {
        return (
            <PageLayout>
                <div id="user-info" className="row">
                    <div id="left-section" className="col-lg-4">
                        <div id="avatar-block">
                            <div class='square-box'>
                                <div class='square-content'>
                                    <img src="http://localhost:5000/images/myavatar.jpg" alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div id="video-block">
                            <h4 className="block-title">Introduction video</h4>
                            <div className="foot-line"></div>
                            <video controls>
                                <source src="http://localhost:5000/videos/abc.mp4" type="video/mp4" />
                                <source src="http://localhost:5000/videos/abc.mp4" type="video/ogg" />
                                Your browser does not support the video tag.
                        </video>
                        </div>
                        <div id="audio-block">
                            <h4 className="block-title">Introduction audio</h4>
                            <div className="foot-line"></div>
                            <audio controls>
                                <source src="http://localhost:5000/audio/xyz.mp3" type="audio/ogg" />
                                <source src="http://localhost:5000/audio/xyz.mp3" type="audio/mpeg" />
                                Your browser does not support the audio tag.
                        </audio>
                        </div>
                    </div>
                    <div id="right-section" className="col-lg-8">
                        <div id="top-info-wrapper">
                        <div id="overall-info">
                            <h2>Jeremy Rose</h2>
                            <div id="location-block">
                                <img src="/images/userinfo/location.svg" alt="location" height="30" width="30" />
                                <p>New York, NY</p>
                            </div>
                            <p>Age: 18</p>
                            <div id="level-block">
                                <p>Level: </p>
                                <div id="star-block">
                                    <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                                    <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                                    <img alt="star" src="/images/userinfo/star.svg" height="30" />
                                </div>
                            </div>
                        </div>
                        <div id="completed-info">
                            <div className="card-body">
                                <h5 className="card-title">40% your information have been updated!</h5>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" style={{ width: '40%' }} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text">Update your information to help you impress other people and get a high chance to meet your ideal partner</p>
                                <Link to={"/testintro"} className="right-btn btn btn-warning" >Update information</Link>
                            </div>
                        </div>
                        </div>
                        <div id="about-section">
                            <h2>More information</h2>
                            <div className="foot-line"></div>
                            <p><strong>English skill:</strong> Yeah, I'm gonna take my horse to the old town road I'm gonna ride 'til I can't no more</p>
                            <p><strong>Skill want to learn:</strong> Writing , Listening</p>
                            <p><strong>Hobbies:</strong> Calvin Nguyen - Managing Director of Sioux High Tech Software and Board member of Sioux SEA, is a Canadian with roots in Da Nang. After living, learning and working in Canada for over 30 years</p>
                            <p><strong>Introduction:</strong> There are also DOM events that can notify you when a video begins to play, is paused, etc.</p>
                            <p><strong>Expectation for partner:</strong> This allows you to load, play, and pause videos, as well as setting duration and volume.</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

export default ShowingUserInfo;