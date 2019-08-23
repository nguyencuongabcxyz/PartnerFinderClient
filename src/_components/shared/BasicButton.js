import React from 'react';
import '../../assets/css/sharedHover.css'

const BasicButton = ({ content, customStyles, isLoginButton, onClick }) => {
    const defaultStyle = {
        height: '60px',
        minWidth: '200px',
        borderRadius: '8px',
        fontSize: '22px',
        lineHeight: '18px',
        fontWeight: 'bold',
        padding: '0px 10px 0px 10px'
    }
    const buttonStyle = { ...defaultStyle, ...customStyles };
    if (isLoginButton) {
        return (
            <button onClick={onClick} id="basic-button" style={buttonStyle} data-toggle="modal" data-target="#loginModal">{content}</button>
        );
    } else {
        return (
            <button onClick={onClick} id="basic-button" style={buttonStyle}>{content}</button>
        );
    }
}

export default BasicButton;