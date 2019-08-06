import React from 'react'
import '../../assets/css/sharedHover.css'

const DownButton = ({headContent, tailContent}) => {
    const textStyle = {
        color: 'white',
        fontSize: '25px',
        fontWeight: 'bold'
    }
    return(
        <div id="down-button">
            <p style={textStyle}>{headContent}<span style={{color: '#6C3A8F', fontFamily: 'Pacifico, cursive', fontSize:'27px'}}> PartnerFinder </span>{tailContent}</p>
            <img height="60px" width="60px" alt="down_img" src="/images/Vector.svg"></img>
        </div>
    );
}

export default DownButton;