import React from 'react'

const NavigationBar = () => {
    const navBarStyles = {
        display: 'flex',
        paddingTop: '15px',
        paddingLeft: '15px'
    }
    const buttonStyles = {
        height: '70px',
        width: '120px',
        background: 'none',
        border: 'solid white 1px',
        marginRight: '10px',
        fontSize:  '18px',
        fontWeight: 'bold',
        color: 'white'
    }
    return(
        <div id="navigation-bar" style={navBarStyles}>
            <div style={{marginRight: '20px'}}>
                <img src="/Images/logo.svg" alt="logo" height="70px" width="70px" />
            </div>
            <div>
                <button style={buttonStyles}>Sign In</button>
            </div>
            <div>
                <button style={buttonStyles}>Sign Up</button>
            </div>
        </div>
    );
}

export default NavigationBar;