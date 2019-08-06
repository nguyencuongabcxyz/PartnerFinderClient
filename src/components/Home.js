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
                <h2 id="sub-sologan">Let <span style={{color: '#6C3A8F', fontFamily: 'Pacifico, cursive', fontSize:'33px'}}>PartnerFinder</span> help you enhance your english skills</h2>
                <BasicButton content="Join us now" />
                </div>
                <DownButton   headContent="See how" tailContent="can help you" />
            </div>
            <div id="section2">
            </div>
            <div id="section3">

            </div>
            <div id="section4">

            </div>
        </div>
    );
}

export default Home;
