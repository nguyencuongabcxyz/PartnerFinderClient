import React from 'react'
import '../../assets/css/sharedHover.css'

const scrollToSection = (link, e) => {
    e.preventDefault();
    var section = document.getElementById(link);
    section.scrollIntoView({
        behavior: "smooth"
    });
}

const DownButton = ({headContent, tailContent, textColor, link}) => {
    const textStyle = {
        color: textColor,
        fontSize: '18px',
        fontWeight: 'bold',
        fontFamily: 'Open Sans, sans-serif'
    }
    return(
        <div className="down-button">
            <p style={textStyle}>{headContent}<span style={{color: '#FFB906', fontFamily: 'Open Sans, sans-serif', fontSize:'20px'}}> PartnerFinder </span>{tailContent}</p>
            <div style={{position: 'relative', height: '50px'}}>
            <img onClick={(e)=>scrollToSection(link, e)} style={{cursor: 'pointer', position: 'absolute', left: 'calc(50vw - 35px)'}} height="50px" width="50px" alt="down_img" src={process.env.PUBLIC_URL + "/images/HomePage/Vector.svg"}></img>
            </div>
        </div>
    );
}

export default DownButton;