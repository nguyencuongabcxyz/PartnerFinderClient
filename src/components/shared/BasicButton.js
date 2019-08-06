import React from 'react';

const BasicButton = ({content}) => {
    const buttonStyle = {
        height: '50px',
        minWidth: '185px',
        background: '#F15D03',
        borderRadius: '28px',
        border: 'none',
        //fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '18px',
        color: '#FFFFFF',
        fontWeight: 'bold',
        padding: '0px 10px 0px 10px'
    }
    return (
        <button style={buttonStyle}>{content}</button>
    );
}

export default BasicButton;