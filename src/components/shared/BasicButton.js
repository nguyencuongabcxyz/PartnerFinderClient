import React from 'react';
import '../../assets/css/sharedHover.css'

const BasicButton = ({content}) => {
    const buttonStyle = {
        height: '60px',
        minWidth: '200px',
        background: '#F15D03',
        borderRadius: '8px',
        border: 'none',
        fontSize: '22px',
        lineHeight: '18px',
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: '0px 10px 0px 10px'
    }
    return (
        <button id="basic-button" style={buttonStyle}>{content}</button>
    );
}

export default BasicButton;