import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOneUserInfo } from '../../../_actions/userInfoActions'
import PageLayout from '../../layout/PageLayout';
import { extractTokenService } from '../../../_services/extractTokenService';
import { userService } from '../../../_services/userService';
import ScreenLoader from '../../shared/ScreenLoader';

class ShowingUserInfo extends React.Component {

    state = {
        completedInfoPercentage : 0,
    }

    renderLevelStar = () => {
        if (this.props.userInfo) {
            switch (this.props.userInfo.level) {
                case 0:
                    return (
                        <div id="star-block">
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                        </div>
                    );
                case 1:
                    return (
                        <div id="star-block">
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                        </div>
                    );
                case 2:
                    return (
                        <div id="star-block">
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/active-star.svg" height="30" />
                        </div>
                    );
                default:
                    return (
                        <div id="star-block">
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                            <img alt="star" src="/images/userinfo/star.svg" height="30" />
                        </div>
                    );
            }
        }
    }

    async componentDidMount() {
        const userId = extractTokenService.extractUserId();
        const userInfo = await userService.checkUserInfoAfterLogin();
        if(userInfo){
        this.setState({
            completedInfoPercentage: userInfo.completedInfoPercentage
        })
    }
        this.props.fetchOneUserInfo(userId);
    }

    render() {
        return (
            <PageLayout>
                {this.props.fetching && <ScreenLoader/>}
                <div id="user-info" className="row">
                    <div id="left-section" className="col-lg-4">
                        <div id="avatar-block">
                            <div className='square-box'>
                                <div className='square-content'>
                                    <img src={this.props.userInfo.avatar} alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <div id="video-block">
                            <h4 className="block-title">Introduction video</h4>
                            <div className="foot-line"></div>
                            <video src={this.props.userInfo.video} controls>
                                Your browser does not support the video tag.
                        </video>
                        </div>
                        <div id="audio-block">
                            <h4 className="block-title">Introduction audio</h4>
                            <div className="foot-line"></div>
                            <audio src={this.props.userInfo.voiceAudio} controls>
                                Your browser does not support the audio tag.
                        </audio>
                        </div>
                    </div>
                    <div id="right-section" className="col-lg-8">
                        <div id="top-info-wrapper">
                            <div id="overall-info">
                                <h2>{this.props.userInfo.name}</h2>
                                <div id="location-block">
                                    <img src="/images/userinfo/location.svg" alt="location" height="30" width="30" />
                                    <p>{this.props.userInfo.location}</p>
                                </div>
                                <p>Age: {this.props.userInfo.age}</p>
                                <div id="level-block">
                                    <p>Level: </p>
                                    {this.renderLevelStar()}
                                </div>
                            </div>
                            <div id="completed-info">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.completedInfoPercentage}% your information have been updated!</h5>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{width: `${this.state.completedInfoPercentage}%`}} role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="card-text">Update your information to help you impress other people and get a high chance to meet your ideal partner</p>
                                    <Link to={"/updateinfo"} className="right-btn btn btn-warning" >Update information</Link>
                                </div>
                            </div>
                        </div>
                        <div id="about-section">
                            <h2>More information</h2>
                            <div className="foot-line"></div>
                            <p><strong>English skill:</strong> {this.props.userInfo.englishSkill}</p>
                            <p><strong>Skill want to learn:</strong> {this.props.userInfo.learningSkill}</p>
                            <p><strong>Hobbies:</strong> {this.props.userInfo.hobbies}</p>
                            <p><strong>Introduction:</strong> {this.props.userInfo.introduction}</p>
                            <p><strong>Expectation for partner:</strong> {this.props.userInfo.expectation}</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </PageLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo.data,
        fetching: state.userInfo.fetching
    }
}

export default connect(mapStateToProps, { fetchOneUserInfo })(ShowingUserInfo);