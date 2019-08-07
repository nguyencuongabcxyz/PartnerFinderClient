import React from 'react'
import NavigationBar from './NavigationBar';
import DownButton from './shared/DownButton';
import BasicButton from './shared/BasicButton';
import '../assets/css/home.css';
import '../assets/css/sharedHover.css'


const Home = () => {

    return (
        <div id="Home">
            <div id="section1">
                <NavigationBar />
                <div id="center-intro">
                    <h1 id="sologan">Let's find your partner</h1>
                    <h2 id="sub-sologan">Let <span style={{ color: '#FFB906', fontFamily: 'Pacifico, cursive', fontSize: '28px' }}>PartnerFinder</span> help you enhance your english skills</h2>
                    <BasicButton content="Join us now" />
                </div>
                <DownButton link="section2" textColor="white" headContent="See how" tailContent="can help you" />
            </div>
            <div id="section2">
                <h1 className="section-title">How <span>PartnerFinder</span> can help you</h1>
                <div className="section-content row">
                    <div className="section-block col-lg-3">
                        <img src="/Images/finding_partner.svg" alt="finding_partner"></img>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice for projects looking for smaller builds at the expense of some features.</p>
                    </div>
                    <div className="section-block col-lg-3">
                        <img src="/Images/asking.svg" alt="asking"></img>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice for projects looking for smaller builds at the expense of some features.</p>
                    </div>
                    <div className="section-block col-lg-3">
                        <img src="/Images/feedback.svg" alt="feedback"></img>
                        <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice for projects looking for smaller builds at the expense of some features.</p>
                    </div>
                </div>
                <DownButton link="section3" textColor="#2F80ED" headContent="See how" tailContent="works" />
            </div>
            <div id="section3">
                <h1 className="section-title">See how <span>PartnerFinder</span> works</h1>
                <div className="guide-content">
                    <div className="guide-block">
                        <img alt="guide_image" src="/Images/exam_guide.svg"></img>
                        <p><span>1</span>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                    </div>
                    <div className="guide-block block-right">
                        <p><span>2</span>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        <img alt="guide_image" src="/Images/fill_info_guide.svg"></img>
                    </div>
                    <div className="guide-block">
                        <img alt="guide_image" src="/Images/search_guide.svg"></img>
                        <p><span>3</span>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                    </div>
                    <div className="guide-block block-right">
                        <p><span>4</span>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. reactstrap is also a good choice</p>
                        <img alt="guide_image" src="/Images/question_guide.svg"></img>
                    </div>
                </div>
            </div>
            <div id="section4">

            </div>
        </div>
    );
}

export default Home;
