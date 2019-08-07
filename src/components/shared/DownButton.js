import React from 'react'
import '../../assets/css/sharedHover.css'

const scrollToSection = (link, e) => {
    e.preventDefault();
    console.log(link);
    var section = document.getElementById(link);
    section.scrollIntoView({
        behavior: "smooth"
    });
}

const DownButton = ({headContent, tailContent, textColor, link}) => {
    const textStyle = {
        color: textColor,
        fontSize: '25px',
        fontWeight: 'bold'
    }
    return(
        <div className="down-button">
            <p style={textStyle}>{headContent}<span style={{color: '#FFB906', fontFamily: 'Pacifico, cursive', fontSize:'27px'}}> PartnerFinder </span>{tailContent}</p>
            <img onClick={(e)=>scrollToSection(link, e)} style={{cursor: 'pointer'}} height="60px" width="60px" alt="down_img" src="/images/Vector.svg"></img>
        </div>
    );
}

export default DownButton;