import React from 'react';
import '../../assets/css/sharedHover.css';
const NavigationBar = () => {
    const navBarStyles = {
        display: 'flex',
        paddingTop: '25px',
        paddingLeft: '5%'
    }
    const buttonStyles = {
        background: 'none',
        border: 'none',
        marginRight: '30px',
        fontSize:  '22px',
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Dancing Script, cursive'
    }
    const buttonSectionStyles = {
        display: 'flex',
        paddingTop: '15px'
    }
    return(
        <div id="navigation-bar" style={navBarStyles}>
            <div style={{marginRight: '40px'}}>
                <img src="/Images/logo.svg" alt="logo" height="70px" width="70px" />
            </div>
            <div id="button-section" style={buttonSectionStyles}>
            <div>
                <button type="button" className="auth-button" style={buttonStyles} data-toggle="modal" data-target="#exampleModal">Sign In</button>
            </div>
            <div>
                <button className="auth-button" style={buttonStyles}>Sign Up</button>
            </div>
            </div>
        </div>
    );
}

export default NavigationBar;