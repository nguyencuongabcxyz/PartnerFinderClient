import React from 'react'
import NavigationBar from './NavigationBar';
import DownButton from '../../_components/shared/DownButton';
import BasicButton from '../../_components/shared/BasicButton';
import './home.css';
import '../../assets/css/sharedHover.css'
import LoginPage from '../LoginPage';

const scrollToTop = (e) => {
    e.preventDefault();
    var section = document.getElementById("section1");
    section.scrollIntoView({
        behavior: "smooth"
    });
}

const customStyleBasicButtonSection1 = {
    background: '#F15D03',
    border: 'none',
    color: '#FFFFFF',
}

const customStyleBasicButtonSection4 = {
    background: 'none',
    border: '1px solid',
    color: '#4f4f4f',
}

const Home = () => {
    console.log('home render');
    return (
        <div id="Home">
            <div id="section1">
                <NavigationBar />
                <LoginPage />
                <div id="center-intro">
                    <h1 id="sologan">Let's find your partner</h1>
                    <h2 id="sub-sologan">Let <span style={{ color: '#FFB906', fontFamily: 'Pacifico, cursive', fontSize: '28px' }}>PartnerFinder</span> help you enhance your english skills</h2>
                    <BasicButton customStyles={customStyleBasicButtonSection1} content="Join us now" />
                </div>
                <DownButton link="section2" textColor="white" headContent="See how" tailContent="can help you" />
            </div>
            <div id="section2">
                <h1 className="section-title">How <span>PartnerFinder</span> can help you</h1>
                <div className="section-content row">
                    <div className="section-block col-lg-3">
                        <img src="/Images/finding_partner.svg" alt="finding_partner"></img>
                        <h2>While you don’t have to use any specific library to</h2>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap.</p>
                    </div>
                    <div className="section-block col-lg-3">
                        <img src="/Images/asking.svg" alt="asking"></img>
                        <h2>While you don’t have to use any specific library to</h2>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. </p>
                    </div>
                    <div className="section-block col-lg-3">
                        <img src="/Images/feedback.svg" alt="feedback"></img>
                        <h2>While you don’t have to use any specific library to</h2>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. </p>
                    </div>
                </div>
                <DownButton link="section3" textColor="#4f4f4f" headContent="See how" tailContent="works" />
            </div>
            <div id="section3">
                <h1 className="section-title">See how <span>PartnerFinder</span> works</h1>
                <div className="guide-content">
                    <div className="guide-block">
                        <img alt="guide_image" src="/Images/exam_guide.svg"></img>
                        <div>
                        <h2><span>1</span>While you don’t have to use any specific library to integrate Bootstrap with React apps</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        </div>
                    </div>
                    <div className="guide-block block-right">
                        <div>
                        <h2><span>2</span>While you don’t have to use any specific library to integrate Bootstrap with React apps</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        </div>
                        <img alt="guide_image" src="/Images/fill_info_guide.svg"></img>
                    </div>
                    <div className="guide-block">
                        <img alt="guide_image" src="/Images/search_guide.svg"></img>
                        <div>
                        <h2><span>3</span>While you don’t have to use any specific library to integrate Bootstrap with React apps</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        </div>
                    </div>
                    <div className="guide-block block-right">
                        <div>
                            <h2><span>4</span>While you don’t have to use any specific library to integrate Bootstrap with React apps</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        </div>
                        <img alt="guide_image" src="/Images/question_guide.svg"></img>
                    </div>
                </div>
            </div>
            <div id="section4">
                <div id="flex-container">
                    <div id="first-part">
                        <h2>About us</h2>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps</p>
                    </div>
                    <div id="center-part">
                        <h2>Contact us</h2>
                        <div id="contact-item">
                            <a href="https://www.facebook.com/profile.php?id=100005185776957"><img alt="contact-icon" src="/Images/facebook.svg"></img>Facebook</a>
                            <a href="https://www.instagram.com/nguyencuong1111/"><img alt="contact-icon" src="/Images/instagram.svg"></img>Instagram</a>
                            <p><img alt="contact-icon" src="/Images/email.svg"></img>nguyencuongoc@gmail.com</p>
                            <p><img alt="contact-icon" src="/Images/phone.svg"></img>+84969087853</p>
                        </div>
                    </div>
                    <div id="third-part">
                        <BasicButton customStyles={customStyleBasicButtonSection4} content="Join us" />
                    </div>
                </div>
                <div style={{ textTransform: 'uppercase', fontWeight: '600', position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', paddingBottom: '20px' }}>Copyright by partnerfinder.com.vn 2019</div>
            </div>
            <img onClick={(e) => { scrollToTop(e) }} style={{ position: "fixed", bottom: '30px', left: '95vw', cursor: 'pointer' }} width="40px" alt="back-to-top" src="/Images/back-to-top.svg"></img>
        </div>
    );
}

export default Home;
