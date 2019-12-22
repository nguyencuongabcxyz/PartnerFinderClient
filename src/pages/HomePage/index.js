import React from 'react'
import NavigationBar from './NavigationBar';
import DownButton from '../../_components/shared/DownButton';
import BasicButton from '../../_components/shared/BasicButton';
import './home.css';
import '../../assets/css/sharedHover.css'
import Login from '../../_components/auth/Login';
import Register from '../../_components/auth/Register';
import Footer from '../../_components/layout/Footer';
import { removeModalBootstrap } from '../../_helpers/uiHelper';

import $ from 'jquery'

const scrollToTop = (e) => {
    e.preventDefault();
    var section = document.getElementById("section1");
    section.scrollIntoView({
        behavior: "smooth"
    });
}

const customStyleBasicButtonSection1 = {
    background : '#F8B906',
    border: 'none',
    color: 'black',
}
class Home extends React.Component {

    animateBlock = () => {
        window.addEventListener("scroll", function (event) {
            const section2Title = document.getElementById('hp-section2-title');
            const section3Title = this.document.getElementById('hp-section3-title');
            if(!section2Title || !section3Title) return;
            var section2Offsets = section2Title.getBoundingClientRect();
            var section3Offsets = section3Title.getBoundingClientRect();
            const screenHeight = $(this.window).height();
            if (section2Offsets.top < screenHeight - 400) {
              const element = document.getElementsByClassName("section-block");
              for(let i = 0; i < element.length; i++){
                element[i].classList.remove("hidden");
                element[i].classList.add("animated", "fadeInUp");
              }
            }
            if (section3Offsets.top < screenHeight - 200){
               const rightElement = document.getElementsByClassName('block-right');
               const leftElement = this.document.getElementsByClassName('block-left');
               for(let i = 0; i < rightElement.length; i++){
                rightElement[i].classList.add("animated", "fadeInRight");
              }
              for(let i = 0; i < leftElement.length; i++){
                leftElement[i].classList.add("animated", "fadeInLeft");
              }
            }
        });
    }

    componentDidMount(){
        document.getElementById("section1").style.backgroundImage = `linear-gradient(
            rgba(10, 0, 0, 0.9),
            rgba(8, 7, 7, 0.6)
          ),url('${process.env.PUBLIC_URL + "/images/HomePage/background_home1.jpg"}')`;
        this.animateBlock();
        removeModalBootstrap();
    }
    render(){
        return (
            <div id="Home">
                <div id="section1">
                    <NavigationBar />
                    <Login />
                    <Register />
                    <div id="center-intro">
                        <h1 id="sologan">Let's find your partner</h1>
                        <h2 id="sub-sologan">Let <span style={{ color: '#FFB906', fontFamily: 'Open Sans, sans-serif', fontSize: '28px', fontWeight: '600' }}>PartnerFinder</span> help you enhance your english skills</h2>
                        <BasicButton isLoginButton={true} customStyles={customStyleBasicButtonSection1} content="Join us now" />
                    </div>
                    <DownButton link="section2" textColor="white" headContent="See how" tailContent="can help you" />
                </div>
                <div id="section2">
                    <h1 id="hp-section2-title" className="section-title">How <span>PartnerFinder</span> can help you</h1>
                    <div className="section-content row">
                        <div className="section-block col-lg-3 col-md-4 hidden">
                            <img src={process.env.PUBLIC_URL + "/images/HomePage/finding_partner.svg"} alt="finding_partner"></img>
                            <h2>While you don’t have to use any specific library to</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap.</p>
                        </div>
                        <div className="section-block col-lg-3 col-md-4 hidden">
                            <img src={process.env.PUBLIC_URL + "/images/HomePage/asking.svg"} alt="asking"></img>
                            <h2>While you don’t have to use any specific library to</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. </p>
                        </div>
                        <div className="section-block col-lg-3 col-md-4 hidden">
                            <img src={process.env.PUBLIC_URL + "/images/HomePage/feedback.svg"} alt="feedback"></img>
                            <h2>While you don’t have to use any specific library to</h2>
                            <p>While you don’t have to use any specific library to integrate Bootstrap with React apps, it's often easier than trying to wrap the Bootstrap jQuery plugins. React Bootstrap is the most popular option that strives for complete parity with Bootstrap. </p>
                        </div>
                    </div>
                    <DownButton link="section3" textColor="#4f4f4f" headContent="See how" tailContent="works" />
                    <span id="end-line"></span>
                </div>
                <div id="section3">
                    <h1 id="hp-section3-title" className="section-title">See how <span>PartnerFinder</span> works</h1>
                    <div className="guide-content">
                        <div className="guide-block block-left">
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/exam_guide.svg"}></img>
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
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/fill_info_guide.svg"}></img>
                        </div>
                        <div className="guide-block block-left">
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/search_guide.svg"}></img>
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
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/question_guide.svg"}></img>
                        </div>
                    </div>
                </div>
                <Footer />
                <img id="back-to-top" onClick={(e) => { scrollToTop(e) }} style={{ position: "fixed", bottom: '30px', left: '93vw', cursor: 'pointer' }} width="40px" alt="back-to-top" src={process.env.PUBLIC_URL + "/images/HomePage/back-to-top.svg"}></img>
            </div>
        );
    }
}

export default Home;
