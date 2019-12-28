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
                            <h2>Finding your partner to practice English with</h2>
                            <p>Partner finder helps you to find people having passion of learning English like you. They will help you improve your skills and you will do that in return</p>
                        </div>
                        <div className="section-block col-lg-3 col-md-4 hidden">
                            <img src={process.env.PUBLIC_URL + "/images/HomePage/asking.svg"} alt="asking"></img>
                            <h2>Asking question hard to solve</h2>
                            <p>Partner finder helps you to receive answers of your questions from thousands of other people that you can not deal with. Anytime when you study alone.</p>
                        </div>
                        <div className="section-block col-lg-3 col-md-4 hidden">
                            <img src={process.env.PUBLIC_URL + "/images/HomePage/feedback.svg"} alt="feedback"></img>
                            <h2>Getting feedback from other people</h2>
                            <p>Partner finder helps you to receive feedbacks for your English practice from thousands of other people.It helps you to improve speaking and writing skills</p>
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
                            <h2><span>1</span>Take a test and PartnerFinder will help you to get your english level</h2>
                                <p>After you sign up and log into PartnerFinder, you can choose to have a test to get your level so that you can find your ideal partner.</p>
                            </div>
                        </div>
                        <div className="guide-block block-right">
                            <div>
                            <h2><span>2</span>Update your information</h2>
                                <p>After log into PartnerFinder you can update you profile with a introduction video so that other people can find you when looking at your profile</p>
                            </div>
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/fill_info_guide.svg"}></img>
                        </div>
                        <div className="guide-block block-left">
                            <img alt="guide_image" src={process.env.PUBLIC_URL + "/images/HomePage/search_guide.svg"}></img>
                            <div>
                            <h2><span>3</span>Looking for your partner</h2>
                                <p>You can find your ideal partners when looking at other people of PartnerFinder site.When you have partners, you can interact with them in many way</p>
                            </div>
                        </div>
                        <div className="guide-block block-right">
                            <div>
                                <h2><span>4</span>Asking questions and feedbacks</h2>
                                <p>You can ask questions for the problems that you can not solve and ask to get feedbacks from other user when you study and practice English alone </p>
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
