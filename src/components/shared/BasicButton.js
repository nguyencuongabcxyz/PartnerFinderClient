import React from 'react';
import '../../assets/css/sharedHover.css'

const BasicButton = ({content, customStyles}) => {
    const defaultStyle = {
        height: '60px',
        minWidth: '200px',
        borderRadius: '8px',
        fontSize: '22px',
        lineHeight: '18px',
        fontWeight: 'bold',
        padding: '0px 10px 0px 10px'
    }
    const buttonStyle = {...defaultStyle, ...customStyles};
    return (
        <button id="basic-button" style={buttonStyle}>{content}</button>
    );
}

export default BasicButton;