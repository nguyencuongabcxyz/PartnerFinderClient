import React from 'react'
import NavigationBar from './NavigationBar';
import DownButton from './shared/DownButton';
import BasicButton from './shared/BasicButton';
import '../assets/css/home.css';

const Home = () => {
    const sologanStyle = {
        color: 'white',

    }
    return (
        <div id="Home">
            <div id="section1" style={{position: 'relative'}}>
                <div>
                <NavigationBar />
                <h1 id="sologan" style={{color: 'white'}}>Let's find your partner and let <span style={{color: '#FDB82D', fontFamily: 'Pacifico, cursive'}}>PartnerFinder</span> help you enhance your english skills</h1>
                <BasicButton content="Join Us" />
                <DownButton content="How PartnerFinder can help you" />
                </div>
                <div >             
                 </div>
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
